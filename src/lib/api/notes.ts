import { Note } from '@/lib/types';
import { env } from '@/lib/env';

const API_URL = env().API_URL;

export async function getNotesByWorkspaceId(workspaceId: string): Promise<Note[]> {
  const response = await fetch(`${API_URL}/workspace/${workspaceId}/notes`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch notes');
  }

  return response.json();
}

export async function createNote(note: Note): Promise<void> {
  const response = await fetch(`${API_URL}/workspace/${note.workspaceId}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });

  if (!response.ok) {
    throw new Error('Failed to create note');
  }

  return response.json();
}

export async function getNoteById(workspaceId: string, noteId: string): Promise<Note> {
  const response = await fetch(`${API_URL}/workspace/${workspaceId}/notes/${noteId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch note');
  }

  return response.json();
}
