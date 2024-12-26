import { TodoComponent } from './TodoComponent';
import { todos } from '../data';

function TodosComponent() {
  return (
    <div className='container mx-auto'>
        {todos.map(todo => (
          <TodoComponent {...todo} />
        ))}
    </div>
  );
}

export { TodosComponent };