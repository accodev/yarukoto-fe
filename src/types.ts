interface Todo {
    id: string;
    color: string;
    title?: string;
    date: Date;
    content: string;
    order: number;
}

export type { Todo };