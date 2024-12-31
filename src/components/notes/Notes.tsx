'use client';

import { useState, useEffect } from 'react';
import { Note as NoteType } from '@/lib/types';
import { getNotes, deleteNote, createNote, updateNote } from '@/lib/api/notes';
import { NewNote } from './NewNote';
import { Note } from './Note';

function orderNotesByDateDesc(notes: NoteType[]) {
  return notes.sort((a, b) => {
    return new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 : -1;  
  });
}

interface NotesProps {
  workspaceId: string;
}

function Notes({ workspaceId }: NotesProps) {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const notes = await getNotes(workspaceId);
      setNotes(orderNotesByDateDesc(notes));
    }
    fetchData();
  }, [workspaceId]);

  async function handleDelete(noteToDelete: NoteType) {
    try {
      await deleteNote(noteToDelete);
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
    const notes = await getNotes(workspaceId);
    setNotes(orderNotesByDateDesc(notes));
  }

  async function handleAdd(newNote: NoteType) {
    try {
      await createNote(newNote);
    } catch (error) {
      console.error('Failed to create note:', error);
    }
    const notes = await getNotes(workspaceId);
    setNotes(orderNotesByDateDesc(notes));
  }

  async function handleUpdate(note: NoteType) {
    try {
      await updateNote(note);
    } catch (error) {
      console.error('Failed to update note:', error);
    }
    const notes = await getNotes(workspaceId);
    setNotes(orderNotesByDateDesc(notes));
  }

  return (
    <div>
      <div className="flex justify-center mb-4">
        <NewNote onAddNote={handleAdd} workspaceId={workspaceId} />
      </div>
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onDelete={() => handleDelete(note)}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export { Notes };