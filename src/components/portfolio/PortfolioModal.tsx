// src/components/PortfolioModal.tsx
 import React from 'react'
 import { Project } from '../../types'
import Modal from '../Modal';
import ModalButton from '../ModalButton';

 interface PortfolioModalProps {
    selectedProject: Project | null;
 }

 const PortfolioModal = ({selectedProject} : PortfolioModalProps) => {
    return (
        <Modal>
        <div className="modal-content">
                <img src={selectedProject?.thumbnail} alt={selectedProject?.title} />
                <div className="modal-details">
                    <h2>{selectedProject?.title}</h2>
                    <p>{selectedProject?.description}</p>
                </div>
            <ModalButton />
            </div>
        </Modal>
    );
 }

 export default PortfolioModal;