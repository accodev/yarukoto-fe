interface TodoItem {
    id: string;
    content: string;
}

interface Todo {
    date: Date;
    id: string;
    color: string;
    items: TodoItem[];
}

export type { Todo, TodoItem };