import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import MainContent from './MainContent';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './styles.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="container">
        <nav>
          <h1 className="logo">Alvine Lumiti</h1>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact Me
            </NavLink>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

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
          <p>© {new Date().getFullYear()} Alvine Lumiti. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}