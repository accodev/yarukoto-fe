import { Todo } from '../types';


function TodoComponent(todo: Todo){
    return (
        <div key={todo.id} className={`break-inside-avoid mb-4 p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-${todo.color}-100`}>
            <p className='whitespace-pre-wrap pb-5'>
                {todo.content}
            </p>
            <p className='text-xs text-gray-500'>
                {todo.date.toLocaleString()}
            </p>
        </div>
    )
}

export { TodoComponent };