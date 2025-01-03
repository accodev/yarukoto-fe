'use client';

import { Note as NoteType } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { ColorPicker } from '../generic/ColorPicker';

interface NewNoteProps {
  onAddNote: (newNote: NoteType) => void;
  workspaceId: string;
}

function NewNote({ onAddNote, workspaceId }: NewNoteProps) {
  const [draftContent, setDraftContent] = useState('');
  const [draftTitle, setDraftTitle] = useState('');
  const [draftColor, setDraftColor] = useState('indigo');
  const [isDraftVisible, setIsDraftVisible] = useState(false);

  function handleAddNote() {
    if (draftContent.trim()) {
      const newNote: NoteType = {
        id: `${Date.now()}`,
        workspaceId: workspaceId,
        color: draftColor,
        content: draftContent,
        title: draftTitle || undefined,
        date: new Date()
      };
      onAddNote(newNote);
      setDraftContent('');
      setDraftTitle('');
      setDraftColor('indigo');
      setIsDraftVisible(false);
    }
  }

  return (
    <div className={`mb-4 p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-${draftColor}-100 relative`}>
      {isDraftVisible && (
        <>
          {/* Title input */}
          <input
            className='w-full p-2 mb-2 rounded'
            placeholder='Title'
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
          />
        </>
      )}
      {/* Content textarea */}
      <textarea
        className='w-full p-2 rounded resize-none'
        placeholder='Take a note...'
        value={draftContent}
        onChange={(e) => setDraftContent(e.target.value)}
        onFocus={() => setIsDraftVisible(true)}
      />
      {isDraftVisible && (
        <div className='flex justify-end mt-2'>
          {/* Color picker */}
          <ColorPicker selectedColor={draftColor} onChangeColor={setDraftColor} className="text-slate-500 transition-colors duration-200 hover:text-black px-2" />
          {/* Add note button */}
          <button onClick={handleAddNote} className="text-slate-500 transition-colors duration-200 hover:text-black px-2">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      )}
    </div>
  );
}

export { NewNote };
