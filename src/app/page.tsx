import { TodoComponent } from '../components/TodoComponent';
import { todos } from '../data';

export default function Home() {
  return (
    <div>
        {todos.map(todo => (
          <TodoComponent {...todo} />
        ))}
    </div>
  );
}

