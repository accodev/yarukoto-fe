import { Todo } from '../types';
import { todos } from '../data';

function orderTodosByDate(todos: Todo[]) {
  return todos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function TodosComponent() {
  const orderedTodos = orderTodosByDate(todos);

  return (
    <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
        {orderedTodos.map(todo => (
          <div key={todo.id} className={`break-inside-avoid mb-4 p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-${todo.color}-100`}>
              {todo.title && (
                <h3 className="font-semibold mb-2">{todo.title}</h3>
              )}
              <p className='whitespace-pre-wrap pb-5'>
                  {todo.content}
              </p>
              <p className='text-xs text-gray-500'>
                  {todo.date.toLocaleString()}
              </p>
          </div>
        ))}
    </div>
  );
}

export { TodosComponent };