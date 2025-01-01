'use client';

import { useState } from 'react';
import Link from 'next/link';

function WorkspaceJoin() {
  const [workspaceId, setWorkspaceId] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Join</h1>
      <input
        type="text"
        placeholder="Enter your workspace ID"
        value={workspaceId}
        onChange={(e) => setWorkspaceId(e.target.value)}
        className="p-2 border rounded mb-2"
      />
      <div className="flex space-x-2">
        <button className="p-2 bg-blue-500 text-white rounded">
          <Link href={`/workspace/${workspaceId}`}>Join</Link>
        </button>
        <button className="p-2 bg-gray-500 text-white rounded">
          <Link href='/workspace/register'>Register</Link>
        </button>
      </div>
    </div>
  );
}

export { WorkspaceJoin };
