import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { sectionHead, staggerContainer, fadeUp, cardHover, btnHover, btnTap, EASE } from './motion';

import DevKazi      from './assets/Devkazi.png';
import mkulimaImage from './assets/mkulimahub.jpg';
import kenyamartImage from './assets/kenyamart.jpg';
import awsHome      from './assets/aws-student-builder-club-mku/aws-student-builder-home.png';
import awsScreen2   from './assets/aws-student-builder-club-mku/aws-student-builder-screen-2.png';
import awsScreen3   from './assets/aws-student-builder-club-mku/aws-student-builder-screen-3.png';

// builds — images: array (multi-image gets carousel, single image is static)
const builds = [
  {
    title: 'AWS Student Builder Club — MKU',
    status: 'Active',
    stack: ['AWS', 'Community', 'Cloud'],
    desc: 'Founded and lead the AWS Student Builder Club at Mount Kenya University — a community of student developers building on AWS. Organises workshops, cloud challenges, and hands-on labs to grow cloud-native skills on campus.',
    images: [awsHome, awsScreen2, awsScreen3],
    live: null,
    code: null,
  },
  {
    title: 'DevKazi',
    status: 'In Development',
    stack: ['Flutter', 'NestJS', 'MongoDB'],
    desc: 'A micro-internship platform where student developers form teams, execute real industry-style projects, and earn verified experience. Includes integrated tooling for team coordination, progress tracking, and project delivery.',
    images: [DevKazi],
    live: null,
    code: 'https://github.com/Mal-ArchLumi/DevKazi',
  },
  {
    title: 'Mkulima Hub',
    status: 'Deployed',
    stack: ['Flutter', 'Supabase', 'Dart'],
    desc: 'A smart farming companion for Kenyan smallholder farmers. Provides a community marketplace, post feed, and resource hub — bridging the gap between farmers and market access.',
    images: [mkulimaImage],
    live: null,
    code: 'https://github.com/Mal-ArchLumi/mkulima-hub',
  },
  {
    title: 'KenyaMart',
    status: 'Live',
    stack: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Full-stack e-commerce platform with user authentication, product catalog management, and payment integration. Deployed and serving real users.',
    images: [kenyamartImage],
    live: 'https://kenyamart.netlify.app/',
    code: 'https://github.com/Mal-archLumi/Urban-Contemporary',
  },
];

// Slide direction variants
const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.25, ease: EASE } }),
};

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir]     = useState(1);
  const multi = images.length > 1;

  const go = useCallback((d) => {
    setDir(d);
    setIndex((i) => (i + d + images.length) % images.length);
  }, [images.length]);

  // Auto-advance for multi-image projects
  useEffect(() => {
    if (!multi) return;
    const id = setInterval(() => go(1), 3800);
    return () => clearInterval(id);
  }, [multi, go]);

  return (
    <div className="exec__carousel">
      <AnimatePresence custom={dir} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`screenshot ${index + 1}`}
          className="exec__img"
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>

      {multi && (
        <>
          <button className="exec__carousel-btn exec__carousel-btn--prev" onClick={() => go(-1)} aria-label="Previous">
            <FiChevronLeft />
          </button>
          <button className="exec__carousel-btn exec__carousel-btn--next" onClick={() => go(1)} aria-label="Next">
            <FiChevronRight />
          </button>
          <div className="exec__carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`exec__dot ${i === index ? 'active' : ''}`}
                onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ExecutionLayer() {
  return (
    <section id="builds" className="sys-section">
      <motion.div
        variants={sectionHead}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="sys-label">Execution Layer</p>
        <h2 className="sys-heading">What I've built</h2>
        <p className="sys-subtext">
          Production systems and active builds — each solving a defined problem for a real audience.
        </p>
      </motion.div>

      <motion.div
        className="exec__list"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {builds.map((b) => (
          <motion.div
            key={b.title}
            className="exec__item"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <ImageCarousel images={b.images} />

            <div className="exec__body">
              <div>
                <div className="exec__header">
                  <h3 className="exec__title">{b.title}</h3>
                  <span className="exec__status">{b.status}</span>
                </div>
                <p className="exec__desc">{b.desc}</p>
              </div>
              <div>
                <div className="exec__stack">
                  {b.stack.map((t) => <span key={t} className="sys-tag">{t}</span>)}
                </div>
                {(b.live || b.code) && (
                  <div className="exec__footer">
                    {b.live && (
                      <motion.a
                        href={b.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sys-btn sys-btn--primary"
                        whileHover={btnHover}
                        whileTap={btnTap}
                      >
                        <FiExternalLink /> Live
                      </motion.a>
                    )}
                    {b.code && (
                      <motion.a
                        href={b.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sys-btn sys-btn--ghost"
                        whileHover={btnHover}
                        whileTap={btnTap}
                      >
                        <FiGithub /> Source
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
