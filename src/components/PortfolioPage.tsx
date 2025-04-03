// src/components/PortfolioPage.tsx
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import rawProjects from '../static/projects.json'
import { ModalProvider } from '../contexts/ModalContext';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';

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

    const handleItemClick = ((p: Project) => {
        setSelectedProject(p)
    })

    return (
        <>
            <h1>Portfolio</h1>

            <ModalProvider>
            <div className="portfolio-gallery">
                {projects.map((project) => (
                    <PortfolioItem displayProject={project} clickEffect={handleItemClick} />
                ))}
            </div>
            <PortfolioModal selectedProject={selectedProject} />
            </ModalProvider>
        </>
    );
};

export default PortfolioPage;

