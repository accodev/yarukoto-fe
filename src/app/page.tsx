import { TodoComponent } from '../components/TodoComponent';
import { todos } from '../data';

export default function Home() {
  return (
    <div className='container mx-auto'>
        {todos.map(todo => (
          <TodoComponent {...todo} />
        ))}
    </div>
  );
}

