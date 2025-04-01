import React, { useContext } from 'react'
import {ModalContextType} from '../types'
import { ModalContext } from '../contexts/ModalContext'

const ModalButton = () => {
    const { handleClose } = useContext(ModalContext) as ModalContextType;
    return (
        <button onClick={handleClose}>Close</button>
    );
}

export default ModalButton;