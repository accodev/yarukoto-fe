import { Todo } from '../types';


function TodoComponent(todo: Todo){
    let items = todo.items.map(item =>
        <li key={item.id}>
            {item.content}
        </li>
    );

    return (
        <div key={todo.id}>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export { TodoComponent };