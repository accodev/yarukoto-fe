interface Workspace {
    id: string;
    name: string;
    email: string;
}

interface Note {
    id?: number;
    workspaceId: string;
    title?: string;
    date: Date;
    content: string;
    color: string;
}

export type { Workspace, Note };