import { TodoComponent } from './TodoComponent';
import { todos } from '../data';

function TodosComponent() {
  return (
    <div className='container mx-auto columns-5'>
        {todos.map(todo => (
          <TodoComponent {...todo} />
        ))}
    </div>
  );
}

export { TodosComponent };