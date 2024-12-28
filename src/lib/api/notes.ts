import { Note } from '@/lib/types';
import { notes as mockNotes } from '@/lib/mockData';


export async function getNotesByWorkspaceId(workspaceId: string): Promise<Note[]> {
  // Mocked API call to get notes by workspace ID
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNotes.filter(note => note.userId === workspaceId));
    }, 500);
  });
}
