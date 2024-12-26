import { TodoComponent } from './TodoComponent';
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
          <TodoComponent {...todo} />
        ))}
    </div>
  );
}

export { TodosComponent };