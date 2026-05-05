import { motion } from 'framer-motion';

const SYSTEM_APPROACH = [
  {
    id: 'A',
    label: 'Architecture First',
    desc: 'Schema design and data modeling precede implementation. System boundaries, state management, and API contracts are defined before writing UI code.',
  },
  {
    id: 'B',
    label: 'Production Mindset',
    desc: 'Every feature is built with deployment in mind. Authentication, error handling, logging, and monitoring are system requirements, not afterthoughts.',
  },
  {
    id: 'C',
    label: 'Full-Stack Ownership',
    desc: 'End-to-end responsibility from database schema to user interaction. No handoff gaps, complete context across the entire system lifecycle.',
  },
  {
    id: 'D',
    label: 'Iterative Deployment',
    desc: 'Ship working software early, gather real usage data, refine based on production behavior. Continuous delivery over delayed perfection.',
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Engineering() {
  return (
    <section id="engineering" className="section section--engineering">
      {/* Engineering Identity Header */}
      <motion.div 
        className="eng-identity"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="eng-identity__header">
          <div className="eng-identity__label">ENGINEERING IDENTITY</div>
          <h2 className="eng-identity__title">Full-Stack Systems Engineer</h2>
        </div>
        
        <div className="eng-identity__statement">
          <p className="eng-identity__text">
            I design and build production software systems from database schema to user interface. 
            My focus is scalable architecture, clean API design, and shipping systems that solve 
            real problems for real users. Every system is production-ready, security-conscious, 
            and designed for iterative improvement.
          </p>
        </div>
      </motion.div>

      {/* System Approach - Terminal-Inspired Blocks */}
      <div className="eng-approach">
        <motion.div 
          className="eng-approach__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="eng-approach__label">SYSTEM APPROACH</div>
          <p className="eng-approach__desc">
            Core engineering principles that govern system design and implementation
          </p>
        </motion.div>

        <motion.div 
          className="eng-approach__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SYSTEM_APPROACH.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="eng-block"
              variants={fadeUp}
            >
              <div className="eng-block__header">
                <div className="eng-block__id">[{item.id}]</div>
                <div className="eng-block__label">{item.label}</div>
              </div>
              <div className="eng-block__content">
                <p className="eng-block__desc">{item.desc}</p>
              </div>
              <div className="eng-block__footer">
                <div className="eng-block__indicator" />
                <div className="eng-block__status">ACTIVE</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
