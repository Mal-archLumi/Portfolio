// MainContent.jsx
import { motion } from 'framer-motion';
import { SiTypescript, SiPython, SiReact, SiNodedotjs, SiGraphql } from 'react-icons/si';

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
          Full Stack Developer
        </motion.h1>
        
        <motion.p 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Building tomorrow's digital experiences
        </motion.p>
        
        <motion.div 
          className="tech-stack"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <SiReact className="stack-icon" />
          <SiTypescript className="stack-icon" />
          <SiPython className="stack-icon" />
          <SiNodedotjs className="stack-icon" />
          <SiGraphql className="stack-icon" />
        </motion.div>
      </div>
    </motion.section>
  );
}