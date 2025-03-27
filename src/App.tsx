// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import PortfolioPage from './components/PortfolioPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPost post_id={0}/>} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </Router>
    );
};

export default App;
