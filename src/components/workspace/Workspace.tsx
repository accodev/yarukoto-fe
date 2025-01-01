import { Notes } from '@/components/notes/Notes';

interface WorkspaceProps {
  workspaceId: string;
}

function Workspace({ workspaceId }: WorkspaceProps) {
  return (
    <Notes workspaceId={workspaceId} />
  );
}

export { Workspace };
