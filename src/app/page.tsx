'use client';

import { useState, useEffect } from 'react';
import { Notes } from '@/components/Notes';
import { User } from '@/components/User';

export default function Home() {
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUserId = localStorage.getItem('userId');
    if (savedUserId) {
      setUserId(savedUserId);
    }
    setIsLoading(false);
  }, []);

  function handleLogin(userId: string) {
    setUserId(userId);
    localStorage.setItem('userId', userId);
  }

  if (isLoading) {
    return <div className='container mx-auto h-dvh p-5'>Loading...</div>;
  }

  return (
    <div className='container mx-auto h-dvh p-5'>
      {userId ? (
        <Notes userId={userId} />
      ) : (
        <User onLogin={handleLogin} />
      )}
    </div>
  );
}

