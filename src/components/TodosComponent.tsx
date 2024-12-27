'use client';

import { Todo } from '../types';
import { todos as initialTodos } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArchive, faPlus, faPalette } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const colors = ["indigo", "yellow", "blue", "purple", "green", "red"];

function orderTodosByOrder(todos: Todo[]) {
  return todos.sort((a, b) => a.order - b.order);
}

function TodosComponent() {
  const [orderedTodos, setOrderedTodos] = useState(orderTodosByOrder(initialTodos));
  const [draftContent, setDraftContent] = useState('');
  const [draftTitle, setDraftTitle] = useState('');
  const [draftColor, setDraftColor] = useState(colors[0]);
  const [isDraftVisible, setIsDraftVisible] = useState(false);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [activeColorPicker, setActiveColorPicker] = useState<string | null>(null);

  function handleDelete(id: string) {
    setOrderedTodos(orderedTodos.filter(todo => todo.id !== id));
  }

  function handleArchive(id: string) {
    // Implement archive functionality here
    console.log(`Archive todo with id: ${id}`);
  }

  function handleAddNote() {
    if (draftContent.trim()) {
      const newTodo: Todo = {
        id: `${orderedTodos.length + 1}`,
        color: draftColor,
        content: draftContent,
        title: draftTitle || undefined,
        date: new Date(),
        order: 1
      };
      const updatedTodos = [newTodo, ...orderedTodos.map(todo => ({ ...todo, order: todo.order + 1 }))];
      setOrderedTodos(updatedTodos);
      setDraftContent('');
      setDraftTitle('');
      setDraftColor(colors[0]);
      setIsDraftVisible(false);
      setIsColorPickerVisible(false);
    }
  }

  function handleChangeColor(id: string, color: string) {
    setOrderedTodos(orderedTodos.map(todo => todo.id === id ? { ...todo, color } : todo));
    setActiveColorPicker(null);
  }

  return (
    <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
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
      {orderedTodos.map(todo => (
        <div key={todo.id} className={`break-inside-avoid mb-4 p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-${todo.color}-100 relative group`}>
          <div className="flex justify-between items-center mb-2">
            {todo.title && (
              <h3 className="font-semibold">{todo.title}</h3>
            )}
          </div>
          <p className='whitespace-pre-wrap pb-5'>
            {todo.content}
          </p>
          <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
            <p className='text-xs text-gray-500'>{todo.date.toLocaleString()}</p>
          </div>
          <div className='absolute bottom-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity'>
            <div className='relative z-10'>
              <button
                className='text-slate-500 transition-colors duration-200 hover:text-black'
                onClick={() => setActiveColorPicker(todo.id === activeColorPicker ? null : todo.id)}
              >
                <FontAwesomeIcon icon={faPalette} />
              </button>
              {activeColorPicker === todo.id && (
                <div className='absolute bottom-full mb-2 flex space-x-2 bg-white p-2 rounded shadow'>
                  {colors.map(color => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full ${todo.color === color ? `ring-2 ring-indigo-100` : ''} bg-${color}-100`}
                      onClick={() => handleChangeColor(todo.id, color)}
                    />
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => handleArchive(todo.id)} className="text-slate-500 transition-colors duration-200 hover:text-black">
              <FontAwesomeIcon icon={faArchive} />
            </button>
            <button onClick={() => handleDelete(todo.id)} className="text-slate-500 transition-colors duration-200 hover:text-black">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export { TodosComponent };