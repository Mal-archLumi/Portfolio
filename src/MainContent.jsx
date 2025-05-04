import { motion } from 'framer-motion';
import { SiTypescript, SiPython, SiReact, SiNodedotjs, SiGraphql, SiFlutter, SiDocker, SiGit } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';

const techStack = [
  { icon: <SiReact />, name: 'React', color: '#61DAFB' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
  { icon: <SiPython />, name: 'Python', color: '#3776AB' },
  { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
  { icon: <SiGraphql />, name: 'GraphQL', color: '#E10098' },
  { icon: <SiFlutter />, name: 'Flutter', color: '#02569B' },
  { icon: <SiDocker />, name: 'Docker', color: '#2496ED' },
  { icon: <SiGit />, name: 'Git', color: '#F05032' }
];

export default function MainContent() {
  return (
    <div className="home-container">
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="hero-title">
              <span className="gradient-text">Alvine Lumiti</span>
              <span className="typing-cursor">|</span>
            </h1>
            
            <motion.p 
              className="tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Full-Stack Developer | Cybersecurity Enthusiast | Problem Solver
            </motion.p>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I craft secure, scalable digital experiences with cutting-edge technologies.
              Currently pursuing B.Sc in Information Technology at Mount Kenya University.
            </motion.p>

            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/projects" className="cta-btn primary">View Projects</Link>
              <Link to="/contact" className="cta-btn secondary">Hire Me</Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="tech-sphere"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            {techStack.map((tech, index) => {
              const angle = (index * 360) / techStack.length;
              const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
              const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
              
              return (
                <motion.div
                  key={index}
                  className="tech-orb"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    color: tech.color,
                    backgroundColor: `${tech.color}20`
                  }}
                  whileHover={{ scale: 1.2, boxShadow: `0 0 15px ${tech.color}` }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {tech.icon}
                  <span className="tech-tooltip">{tech.name}</span>
                </motion.div>
              );
            })}
            <div className="center-orb">
              <div className="inner-glow"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-down"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaArrowDown />
          <span>Scroll Down</span>
        </motion.div>
      </motion.section>
    </div>
  );
}