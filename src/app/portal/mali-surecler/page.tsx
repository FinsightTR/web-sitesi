import { createModuleMetadata, WorkspaceModulePage } from "../workspace-module-page";

export const metadata = createModuleMetadata("mali-surecler");
export const dynamic = "force-dynamic";

export default function MaliSureclerModulePage() {
  return <WorkspaceModulePage slug="mali-surecler" />;
}
