// src/types.ts
export interface Post {
    id: number;
    title: string;
    date: string;
    content: string;
    summary: string;
}

export interface Project {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
}
