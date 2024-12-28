'use client';

import { useState } from 'react';
import { getWorkspaceById, registerWorkspace } from '@/lib/api/workspace';
import { v4 as uuidv4 } from 'uuid';

interface WorkspaceProps {
  onLogin: (workspaceId: string) => void;
}

function Workspace({ onLogin }: WorkspaceProps) {
  const [workspaceId, setWorkspaceId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registeredWorkspaceId, setRegisteredWorkspaceId] = useState<string | null>(null);

  async function handleLogin() {
    try {
      const workspace = await getWorkspaceById(workspaceId);
      if (workspace) {
        onLogin(workspaceId);
      } else {
        setError('Invalid workspace ID');
      }
    } catch {
      setError('Error joining workspace');
    }
  }

  async function handleRegister() {
    if (name.trim() && email.trim()) {
      const newWorkspaceId = uuidv4();
      try {
        await registerWorkspace({ id: newWorkspaceId, name, email });
        setRegisteredWorkspaceId(newWorkspaceId);
      } catch {
        setError('Error registering workspace');
      }
    } else {
      setError('Name and email are required');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">{isRegistering ? 'Register' : 'Join'}</h1>
      {registeredWorkspaceId ? (
        <div className="text-center">
          <p className="mb-2">Registration successful! Your workspace ID is:</p>
          <p className="font-bold">{registeredWorkspaceId}</p>
          <p className="mt-4">Please save this workspace ID to log in later.</p>
          <button onClick={() => { setIsRegistering(false); setRegisteredWorkspaceId(null)} } className="p-2 bg-blue-500 text-white rounded mt-4">
            Proceed to Join
          </button>
        </div>
      ) : (
        <>
          {isRegistering ? (
            <>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded mb-2"
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded mb-2"
              />
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div className="flex space-x-2">
                <button onClick={handleRegister} className="p-2 bg-blue-500 text-white rounded">
                  Register
                </button>
                <button onClick={() => setIsRegistering(false)} className="p-2 bg-gray-500 text-white rounded">
                  Back to Join
                </button>
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter your workspace ID"
                value={workspaceId}
                onChange={(e) => setWorkspaceId(e.target.value)}
                className="p-2 border rounded mb-2"
              />
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div className="flex space-x-2">
                <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded">
                  Join
                </button>
                <button onClick={() => setIsRegistering(true)} className="p-2 bg-gray-500 text-white rounded">
                  Register
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export { Workspace };
