// src/App.tsx
import React from 'react';
import AppRouter from './AppRouter';
import SiteNav from './components/SiteNav';

const App = () => {
    return (
        <>
        <header>
            <SiteNav/>
        </header>
        <main>
            <AppRouter/>
        </main>
        <footer>
            <center>
                <p><small> Copyright 2025 Adeola Bannis</small></p>
            </center>
        </footer>
        </>
    );
};

export default App;
