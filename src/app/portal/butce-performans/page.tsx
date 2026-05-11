import { createModuleMetadata, WorkspaceModulePage } from "../workspace-module-page";

export const metadata = createModuleMetadata("butce-performans");
export const dynamic = "force-dynamic";

export default function ButcePerformansModulePage() {
  return <WorkspaceModulePage slug="butce-performans" />;
}
