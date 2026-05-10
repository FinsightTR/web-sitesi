import { moduleLabels, roleLabels } from "@/lib/workspace/permissions";
import type { Company, Membership, ModuleKey, Profile, WorkspaceModule } from "@/lib/workspace/types";

export const demoCompany: Company = {
  id: "demo-reboom",
  name: "Reboom",
  legalName: "Reboom Demo Şirketi",
  status: "active",
};

export const demoProfile: Profile = {
  id: "demo-derya-erten",
  fullName: "Derya Erten",
  email: "derya.erten@example.com",
};

export const demoMembership: Membership = {
  companyId: demoCompany.id,
  userId: demoProfile.id,
  role: "client_owner",
  status: "active",
};

export const workspaceModules: WorkspaceModule[] = [
  { key: "dashboard", name: moduleLabels.dashboard, description: "Genel finansal özet, uyarılar ve hızlı aksiyon alanı.", kind: "internal", href: "/portal" },
  { key: "reporting", name: moduleLabels.reporting, description: "Aylık yönetim raporları, KPI ve performans görünümü.", kind: "internal" },
  { key: "budget_performance", name: moduleLabels.budget_performance, description: "Bütçe, gerçekleşen, P&L ve sapma analizi takibi.", kind: "internal" },
  { key: "cashflow", name: moduleLabels.cashflow, description: "12 haftalık nakit projeksiyonu ve riskli dönem görünümü.", kind: "internal" },
  { key: "teknokent_arge", name: moduleLabels.teknokent_arge, description: "Teknokent, Ar-Ge, proje, personel ve muafiyet süreçleri.", kind: "internal" },
  { key: "documents", name: moduleLabels.documents, description: "Rapor, sözleşme, proje ve denetim dokümanları.", kind: "internal" },
  { key: "financial_operations", name: moduleLabels.financial_operations, description: "Muhasebe koordinasyonu, kapanış ve mali süreç kontrolleri.", kind: "internal" },
  {
    key: "accounting_advisory",
    name: moduleLabels.accounting_advisory,
    description: "Mali müşavirlik süreçleri için dış sisteme yönlendirmeye hazır özel alan.",
    kind: "external",
    externalUrl: process.env.NEXT_PUBLIC_MALI_MUSAVIRLIK_URL,
  },
  { key: "user_management", name: moduleLabels.user_management, description: "Kullanıcı, rol, modül erişimi ve davet süreçleri.", kind: "internal", href: "/portal/yetkiler" },
];

export const enabledDemoModules: ModuleKey[] = workspaceModules.map((module) => module.key);
export const demoRoleLabel = roleLabels[demoMembership.role];

export const demoTasks = [
  "Mayıs yönetim raporu kontrol listesi",
  "Teknokent proje gider ayrıştırması",
  "Nakit akışı tahsilat varsayımları",
];

export const demoDocuments = ["Yönetim Raporu Taslağı", "Muafiyet Raporu Çalışma Dosyası", "Bütçe Sapma Analizi"];
export const demoUpcomingReports = ["Aylık P&L kapanışı", "12 haftalık nakit projeksiyonu", "Teknokent dönemsel kontrol"];
