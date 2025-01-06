'use client';

import { useState, useEffect, forwardRef } from 'react';
import debounce from 'lodash/debounce';
import { Note as NoteType } from '@/lib/types';
import { getNotes, deleteNote, createNote, updateNote } from '@/lib/api/notes';
import { NewNote } from './NewNote';
import { Note } from './Note';
import { ReactSortable } from 'react-sortablejs';

// This is just like a normal component, but now has a ref.
const CustomComponent = forwardRef<HTMLDivElement, any>((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});

interface NotesProps {
  workspaceId: string;
}

interface NoteUi {
  id: number; // this is the order of the note
  idOnDb: number;
  workspaceId: string;
  title?: string;
  date: Date;
  content: string;
  color: string;
}

function convertToUi(note: NoteType): NoteUi {
  return {
    id: note.order,
    idOnDb: note.id ?? 0,
    workspaceId: note.workspaceId,
    title: note.title,
    date: new Date(note.date),
    content: note.content,
    color: note.color,
  };
}

function convertToDto(note: NoteUi): NoteType {
  return {
    id: note.idOnDb,
    order: note.id,
    workspaceId: note.workspaceId,
    title: note.title,
    date: note.date,
    content: note.content,
    color: note.color,
  };
}

function Notes({ workspaceId }: NotesProps) {
  const [notes, setNotes] = useState<NoteUi[]>([]);

  useEffect(() => {
    async function fetchData() {
      const notes = await getNotes(workspaceId);
      setNotes(notes.map(convertToUi));
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
    setNotes(notes.map(convertToUi));
  }

  async function handleAdd(newNote: NoteType) {
    try {
      await createNote(newNote);
    } catch (error) {
      console.error('Failed to create note:', error);
    }
    const notes = await getNotes(workspaceId);
    setNotes(notes.map(convertToUi));
  }

  async function handleUpdate(note: NoteType) {
    try {
      await updateNote(note);
    } catch (error) {
      console.error('Failed to update note:', error);
    }
    const notes = await getNotes(workspaceId);
    setNotes(notes.map(convertToUi));
  }

  async function handleUpdateNotes(notes: NoteUi[]) {
    try {
      if(notes.length === 0) return;
      notes
        .map(convertToDto)
        .forEach(async (note, idx) => {
          note.order = idx + 1;
          await updateNote(note);
        });
    } catch (error) {
      console.error('Failed to update notes:', error);
    }
  }

  function handleSorted(notes: NoteUi[]): void {
    console.log('Sorted:', notes);
    setNotes(notes);
    debounceHandleUpdateNotes(notes);
  }

  var debounceHandleUpdateNotes = debounce(handleUpdateNotes, 1000);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <NewNote onAddNote={handleAdd} workspaceId={workspaceId} />
      </div>
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
        <ReactSortable 
          group="notes"
          animation={200}
          swapThreshold={0.65}
          delayOnTouchStart={true}
          delay={2}
          tag={CustomComponent} 
          list={notes}
          setList={handleSorted}
          >
          {notes.map((note) => (
            <Note
              key={note.id}
              note={convertToDto(note)}
              onDelete={() => handleDelete(convertToDto(note))}
              onUpdate={handleUpdate}
            />
          ))}
        </ReactSortable>
      </div>
    </div>
  );
}

export { Notes };

