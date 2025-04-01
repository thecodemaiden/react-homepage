// src/types.ts
import React from 'react'

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

export interface ModalContextType extends React.HTMLAttributes<HTMLDialogElement> {
  modalIsOpen: boolean;
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
}