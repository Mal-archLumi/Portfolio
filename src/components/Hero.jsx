import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import Resume from '../assets/Alvine_Makutu_Resume.pdf';
import ProfileImg from '../assets/profile.jpeg';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Hero() {
  return (
    <section className="hero">
      {/* Ambient Background Elements */}
      <motion.div className="hero__ambient" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </motion.div>

      <div className="hero__container">
        {/* Left: Identity & CTA */}
        <motion.div className="hero__content" variants={stagger} initial="hidden" animate="show">
          <motion.div className="hero__badge" variants={fadeUp}>
            <span className="hero__badge-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1 className="hero__name" variants={fadeUp}>
            Alvine Lumiti
          </motion.h1>

          <motion.h2 className="hero__title" variants={fadeUp}>
            Full-Stack Software Engineer
          </motion.h2>

          <motion.p className="hero__statement" variants={fadeUp}>
            I build production systems that solve real problems. Full-stack developer specializing in React, Next.js, MERN stack, Flutter mobile development, and scalable backend systems — from architecture to deployment.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <a href="#builds" className="hero__btn hero__btn--primary">
              <span>Explore Work</span>
              <FiArrowRight />
            </a>
            <a href={Resume} download className="hero__btn hero__btn--secondary">
              <FiDownload />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Glass Panel System */}
        <motion.div className="hero__visual" variants={fadeIn} initial="hidden" animate="show">
          {/* Main Glass Frame */}
          <motion.div 
            className="hero__glass-frame"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="hero__glass-inner">
              <img src={ProfileImg} alt="Alvine Lumiti - Full-Stack Developer specializing in React, Next.js, and Flutter" className="hero__profile-img" />
            </div>
          </motion.div>

          {/* Floating Info Cards */}
          <motion.div 
            className="hero__info-card hero__info-card--1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="hero__info-label">Focus</div>
            <div className="hero__info-value">Full-Stack Systems</div>
          </motion.div>

          <motion.div 
            className="hero__info-card hero__info-card--2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="hero__info-label">Location</div>
            <div className="hero__info-value">Nairobi, Kenya</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
