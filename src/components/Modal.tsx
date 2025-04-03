// src/components/Modal.js
// https://codesandbox.io/p/devbox/github/picocss/examples/tree/master/v2-react-color-schemes-and-modal

import React, { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { ModalContextType } from "../types";

export default function Modal({children, ...props}:  React.HTMLAttributes<HTMLDialogElement>) {
  const { modalIsOpen, handleClose } = useContext(ModalContext) as ModalContextType;

  const handleClickOverlay = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      handleClose(event);
    }
  };

  return (
    <dialog onClick={handleClickOverlay} open={modalIsOpen} {...props}>
      {children}
    </dialog>
  );
}
