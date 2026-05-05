import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Index from './components/Index';
import Builds from './components/Builds';
import Stack from './components/Stack';
import Approach from './components/Approach';
import Contact from './components/Contact';
import './styles.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('builds');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    ['builds', 'stack', 'approach', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} />
      
      <main className="app__main">
        <Index activeSection={activeSection} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Builds />
          <Stack />
          <Approach />
          <Contact />
        </motion.div>
      </main>

      <footer className="footer">
        <p className="footer__text">
          © {new Date().getFullYear()} ALVINE LUMITI — BUILT WITH INTENT
        </p>
      </footer>
    </div>
  );
}
