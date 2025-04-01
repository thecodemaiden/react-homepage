// src/components/MainPage.tsx
import React from 'react';

import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <div id="main_greeting">
                <p> Hi there! This is my page!</p>
                <ul>
                    <li><Link to={`/blog`}>Blog</Link></li>
                    <li><Link to={`/portfolio`}>Project Portfolio</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default MainPage;

