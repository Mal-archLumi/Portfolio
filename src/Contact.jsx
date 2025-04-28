import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
  return (
    <motion.section 
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <h2>Get in Touch</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">Let's collaborate on your next project!</p>
      </div>

      <div className="contact-content">
        <motion.div 
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Send a Message</h3>
          <div className="form-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button className="submit-btn">Send Message</button>
          </div>
        </motion.div>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:makutualvine@gmail.com">makutualvine@gmail.com</a></p>
          <div className="social-links">
            <a href="https://github.com/Mal-ArchLumi"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/alvine-lumiti-7a1a73299/"><FiLinkedin /></a>
            <a href="mailto:makutualvine@gmail.com"><FiMail /></a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}