import { User, Note } from '@/types';
import { user as mockUser, notes as mockNotes } from '@/data';

export async function getUserById(userId: string): Promise<User | null> {
  // Mocked API call to get user by ID
  return new Promise((resolve) => {
    setTimeout(() => {
      if (mockUser.id === userId) {
        resolve(mockUser);
      } else {
        resolve(null);
      }
    }, 500);
  });
}

export async function getNotesByUserId(userId: string): Promise<Note[]> {
  // Mocked API call to get notes by user ID
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNotes);
    }, 500);
  });
}
