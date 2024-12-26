'use client';

import { Todo } from '../types';
import { todos } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArchive } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function orderTodosByOrder(todos: Todo[]) {
  return todos.sort((a, b) => a.order - b.order);
}

function TodosComponent() {
  const [orderedTodos, setOrderedTodos] = useState(orderTodosByOrder(todos));

  function handleDelete(id: string) {
    setOrderedTodos(orderedTodos.filter(todo => todo.id !== id));
  }

  function handleArchive(id: string) {
    // Implement archive functionality here
    console.log(`Archive todo with id: ${id}`);
  }

  return (
    <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
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