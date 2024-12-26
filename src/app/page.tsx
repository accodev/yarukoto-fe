import { TodosComponent } from '../components/TodosComponent';
import { todos } from '../data';

export default function Home() {
  return (
    <div className='container mx-auto'>
        <TodosComponent/>
    </div>
  );
}

