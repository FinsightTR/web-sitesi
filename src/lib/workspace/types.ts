export type Role =
  | "fincity_super_admin"
  | "fincity_consultant"
  | "client_owner"
  | "client_admin"
  | "finance_editor"
  | "finance_viewer"
  | "accountant"
  | "auditor";

export type ModuleKey =
  | "dashboard"
  | "reporting"
  | "budget_performance"
  | "cashflow"
  | "teknokent_arge"
  | "documents"
  | "financial_operations"
  | "accounting_advisory"
  | "user_management";

export type Permission = "view" | "create" | "edit" | "delete" | "manage";

export type Company = { id: string; name: string; legalName?: string; status: "active" | "passive" };
export type Profile = { id: string; fullName: string; email: string; avatarUrl?: string };
export type Membership = { companyId: string; userId: string; role: Role; status: "active" | "pending" | "passive" };

export type WorkspaceModule = {
  key: ModuleKey;
  name: string;
  description: string;
  kind: "internal" | "external";
  href?: string;
  externalUrl?: string;
};

export type RolePermission = {
  role: Role;
  module: ModuleKey;
  permissions: Permission[];
};
