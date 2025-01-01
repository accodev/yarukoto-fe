import { Notes } from '@/components/notes/Notes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';

interface WorkspaceProps {
  workspaceId: string;
}

function Workspace({ workspaceId }: WorkspaceProps) {
  return (
    <div className='container mx-auto h-dvh p-5 relative'>
      <Link href='/' className='absolute top-5 right-5 bg-blue-100 text-blue-700 p-2 rounded hover:bg-blue-200'>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Link>
      <Notes workspaceId={workspaceId} />
    </div>
  );
}

export { Workspace };
