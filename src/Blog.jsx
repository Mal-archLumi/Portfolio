
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.section 
      id="blog"
      className="blog-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">
        <h2>Blog</h2>
        <div className="accent-line"></div>
        <p className="section-subtitle">Coming Soon: Insights on tech, coding, and cybersecurity</p>
      </div>

      <div className="blog-content">
        <p>Stay tuned for articles on software engineering, cybersecurity tips, and project walkthroughs!</p>
      </div>
    </motion.section>
  );
}