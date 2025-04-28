
import { motion } from 'framer-motion';
import { SiTypescript, SiPython, SiReact, SiNodedotjs, SiGraphql } from 'react-icons/si';
import { Link } from 'react-router-dom';

const techStack = [
  { icon: <SiReact />, name: 'React' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiGraphql />, name: 'GraphQL' }
];

export default function MainContent() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero"
    >
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Alvine Lumiti
        </motion.h1>
        
        <motion.p 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Crafting Innovative Digital Solutions
        </motion.p>
        
        <motion.div 
          className="tech-stack"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          {techStack.map((tech, index) => (
            <div key={index} className="stack-item">
              <div className="stack-icon">{tech.icon}</div>
              <span className="tooltip">{tech.name}</span>
            </div>
          ))}
        </motion.div>

        <Link to="/projects" className="cta-btn">Explore My Work</Link>
      </div>
    </motion.section>
  );
}