'use client';

import { Note as NoteType } from '@/types';
import { useState, useEffect } from 'react';
import { NewNote } from './NewNote';
import { Note } from './Note';
import { getWorkspaceById, getNotesByWorkspaceId } from '../api/workspaceApi';

function orderNotesByOrder(notes: NoteType[]) {
  return notes.sort((a, b) => a.order - b.order);
}

interface NotesProps {
  workspaceId: string;
}

function Notes({ workspaceId }: NotesProps) {
  const [orderedNotes, setOrderedNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const workspace = await getWorkspaceById(workspaceId);
      if (workspace) {
        const notes = await getNotesByWorkspaceId(workspace.id);
        setOrderedNotes(orderNotesByOrder(notes));
      }
    }
    fetchData();
  }, [workspaceId]);

  function handleDelete(id: string) {
    setOrderedNotes(orderedNotes.filter(note => note.id !== id));
  }

  function handleArchive(id: string) {
    // Implement archive functionality here
    console.log(`Archive note with id: ${id}`);
  }

  function handleAddNote(newNote: NoteType) {
    const updatedNotes = [newNote, ...orderedNotes.map(note => ({ ...note, order: note.order + 1 }))];
    setOrderedNotes(updatedNotes);
  }

  function handleChangeColor(id: string, color: string) {
    setOrderedNotes(orderedNotes.map(note => note.id === id ? { ...note, color } : note));
  }

  return (
    <div>
      <div className="flex justify-center mb-4">
        <NewNote onAddNote={handleAddNote} workspaceId={workspaceId} />
      </div>
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
        {orderedNotes.map(note => (
          <Note
            key={note.id}
            note={note}
            onDelete={handleDelete}
            onArchive={handleArchive}
            onChangeColor={handleChangeColor}
          />
        ))}
      </div>
    </div>
  );
}

export { Notes };