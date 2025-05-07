import { motion } from 'framer-motion';
import ProfilePhoto from './assets/profile.jpg';
import Resume from './assets/Lumiti_Alvine_resume.pdf';
import { FaCode, FaShieldAlt, FaServer, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  return (
    <motion.section 
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <h2>About Me</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">Get to know the person behind the code</p>
      </div>
      
      <div className="about-content">
        <motion.div 
          className="profile-column"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-card">
            <div className="profile-photo">
              <img src={ProfilePhoto} alt="Alvine Lumiti" />
              <div className="photo-frame"></div>
              <div className="photo-glow"></div>
            </div>
            
            <div className="quick-facts">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Name:</strong> Alvine Lumiti</li>
                <li><strong>Location:</strong> Nairobi, Kenya</li>
                <li><strong>Education:</strong> B.Sc IT, MKU</li>
                <li><strong>Focus:</strong> Full-Stack & Security</li>
              </ul>
              
              <a href={Resume} download className="resume-btn">
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bio-column"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bio-card">
            <h3>Who I Am</h3>
            <p className="bio-text">
              I'm a passionate full-stack developer with a strong interest in cybersecurity, currently pursuing my degree in Information Technology. My journey in tech began when I wrote my first line of code in high school, and since then I've been obsessed with building digital solutions that solve real-world problems.
            </p>
            
            <div className="specializations">
              <h3>My Specializations</h3>
              <div className="spec-grid">
                <div className="spec-card">
                  <FaCode className="spec-icon" />
                  <h4>Web Development</h4>
                  <p>Building responsive, accessible web applications with modern frameworks</p>
                </div>
                <div className="spec-card">
                  <FaShieldAlt className="spec-icon" />
                  <h4>Security</h4>
                  <p>Implementing secure coding practices and vulnerability testing</p>
                </div>
                <div className="spec-card">
                  <FaServer className="spec-icon" />
                  <h4>Backend Systems</h4>
                  <p>Designing scalable APIs and database architectures</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-card">
            <h3>Education & Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h4>2023 - Present</h4>
                  <p className="timeline-title">B.Sc Information Technology</p>
                  <p>Mount Kenya University - Focus on Software Engineering & Cybersecurity</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <FaCode />
                </div>
                <div className="timeline-content">
                  <h4>2023 - Present</h4>
                  <p className="timeline-title">Freelance Developer</p>
                  <p>Building web and mobile applications for diverse clients</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <FaServer />
                </div>
                <div className="timeline-content">
                  <h4>2022 - 2023</h4>
                  <p className="timeline-title">Junior Developer</p>
                  <p>Worked on e-commerce platforms and internal tools at a tech startup</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}