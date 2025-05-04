import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      'YOUR_EMAILJS_SERVICE_ID', 
      'YOUR_EMAILJS_TEMPLATE_ID',
      formData,
      'YOUR_EMAILJS_USER_ID'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

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
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Send me a message</h3>
          
          {submitStatus === 'success' && (
            <div className="alert success">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="alert error">
              Failed to send message. Please try again or email me directly.
            </div>
          )}

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          
          <div className="info-item">
            <FiMail className="info-icon" />
            <div>
              <h4>Email</h4>
              <a href="mailto:makutualvine@gmail.com">makutualvine@gmail.com</a>
            </div>
          </div>
          
          <div className="info-item">
            <FiMapPin className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          
          <div className="social-links">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a 
                href="https://github.com/Mal-ArchLumi" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/alvine-lumiti-7a1a73299/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a href="mailto:makutualvine@gmail.com">
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}