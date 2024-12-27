import { Workspace, Note } from '@/types';
import { workspace as mockWorkspace, notes as mockNotes } from '@/data';

export async function getWorkspaceById(workspaceId: string): Promise<Workspace | null> {
  // Mocked API call to get workspace by ID
  return new Promise((resolve) => {
    setTimeout(() => {
      if (mockWorkspace.id === workspaceId) {
        resolve(mockWorkspace);
      } else {
        resolve(null);
      }
    }, 500);
  });
}

export async function getNotesByWorkspaceId(workspaceId: string): Promise<Note[]> {
  // Mocked API call to get notes by workspace ID
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNotes.filter(note => note.userId === workspaceId));
    }, 500);
  });
}

export async function registerWorkspace(newWorkspace: Workspace): Promise<void> {
  // Mocked API call to register a new workspace
  return new Promise((resolve) => {
    setTimeout(() => {
      mockWorkspace.id = newWorkspace.id;
      mockWorkspace.name = newWorkspace.name;
      mockWorkspace.email = newWorkspace.email;
      resolve();
    }, 500);
  });
}
