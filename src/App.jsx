// App.jsx (updated)
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiUser, FiCode, FiBriefcase } from 'react-icons/fi';
import MainContent from './MainContent';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './styles.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className="container">
      <nav>
        <h1 className="logo">Alvine Lumiti</h1>
        <div className="nav-links">
          <a href="#about" onClick={() => setActiveSection('about')}>
            <FiUser /> About
          </a>
          <a href="#skills" onClick={() => setActiveSection('skills')}>
            <FiCode /> Skills
          </a>
          <a href="#projects" onClick={() => setActiveSection('projects')}>
            <FiBriefcase /> Projects
          </a>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="theme-btn"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </nav>

      <MainContent />
      <About />
      <Skills />
      <Projects />

      <footer>
        <div className="social-links">
          <a href="https://github.com/Mal-ArchLumi">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/alvine-lumiti-7a1a73299/">
            <FiLinkedin />
          </a>
          <a href="mailto:makutualvine@gmail.com">
            <FiMail />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Alvine Lumiti. All rights reserved</p>
      </footer>
    </div>
  );
}