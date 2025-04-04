// src/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './components/blog/BlogPage';
import BlogPost from './components/blog/BlogPost';
import PortfolioPage from './components/portfolio/PortfolioPage';
import MainPage from './components/MainPage';
import AboutMe from './components/about/AboutMe';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPost/>} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about" element={<AboutMe />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
