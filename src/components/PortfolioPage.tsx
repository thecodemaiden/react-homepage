// src/components/PortfolioPage.tsx
import React, { useState, useEffect, useContext } from 'react';
import { ModalContextType, Project } from '../types';
import rawProjects from '../static/projects.json'
import Modal from './Modal';
import { ModalProvider, ModalContext } from '../contexts/ModalContext';
import PortfolioItem from './PortfolioItem';
import ModalButton from './ModalButton';

interface PortfolioPageProps {}

const PortfolioPage: React.FC<PortfolioPageProps> = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = (() => {
        setProjects(rawProjects);
    });

    return (
        <>
            <h1>Portfolio</h1>
            

            <ModalProvider>
            <div className="portfolio-gallery">
                {projects.map((project) => (
                    <PortfolioItem displayProject={project} />
                ))}
            </div>
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
            </ModalProvider>
        </>
    );
};

export default PortfolioPage;

