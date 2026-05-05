import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ROUTES = [
  { id: 'home', label: 'Home', route: '/home' },
  { id: 'builds', label: 'Systems', route: '/systems' },
  { id: 'engineering', label: 'Identity', route: '/identity' },
  { id: 'contact', label: 'Contact', route: '/contact' },
];

export default function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`nav-system ${scrolled ? 'nav-system--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="nav-system__container">
          {/* System Identity */}
          <motion.button
            className="nav-system__identity"
            onClick={() => scrollToSection('home')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="nav-system__identity-name">ALVINE LUMITI</span>
            <span className="nav-system__identity-role">/ ENGINEER</span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="nav-system__routes">
            {NAV_ROUTES.map((route, index) => (
              <motion.button
                key={route.id}
                className={`nav-system__route ${activeSection === route.id ? 'nav-system__route--active' : ''}`}
                onClick={() => scrollToSection(route.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
              >
                <span className="nav-system__route-prefix">{route.route}</span>
                <span className="nav-system__route-label">{route.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="nav-system__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            aria-label="Toggle navigation menu"
          >
            <span className="nav-system__mobile-icon">
              {mobileMenuOpen ? '✕' : '☰'}
            </span>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="nav-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="nav-mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="nav-mobile__header">
                <div className="nav-mobile__title">
                  <span className="nav-mobile__title-prefix">&gt;</span>
                  <span>NAVIGATION</span>
                </div>
                <button
                  className="nav-mobile__close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>

              <nav className="nav-mobile__routes">
                {NAV_ROUTES.map((route, index) => (
                  <motion.button
                    key={route.id}
                    className={`nav-mobile__route ${activeSection === route.id ? 'nav-mobile__route--active' : ''}`}
                    onClick={() => scrollToSection(route.id)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <span className="nav-mobile__route-prefix">{route.route}</span>
                    <span className="nav-mobile__route-label">{route.label}</span>
                    {activeSection === route.id && (
                      <span className="nav-mobile__route-indicator">●</span>
                    )}
                  </motion.button>
                ))}
              </nav>

              <div className="nav-mobile__footer">
                <div className="nav-mobile__footer-label">SYSTEM STATUS</div>
                <div className="nav-mobile__footer-status">
                  <span className="nav-mobile__footer-dot"></span>
                  <span>OPERATIONAL</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
