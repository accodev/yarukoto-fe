import { Note } from '@/lib/types';
import { env } from '@/lib/env';

const API_URL = env().API_URL;

export async function getNotesByWorkspaceId(workspaceId: string): Promise<Note[]> {
  console.log(`GET request to: ${API_URL}/workspace/${workspaceId}/notes`);
  const response = await fetch(`${API_URL}/workspace/${workspaceId}/notes`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to fetch notes');
  }

  return response.json();
}

export async function createNote(note: Note): Promise<void> {
  console.log(`POST request to: ${API_URL}/workspace/${note.workspaceId}/notes`);
  const response = await fetch(`${API_URL}/workspace/${note.workspaceId}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to create note');
  }

  return response.json();
}

export async function getNoteById(workspaceId: string, noteId: string): Promise<Note> {
  console.log(`GET request to: ${API_URL}/workspace/${workspaceId}/notes/${noteId}`);
  const response = await fetch(`${API_URL}/workspace/${workspaceId}/notes/${noteId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to fetch note');
  }

  return response.json();
}
