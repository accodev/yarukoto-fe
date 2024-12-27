interface Note {
    id: string;
    order: number;
    title?: string;
    date: Date;
    content: string;
    color: string;
}

export type { Note };