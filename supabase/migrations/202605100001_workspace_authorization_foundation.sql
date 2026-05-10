-- FinCity workspace authorization foundation.
-- Draft migration for Supabase Auth compatible tenant, role and module authorization.
-- No production data is inserted here.

create extension if not exists "pgcrypto";

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  legal_name text,
  tax_number text,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.company_memberships (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  unique(company_id, user_id)
);

create table if not exists public.modules (
  id text primary key,
  name text not null,
  description text,
  kind text not null default 'internal',
  external_url text
);

create table if not exists public.company_modules (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  module_id text not null references public.modules(id) on delete cascade,
  is_enabled boolean not null default true,
  external_url text,
  created_at timestamptz not null default now(),
  unique(company_id, module_id)
);

create table if not exists public.role_permissions (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  module_id text not null references public.modules(id) on delete cascade,
  can_view boolean not null default false,
  can_create boolean not null default false,
  can_edit boolean not null default false,
  can_delete boolean not null default false,
  can_manage boolean not null default false,
  unique(role, module_id)
);

create table if not exists public.invitations (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  email text not null,
  role text not null,
  invited_by uuid references public.profiles(id),
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  user_id uuid references public.profiles(id),
  action text not null,
  entity_type text,
  entity_id text,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  module_id text references public.modules(id),
  title text not null,
  file_path text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  module_id text references public.modules(id),
  title text not null,
  status text not null default 'open',
  assigned_to uuid references public.profiles(id),
  due_date date,
  created_at timestamptz not null default now()
);

insert into public.modules (id, name, description, kind) values
  ('dashboard', 'Dashboard', 'Genel özet ekranı', 'internal'),
  ('reporting', 'Raporlama', 'Yönetim raporları', 'internal'),
  ('budget_performance', 'Bütçe & Performans', 'Bütçe, gerçekleşen ve sapma analizi', 'internal'),
  ('cashflow', 'Nakit Akışı', 'Tahsilat, ödeme ve projeksiyon takibi', 'internal'),
  ('teknokent_arge', 'Teknokent / Ar-Ge', 'Proje, personel, muafiyet ve teşvik takibi', 'internal'),
  ('documents', 'Belgeler', 'Rapor, sözleşme ve proje dokümanları', 'internal'),
  ('financial_operations', 'Mali Süreçler', 'Muhasebe, bordro, kapanış ve kontrol listeleri', 'internal'),
  ('accounting_advisory', 'Mali Müşavirlik', 'Dış bağlantıya yönlenen mali müşavirlik alanı', 'external'),
  ('user_management', 'Kullanıcı ve Yetkiler', 'Kullanıcı, rol ve modül erişimi yönetimi', 'internal')
on conflict (id) do update set name = excluded.name, description = excluded.description, kind = excluded.kind;

alter table public.companies enable row level security;
alter table public.profiles enable row level security;
alter table public.company_memberships enable row level security;
alter table public.modules enable row level security;
alter table public.company_modules enable row level security;
alter table public.role_permissions enable row level security;
alter table public.invitations enable row level security;
alter table public.audit_logs enable row level security;
alter table public.documents enable row level security;
alter table public.tasks enable row level security;

create index if not exists idx_company_memberships_user_id on public.company_memberships(user_id);
create index if not exists idx_company_memberships_company_id on public.company_memberships(company_id);
create index if not exists idx_company_modules_company_id on public.company_modules(company_id);
create index if not exists idx_documents_company_id on public.documents(company_id);
create index if not exists idx_tasks_company_id on public.tasks(company_id);

-- Baseline policy idea:
-- Users should access company-scoped rows only when an active company_memberships record exists for auth.uid().
-- FinCity super admin access should be handled through company_memberships.role = 'fincity_super_admin'.
-- Full production policies should be validated before enabling real customer data.
