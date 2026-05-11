import { createModuleMetadata, WorkspaceModulePage } from "../workspace-module-page";

export const metadata = createModuleMetadata("teknokent-arge");
export const dynamic = "force-dynamic";

export default function TeknokentArgeModulePage() {
  return <WorkspaceModulePage slug="teknokent-arge" />;
}
