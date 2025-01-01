'use client';

import { useState } from 'react';
import { registerWorkspace } from '@/lib/api/workspace';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { CopyToClipboard } from '@/components/generic/CopyToClipboard';

function WorkspaceRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [registeredWorkspaceId, setRegisteredWorkspaceId] = useState<string | null>(null);

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
      <h1 className="text-2xl mb-4">Register</h1>
      {registeredWorkspaceId ? (
        <div className="text-center">
          <p className="mb-2">Registration successful! Your workspace ID is:</p>
          <CopyToClipboard text={registeredWorkspaceId} />
          <p className="mt-4">Please save this workspace ID to join later.</p>
          <button onClick={() => { setRegisteredWorkspaceId(null); }} className="p-2 bg-blue-500 text-white rounded mt-4">
            <Link href='/'>Proceed to Join</Link>
          </button>
        </div>
      ) : (
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
            <button className="p-2 bg-gray-500 text-white rounded">
              <Link href='/'>Back to Join</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export { WorkspaceRegister };
