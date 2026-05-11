import { createModuleMetadata, WorkspaceModulePage } from "../workspace-module-page";

export const metadata = createModuleMetadata("nakit-akisi");
export const dynamic = "force-dynamic";

export default function NakitAkisiModulePage() {
  return <WorkspaceModulePage slug="nakit-akisi" />;
}
