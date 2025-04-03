// src/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import PortfolioPage from './components/PortfolioPage';
import MainPage from './components/MainPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPost post_id={0}/>} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
