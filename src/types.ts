interface User {
    id: string;
    name: string;
    email: string;
}

interface Note {
    id: string;
    order: number;
    title?: string;
    date: Date;
    content: string;
    color: string;
}

export type { User, Note };