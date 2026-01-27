import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import NavigationComponent from './components/NavigationComponent.jsx';
import PageError from './components/PageError.jsx';
import HeroesDrawer from './components/HeroesDrawer.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

//Layouts
import HomePage from './layouts/HomePage.jsx';
import HeroesPage from './layouts/HeroesPage.jsx';
import AboutPage from './layouts/AboutPage.jsx';

const App = () => (
  <Router>
    <ThemeToggle>
      <NavigationComponent />
      <HeroesDrawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/heroes" element={<HeroesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </ThemeToggle>
  </Router>
);

export default App;