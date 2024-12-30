import { Note as NoteType } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ColorPicker } from '../generic/ColorPicker';
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

interface NoteProps {
  note: NoteType;
  onDelete: (note: NoteType) => void;
  onChangeColor: (note: NoteType, color: string) => void;
}

function Note({ note, onDelete, onChangeColor }: NoteProps) {
  const formattedDate = format(new Date(note.date), 'yyyy-MM-dd HH:mm:ss');
  const relativeDate = formatDistanceToNow(new Date(note.date), { addSuffix: true });

  return (
    <div key={note.id} className={`break-inside-avoid mb-4 p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-${note.color}-100 relative group`}>
      {/* Note title */}
      {note.title && (
        <h3 className="font-semibold pb-2">{note.title}</h3>
      )}
      {/* Note content */}
      <p className='whitespace-pre-wrap pb-5'>
        {note.content}
      </p>
      {/* Note date */}
      <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <p className='text-xs text-gray-500' title={formattedDate}>{relativeDate}</p>
      {/* Note actions */}
        <div className='absolute bottom-2 right-2 flex space-x-2'>
        {/* Color picker */}
        <ColorPicker selectedColor={note.color} onChangeColor={(color) => onChangeColor(note, color)} />
        {/* Delete button */}
        <button onClick={() => onDelete(note)} className="text-slate-500 transition-colors duration-200 hover:text-black">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        </div>
      </div>
    </div>
  );
}

export { Note };
