import { createModuleMetadata, WorkspaceModulePage } from "../workspace-module-page";

export const metadata = createModuleMetadata("dashboard");
export const dynamic = "force-dynamic";

export default function DashboardModulePage() {
  return <WorkspaceModulePage slug="dashboard" />;
}
