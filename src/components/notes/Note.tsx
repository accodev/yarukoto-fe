import { Note as NoteType } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArchive } from '@fortawesome/free-solid-svg-icons';
import { ColorPicker } from '../generic/ColorPicker';

interface NoteProps {
  note: NoteType;
  onDelete: (id: string) => void;
  onChangeColor: (id: string, color: string) => void;
}

function Note({ note, onDelete, onChangeColor }: NoteProps) {
  return (
    <div key={note.id} className={`break-inside-avoid mb-4 p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-${note.color}-100 relative group`}>
      <div className="flex justify-between items-center mb-2">
        {/* Note title */}
        {note.title && (
          <h3 className="font-semibold">{note.title}</h3>
        )}
      </div>
      {/* Note content */}
      <p className='whitespace-pre-wrap pb-5'>
        {note.content}
      </p>
      {/* Note date */}
      <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <p className='text-xs text-gray-500'>{note.date.toLocaleString()}</p>
      </div>
      {/* Note actions */}
      <div className='absolute bottom-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>
        {/* Color picker */}
        <ColorPicker selectedColor={note.color} onChangeColor={(color) => onChangeColor(note.id, color)} />
        {/* Delete button */}
        <button onClick={() => onDelete(note.id)} className="text-slate-500 transition-colors duration-200 hover:text-black">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export { Note };
