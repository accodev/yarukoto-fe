'use client';

import { useState } from 'react';
import { getUserById } from '../api/userApi';

interface LoginProps {
  onLogin: (userId: string) => void;
}

function Login({ onLogin }: LoginProps) {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  async function handleLogin() {
    try {
      const user = await getUserById(userId);
      if (user) {
        onLogin(userId);
      } else {
        setError('Invalid user ID');
      }
    } catch (err) {
      setError('Error logging in');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        type="text"
        placeholder="Enter your user ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="p-2 border rounded mb-2"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </div>
  );
}

export { Login };
