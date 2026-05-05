import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Engineering from './components/Engineering';
import Contact from './components/Contact';
import './styles.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      // Check if at top (home section)
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      // Check other sections
      const sections = ['builds', 'engineering', 'contact'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} />

      <main className="app__main">
        <Hero />
        <Projects />
        <Engineering />
        <Contact />
      </main>

      <footer className="footer">
        <p className="footer__text">
          © {new Date().getFullYear()} ALVINE LUMITI — SOFTWARE ENGINEER
        </p>
      </footer>
    </div>
  );
}
