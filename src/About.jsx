// About.jsx (updated with profile photo)
import { motion } from 'framer-motion';
import ProfilePhoto from './assets/profile.jpg'; // Create assets folder and add your photo

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
            A passionate full-stack developer and cybersecurity enthusiast based in Nairobi. 
            With 2+ years of experience crafting digital solutions that blend innovation with functionality. 
            I specialize in building secure, scalable applications that solve real-world problems.
          </p>
          
          <div className="experience-grid">
            <div className="experience-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="experience-card">
              <h3>3+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="experience-card">
              <h3>2+</h3>
              <p>Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}