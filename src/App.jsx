import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent.jsx';
import HomePage from './layouts/HomePage.jsx';
import HeroesPage from './layouts/HeroesPage.jsx';
import AboutPage from './layouts/AboutPage.jsx';
import PageError from './components/PageError.jsx';
import HeroesDrawer from './components/HeroesDrawer.jsx';


const App = () => (
    <div id='Wrapper' className='bg-yellow-500 min-h-screen'>
        <Router>
            <NavigationComponent />
            <HeroesDrawer />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/heroes" element={<HeroesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path='*' element={<PageError />} />
            </Routes>
        </Router>
    </div>

);

export default App;