import { motion } from 'framer-motion';
import { 
  SiReact, SiPython, SiTypescript, SiTailwindcss, SiFlutter,
  SiDart, SiHtml5, SiCss3, SiJavascript, SiC, SiPhp,
  SiKotlin, SiMysql, SiFirebase, SiSupabase, SiDocker,
  SiGit, SiNodedotjs, SiGraphql, SiLinux, SiAndroid
} from 'react-icons/si';
import { FaShieldAlt, FaDatabase, FaServer } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <SiReact />,
    color: "#61DAFB",
    skills: [
      { name: "React", level: 90, icon: <SiReact /> },
      { name: "TypeScript", level: 85, icon: <SiTypescript /> },
      { name: "JavaScript", level: 90, icon: <SiJavascript /> },
      { name: "HTML5", level: 95, icon: <SiHtml5 /> },
      { name: "CSS3", level: 90, icon: <SiCss3 /> },
      { name: "Tailwind", level: 85, icon: <SiTailwindcss /> }
    ]
  },
  {
    title: "Backend & Databases",
    icon: <FaServer />,
    color: "#339933",
    skills: [
      { name: "Node.js", level: 85, icon: <SiNodedotjs /> },
      { name: "Python", level: 80, icon: <SiPython /> },
      { name: "PHP", level: 75, icon: <SiPhp /> },
      { name: "MySQL", level: 85, icon: <SiMysql /> },
      { name: "Firebase", level: 80, icon: <SiFirebase /> },
      { name: "Supabase", level: 75, icon: <SiSupabase /> }
    ]
  },
  {
    title: "Mobile Development",
    icon: <SiAndroid />,
    color: "#3DDC84",
    skills: [
      { name: "Flutter", level: 85, icon: <SiFlutter /> },
      { name: "Dart", level: 80, icon: <SiDart /> },
      { name: "Kotlin", level: 70, icon: <SiKotlin /> },
      { name: "React Native", level: 75, icon: <SiReact /> }
    ]
  },
  {
    title: "DevOps & Security",
    icon: <FaShieldAlt />,
    color: "#FF6D00",
    skills: [
      { name: "Docker", level: 75, icon: <SiDocker /> },
      { name: "Git", level: 85, icon: <SiGit /> },
      { name: "Linux", level: 80, icon: <SiLinux /> },
      { name: "Security", level: 80, icon: <FaShieldAlt /> }
    ]
  }
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
        <h2>My Skills</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">Technologies I work with</p>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="skill-category"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{ borderTop: `4px solid ${category.color}` }}
          >
            <div className="category-header">
              <div className="category-icon" style={{ color: category.color }}>
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex}
                  className="skill-item"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="skill-icon" style={{ color: category.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-meter">
                      <div 
                        className="skill-level" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`
                        }}
                      ></div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="skills-footer">
        <h3>Always Learning</h3>
        <p>
          Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring:
        </p>
        <div className="learning-list">
          <span>Blockchain</span>
          <span>AI/ML</span>
          <span>Cloud Architecture</span>
          <span>Ethical Hacking</span>
        </div>
      </div>
    </motion.section>
  );
}