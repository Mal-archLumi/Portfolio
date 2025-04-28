
import { interpolate, motion } from 'framer-motion';
import { 
  SiReact, SiPython, SiTypescript, SiTailwindcss, SiFlutter,
  SiDart, SiHtml5, SiCss3, SiJavascript, SiC, SiPhp,
  SiKotlin, SiMysql, SiFirebase, SiSupabase,
  SiIntermarche
} from 'react-icons/si';
import './skill.css';

const skills = [
  { icon: <SiReact />, name: 'React', proficiency: 'intermediate' },
  { icon: <SiPython />, name: 'Python', proficiency: 'intermediate' },
  { icon: <SiTypescript />, name: 'TypeScript', proficiency: 'intermediate' },
  { icon: <SiTailwindcss />, name: 'Tailwind', proficiency: 75 },
  { icon: <SiFlutter />, name: 'Flutter', proficiency: 70 },
  { icon: <SiDart />, name: 'Dart', proficiency: 65 },
  { icon: <SiHtml5 />, name: 'HTML5', proficiency: 95 },
  { icon: <SiCss3 />, name: 'CSS3', proficiency: 90 },
  { icon: <SiJavascript />, name: 'JavaScript', proficiency: 85 },
  { icon: <SiC />, name: 'C Language', proficiency: 70 },
  { icon: <SiPhp />, name: 'PHP', proficiency: 60 },
  { icon: <SiKotlin />, name: 'Kotlin', proficiency: 65 },
  { icon: <SiMysql />, name: 'MySQL', proficiency: 80 },
  { icon: <SiFirebase />, name: 'Firebase', proficiency: 75 },
  { icon: <SiSupabase />, name: 'Supabase', proficiency: 70 }
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
        <h2>Tech Stack</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">Scroll through my skillset</p>
      </div>

      <div className="skills-carousel">
        <div className="carousel-track">
          {[...skills, ...skills].map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: `${skill.proficiency}%` }}></div>
                </div>
                <p className="proficiency">{skill.proficiency}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}