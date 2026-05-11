import { createModuleMetadata, WorkspaceModulePage } from "../workspace-module-page";

export const metadata = createModuleMetadata("raporlama");
export const dynamic = "force-dynamic";

export default function RaporlamaModulePage() {
  return <WorkspaceModulePage slug="raporlama" />;
}
