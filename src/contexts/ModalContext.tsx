// src/contexts/ModalContext.js
// https://codesandbox.io/p/devbox/github/picocss/examples/tree/master/v2-react-color-schemes-and-modal

import React, { createContext, useEffect, useState } from "react";
import { ModalContextType } from '../types'

const ModalContext = createContext<ModalContextType | null>(null);
//const useModal = () => useContext(ModalContext);

const getScrollBarWidth = () => {
  const isSSR = typeof window === "undefined";
  if (isSSR) return 0;
  const hasScrollbar = document.body.scrollHeight > window.screen.height;
  if (hasScrollbar) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  }
  return 0;
};

const ModalProvider = ({ children, ...props }: React.HTMLAttributes<HTMLDialogElement>) => {
  const isSSR = typeof window === "undefined";
  const htmlTag = (!isSSR && document.querySelector("html")) || null;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalAnimationDuration = 400;

  // Handle open
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (htmlTag) {
      setModalIsOpen(true);
      htmlTag.classList.add("modal-is-open", "modal-is-opening");
      setTimeout(() => {
        htmlTag.classList.remove("modal-is-opening");
      }, modalAnimationDuration);
    }
  };

  // Handle close
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (htmlTag) {
      htmlTag.classList.add("modal-is-closing");
      setTimeout(() => {
        setModalIsOpen(false);
        htmlTag.classList.remove("modal-is-open", "modal-is-closing");
      }, modalAnimationDuration);
    }
  };

  // Handle escape key
  // useEffect(() => {
  //   const handleEscape = (event: React.KeyboardEvent<HTMLElement>) => {
  //     if (!modalIsOpen) return;
  //     if (event.key === "Escape") {
  //       handleClose(event);
  //     }
  //   };
  //   window.addEventListener("keydown", handleEscape);
  //   return () => {
  //     window.removeEventListener("keydown", handleEscape);
  //   };
  // }, [modalIsOpen]);

  // Set scrollbar width on mount
  useEffect(() => {
    const scrollBarWidth = getScrollBarWidth();
    htmlTag?.style.setProperty("--pico-scrollbar-width", `${scrollBarWidth}px`);
    return () => {
      htmlTag?.style.removeProperty("--pico-scrollbar-width");
    };
  }, [htmlTag]);

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen: modalIsOpen,
        handleOpen: handleOpen,
        handleClose: handleClose
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };

