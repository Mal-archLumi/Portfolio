import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'builds', label: 'BUILDS' },
  { id: 'stack', label: 'STACK' },
  { id: 'approach', label: 'APPROACH' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Header({ activeSection }) {
  return (
    <motion.header
      className="app__header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header">
        <div className="header__identity">
          <h1 className="header__name">ALVINE LUMITI</h1>
          <p className="header__role">Full-Stack Engineer · System Builder</p>
        </div>

        <div className="header__status">
          <span className="header__status-dot" />
          <span>AVAILABLE FOR WORK</span>
        </div>

        <nav className="header__nav">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`header__nav-link ${activeSection === id ? 'active' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
