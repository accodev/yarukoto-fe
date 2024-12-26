import { TodoComponent } from './TodoComponent';
import { todos } from '../data';

function TodosComponent() {
  return (
    <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
        {todos.map(todo => (
          <TodoComponent {...todo} />
        ))}
    </div>
  );
}

export { TodosComponent };