import { Note } from '@/lib/types';
import { env } from '@/lib/env';

const API_URL = env().API_URL;

export async function getNotes(workspaceId: string): Promise<Note[]> {
  console.log(`GET request to: ${API_URL}/workspace/${workspaceId}/notes`);
  const response = await fetch(`${API_URL}/workspace/${workspaceId}/notes`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to get notes');
  }

  return response.json();
}

export async function deleteNote(note: Note): Promise<void> {
  console.log(`DELETE request to: ${API_URL}/workspace/${note.workspaceId}/notes/${note.id}`);
  const response = await fetch(`${API_URL}/workspace/${note.workspaceId}/notes/${note.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to delete note');
  }
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
}

export async function getNote(workspaceId: string, noteId: string): Promise<Note> {
  console.log(`GET request to: ${API_URL}/workspace/${workspaceId}/notes/${noteId}`);
  const response = await fetch(`${API_URL}/workspace/${workspaceId}/notes/${noteId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to get note');
  }

  return response.json();
}

export async function updateNote(workspaceId: string, noteId: string, note: Note): Promise<void> {
  console.log(`PUT request to: ${API_URL}/workspace/${workspaceId}/notes/${noteId}`);
  const response = await fetch(`${API_URL}/workspace/${workspaceId}/notes/${noteId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
    },
    body: JSON.stringify(note),
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to update note');
  }
}

