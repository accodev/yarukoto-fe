import { Workspace } from '@/lib/types';
import { env } from '@/lib/env';

const API_URL = env().API_URL;

export async function getWorkspaceById(workspaceId: string): Promise<Workspace | null> {
  console.log(`GET request to: ${API_URL}/workspace/${workspaceId}`);
  const response = await fetch(`${API_URL}/workspace/${workspaceId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to fetch workspace');
  }

  return response.json();
}

export async function registerWorkspace(workspace: { id: string; name: string; email: string }): Promise<void> {
  console.log(`POST request to: ${API_URL}/workspace`);
  const response = await fetch(`${API_URL}/workspace`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workspace),
  });

  console.log(`Response status: ${response.status}`);

  if (!response.ok) {
    throw new Error('Failed to register workspace');
  }

  return response.json();
}
