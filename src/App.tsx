// src/App.tsx
import React from 'react';
import AppRouter from './AppRouter';
import SiteNav from './components/SiteNav';

const App = () => {
    return (
        <div className="App">
            <SiteNav/>
            <AppRouter/>
        </div>
    );
};

export default App;
