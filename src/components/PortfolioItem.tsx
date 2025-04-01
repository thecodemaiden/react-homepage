// src/components/PortfolioPage.tsx
import React, { useContext } from 'react';
import { ModalContextType, Project } from '../types';
import {ModalContext } from '../contexts/ModalContext';

interface PortfolioItemProps {
    displayProject: Project
}

const PortfolioItem = ({displayProject}: PortfolioItemProps) => {
   const { handleOpen } = useContext(ModalContext) as ModalContextType;
    return (  
                    <div
                        key={displayProject.id}
                        className="portfolio-item"
                        onClick={handleOpen}
                    >
                        <img src={displayProject.thumbnail} alt={displayProject.title} />
                        <div className="project-title">{displayProject.title}</div>
                        <div className="project-description">{displayProject.description}</div>
                    </div>
    );
};

export default PortfolioItem;

