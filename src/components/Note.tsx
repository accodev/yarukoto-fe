'use client';

import { Note as NoteType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArchive, faPalette } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const colors = ["indigo", "yellow", "blue", "purple", "green", "red"];

interface NoteProps {
  note: NoteType;
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
  onChangeColor: (id: string, color: string) => void;
}

function Note({ note, onDelete, onArchive, onChangeColor }: NoteProps) {
  const [activeColorPicker, setActiveColorPicker] = useState<string | null>(null);

  return (
    <div key={note.id} className={`break-inside-avoid mb-4 p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-${note.color}-100 relative group`}>
      <div className="flex justify-between items-center mb-2">
        {note.title && (
          <h3 className="font-semibold">{note.title}</h3>
        )}
      </div>
      <p className='whitespace-pre-wrap pb-5'>
        {note.content}
      </p>
      <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <p className='text-xs text-gray-500'>{note.date.toLocaleString()}</p>
      </div>
      <div className='absolute bottom-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>
        <div className='relative z-10'>
          <button
            className='text-slate-500 transition-colors duration-200 hover:text-black'
            onClick={() => setActiveColorPicker(note.id === activeColorPicker ? null : note.id)}
          >
            <FontAwesomeIcon icon={faPalette} />
          </button>
          {activeColorPicker === note.id && (
            <div className='absolute bottom-full mb-2 flex space-x-2 bg-white p-2 rounded shadow'>
              {colors.map(color => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${note.color === color ? `ring-2 ring-indigo-100` : ''} bg-${color}-100`}
                  onClick={() => onChangeColor(note.id, color)}
                />
              ))}
            </div>
          )}
        </div>
        <button onClick={() => onArchive(note.id)} className="text-slate-500 transition-colors duration-200 hover:text-black">
          <FontAwesomeIcon icon={faArchive} />
        </button>
        <button onClick={() => onDelete(note.id)} className="text-slate-500 transition-colors duration-200 hover:text-black">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export { Note };
