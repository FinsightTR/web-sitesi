import { createModuleMetadata, WorkspaceModulePage } from "../workspace-module-page";

export const metadata = createModuleMetadata("belgeler");
export const dynamic = "force-dynamic";

export default function BelgelerModulePage() {
  return <WorkspaceModulePage slug="belgeler" />;
}
