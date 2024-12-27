'use client';

import { Note as NoteType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPalette } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const colors = ["indigo", "yellow", "blue", "purple", "green", "red"];

interface NewNoteProps {
  onAddNote: (newNote: NoteType) => void;
}

function NewNote({ onAddNote }: NewNoteProps) {
  const [draftContent, setDraftContent] = useState('');
  const [draftTitle, setDraftTitle] = useState('');
  const [draftColor, setDraftColor] = useState(colors[0]);
  const [isDraftVisible, setIsDraftVisible] = useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  function handleAddNote() {
    if (draftContent.trim()) {
      const newNote: NoteType = {
        id: `${Date.now()}`,
        color: draftColor,
        content: draftContent,
        title: draftTitle || undefined,
        date: new Date(),
        order: 1
      };
      onAddNote(newNote);
      setDraftContent('');
      setDraftTitle('');
      setDraftColor(colors[0]);
      setIsDraftVisible(false);
      setIsColorPickerVisible(false);
    }
  }

  return (
    <div className={`mb-4 p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-${draftColor}-100 relative`}>
      {isDraftVisible && (
        <>
          <input
            className='w-full p-2 mb-2 rounded'
            placeholder='Title'
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
          />
        </>
      )}
      <textarea
        className='w-full p-2 rounded resize-none'
        placeholder='Take a note...'
        value={draftContent}
        onChange={(e) => setDraftContent(e.target.value)}
        onFocus={() => setIsDraftVisible(true)}
      />
      {isDraftVisible && (
        <div className='flex justify-end mt-2'>
          <div className='relative z-10'>
            <button
              className='text-slate-500 transition-colors duration-200 hover:text-black'
              onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
            >
              <FontAwesomeIcon icon={faPalette} />
            </button>
            {isColorPickerVisible && (
              <div className='absolute bottom-full mb-2 flex space-x-2 bg-white p-2 rounded shadow'>
                {colors.map(color => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full ${draftColor === color ? `ring-2 ring-indigo-100` : ''} bg-${color}-100`}
                    onClick={() => setDraftColor(color)}
                  />
                ))}
              </div>
            )}
          </div>
          <button onClick={handleAddNote} className="text-slate-500 transition-colors duration-200 hover:text-black px-2">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      )}
    </div>
  );
}

export { NewNote };
