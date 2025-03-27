// src/components/PortfolioPage.tsx
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import Modal from 'react-modal'
import rawProjects from '../static/projects.json'

interface PortfolioPageProps {}

const PortfolioPage: React.FC<PortfolioPageProps> = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = (() => {
        setProjects(rawProjects);
    });

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsOpen(false);
    };

    return (
        <>
            <h1>Portfolio</h1>
            <div className="portfolio-gallery">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="portfolio-item"
                        onClick={() => openModal(project)}
                    >
                        <img src={project.thumbnail} alt={project.title} />
                        <div className="project-title">{project.title}</div>
                        <div className="project-description">{project.description}</div>
                    </div>
                ))}
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div className="modal-content">
                    <img src={selectedProject?.thumbnail} alt={selectedProject?.title} />
                    <div className="modal-details">
                        <h2>{selectedProject?.title}</h2>
                        <p>{selectedProject?.description}</p>
                    </div>
                    <button onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </>
    );
};

export default PortfolioPage;

