// Skills.jsx
import { motion } from 'framer-motion';
import { 
  SiReact, SiPython, SiTypescript, SiTailwindcss, SiFlutter,
  SiDart, SiHtml5, SiCss3, SiJavascript, SiC, SiPhp,
  SiKotlin, SiMysql, SiFirebase, SiSupabase
} from 'react-icons/si';
import './skill.css';

const skills = [
  { icon: <SiReact />, name: 'React' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <SiFlutter />, name: 'Flutter' },
  { icon: <SiDart />, name: 'Dart' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiC />, name: 'C Language' },
  { icon: <SiPhp />, name: 'PHP' },
  { icon: <SiKotlin />, name: 'Kotlin' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiSupabase />, name: 'Supabase' }
];

export default function Skills() {
  return (
    <motion.section 
      id="skills"
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <h2>Cyber Stack</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">Hover to activate neural interface</p>
      </div>

      <div className="cyber-grid">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="cyber-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <div className="progress-bar"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
