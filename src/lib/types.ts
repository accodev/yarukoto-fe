interface Workspace {
    id: string;
    name: string;
    email: string;
}

interface Note {
    id: string;
    userId: string;
    order: number;
    title?: string;
    date: Date;
    content: string;
    color: string;
}

export type { Workspace, Note };