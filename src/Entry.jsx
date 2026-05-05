import { motion } from 'framer-motion';
import Resume from './assets/Alvine_Makutu_Resume.pdf';
import { sectionHead, staggerContainer, fadeUp, btnHover, btnTap } from './motion';

export default function Entry() {
  return (
    <section id="entry" className="sys-section">
      <div className="entry__grid">

        {/* Left — identity + CTA */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.p className="entry__eyebrow" variants={fadeUp}>
            Full-Stack Developer · Nairobi, Kenya
          </motion.p>
          <motion.h1 className="entry__name" variants={fadeUp}>
            Alvine<br /><span>Lumiti</span>
          </motion.h1>
          <motion.p className="entry__role" variants={fadeUp}>
            I build production-grade web and mobile systems — from community finance platforms
            to smart farming tools — with a focus on real-world utility and clean execution.
          </motion.p>
          <motion.div className="entry__actions" variants={fadeUp}>
            <motion.a
              href="#builds"
              className="sys-btn sys-btn--primary"
              whileHover={btnHover}
              whileTap={btnTap}
            >
              View Builds
            </motion.a>
            <motion.a
              href={Resume}
              download
              className="sys-btn sys-btn--ghost"
              whileHover={btnHover}
              whileTap={btnTap}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right — stat cards with stagger */}
        <motion.div
          className="entry__meta"
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
        >
          {[
            { label: 'Current Focus', body: <>Building <strong>DevKazi</strong> — a micro-internship platform for student developers</> },
            { label: 'Stack',         body: 'Flutter · React · Node.js · Supabase · NestJS · MongoDB' },
            { label: 'Status',        body: <><strong>Open to</strong> freelance projects and collaborative builds</> },
          ].map(({ label, body }) => (
            <motion.div
              key={label}
              className="entry__stat-card"
              variants={fadeUp}
              whileHover={{ borderColor: 'rgba(0,210,200,0.35)', transition: { duration: 0.2 } }}
            >
              <h4>{label}</h4>
              <p>{body}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
