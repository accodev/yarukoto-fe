'use client';

import { useState, useEffect } from 'react';
import { Notes } from '@/components/Notes';
import { Workspace } from '@/components/Workspace';

export default function Home() {
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedWorkspaceId = localStorage.getItem('workspaceId');
    if (savedWorkspaceId) {
      setWorkspaceId(savedWorkspaceId);
    }
    setIsLoading(false);
  }, []);

  function handleLogin(workspaceId: string) {
    setWorkspaceId(workspaceId);
    localStorage.setItem('workspaceId', workspaceId);
  }

  if (isLoading) {
    return <div className='container mx-auto h-dvh p-5'>Loading...</div>;
  }

  return (
    <div className='container mx-auto h-dvh p-5'>
      {workspaceId ? (
        <Notes workspaceId={workspaceId} />
      ) : (
        <Workspace onLogin={handleLogin} />
      )}
    </div>
  );
}

