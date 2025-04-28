
import { motion } from 'framer-motion';
import ProfilePhoto from './assets/profile.jpg';
import Resume from './assets/resume.pdf';

export default function About() {
  return (
    <motion.section 
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <h2>About Me</h2>
        <div className="accent-line"></div>
      </div>
      
      <div className="about-content">
        <motion.div 
          className="profile-photo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img src={ProfilePhoto} alt="Alvine Lumiti" />
          <div className="photo-glow"></div>
        </motion.div>
        
        <div className="bio-content">
          <p className="bio-text">
            I'm Alvine Lumiti, a full-stack developer and cybersecurity enthusiast based in Nairobi, Kenya. 
            With over 2 years of experience, I build secure, scalable, and innovative web and mobile applications. 
            My passion lies in solving real-world problems through code, blending creativity with technical expertise.
          </p>
          <a href={Resume} download className="resume-btn">Download Resume</a>
          
          <div className="experience-grid">
            <div className="experience-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="experience-card">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="experience-card">
              <h3>3</h3>
              <p>Certifications</p>
            </div>
          </div>

          <div className="timeline">
            <h3>Career Timeline</h3>
            <div className="timeline-item">
              <h4>2023 - Present</h4>
              <p>Freelance Full-Stack Developer</p>
              <p>Developed web and mobile apps for clients across various industries.</p>
            </div>
            <div className="timeline-item">
              <h4>2022 - 2023</h4>
              <p>Junior Developer at Tech Startup</p>
              <p>Contributed to building e-commerce platforms and internal tools.</p>
            </div>
            <div className="timeline-item">
              <h4>2023 - Present</h4>
              <p>B.Sc. Information Technology, Mount Kenya University</p>
              <p>Graduated with a focus on software engineering and cybersecurity.</p>
            </div>
            <div className="timeline-item">
              <h4>2025 - Present</h4>
              <p>Certificate in Software Engineering, PLP Africe</p>
              <p>Graduated with a focus on software engineering and cybersecurity.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}