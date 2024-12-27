'use client';

import { useState } from 'react';
import { getUserById, registerUser } from '../api/userApi';
import { v4 as uuidv4 } from 'uuid';

interface UserProps {
  onLogin: (userId: string) => void;
}

function User({ onLogin }: UserProps) {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registeredUserId, setRegisteredUserId] = useState<string | null>(null);

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

  async function handleRegister() {
    if (name.trim() && email.trim()) {
      const newUserId = uuidv4();
      try {
        await registerUser({ id: newUserId, name, email });
        setRegisteredUserId(newUserId);
      } catch (err) {
        setError('Error registering user');
      }
    } else {
      setError('Name and email are required');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">{isRegistering ? 'Register' : 'Login'}</h1>
      {registeredUserId ? (
        <div className="text-center">
          <p className="mb-2">Registration successful! Your user ID is:</p>
          <p className="font-bold">{registeredUserId}</p>
          <p className="mt-4">Please save this user ID to log in later.</p>
          <button onClick={() => { setIsRegistering(false); setRegisteredUserId(null)} } className="p-2 bg-blue-500 text-white rounded mt-4">
            Proceed to Login
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
                  Back to Login
                </button>
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter your user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="p-2 border rounded mb-2"
              />
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div className="flex space-x-2">
                <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded">
                  Login
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

export { User };
