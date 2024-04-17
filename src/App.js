import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import ContentPage from './ContentPageAll/ContentPage';
import EducationPage from './educationPage/Education';
import ExperiencePage from './experiencePage/Experience';
import SkillsPage from './skillsPage/Skills';
import ContactPage from './contactPage/Contact';
import SocialPage from './socialPage/Socials';
import ProjectsPage from './projectsPage/Projects'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/socials" element={<SocialPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;