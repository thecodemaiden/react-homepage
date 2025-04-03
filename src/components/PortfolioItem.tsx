// src/components/PortfolioPage.tsx
import React, { useContext } from 'react';
import { ModalContextType, Project } from '../types';
import {ModalContext } from '../contexts/ModalContext';

interface PortfolioItemProps {
    displayProject: Project;
    clickEffect: (p: Project) => void;
}

const PortfolioItem = ({displayProject, clickEffect}: PortfolioItemProps) => {
   const { handleOpen } = useContext(ModalContext) as ModalContextType;
   const setProjectAndOpen = (event: React.MouseEvent<HTMLElement>) => {
        clickEffect(displayProject);
        handleOpen(event);
   }
    return (  
                    <div
                        className="portfolio-item"
                        onClick={setProjectAndOpen}
                    >
                        <img src={displayProject.thumbnail} alt={displayProject.title} />
                        <div className="project-title">{displayProject.title}</div>
                        <div className="project-description">{displayProject.description}</div>
                    </div>
    );
};

export default PortfolioItem;

