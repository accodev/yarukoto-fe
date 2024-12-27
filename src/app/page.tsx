'use client';

import { useState } from 'react';
import { Notes } from '@/components/Notes';
import { Login } from '@/components/Login';

export default function Home() {
  const [userId, setUserId] = useState<string | null>(null);

  function handleLogin(userId: string) {
    setUserId(userId);
  }

  return (
    <div className='container mx-auto h-dvh p-5'>
      {userId ? <Notes userId={userId} /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

