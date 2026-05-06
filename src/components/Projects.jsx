import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp } from 'react-icons/fi';

import mkulimaImage from '../assets/mkulimahub.jpg';
import kenyamartImage from '../assets/kenyamart.jpg';

// AWS Student Builder Club screenshots
import awsHome from '../assets/aws-student-builder-club-mku/aws-student-builder-home.png';
import awsScreen2 from '../assets/aws-student-builder-club-mku/aws-student-builder-screen-2.png';
import awsScreen3 from '../assets/aws-student-builder-club-mku/aws-student-builder-screen-3.png';

// DevKazi screenshots
import devkaziSplash from '../assets/devkazi-screenshots/devkazi-splashscreen.jpeg';
import devkaziSignIn from '../assets/devkazi-screenshots/devkazi-sign-in-page.jpeg';
import devkaziTeam from '../assets/devkazi-screenshots/team-page.jpeg';
import devkaziTeamDark from '../assets/devkazi-screenshots/team-screen-darkmode.jpeg';
import devkaziProject from '../assets/devkazi-screenshots/project-interface-screenshot.jpeg';
import devkaziChat from '../assets/devkazi-screenshots/chat-page-screenshot.jpeg';
import devkaziChatDark from '../assets/devkazi-screenshots/chat-screen-darkmode.jpeg';

const SYSTEMS = [
  {
    id: 'SYS_01',
    title: 'DevKazi',
    subtitle: 'Micro-Internship Platform',
    status: 'IN DEVELOPMENT',
    priority: 'high',
    type: 'mobile', // Mobile app - portrait screenshots
    overview: 'Production-grade platform enabling student developers to form teams, execute industry-standard projects, and earn verified experience through structured micro-internships.',
    architecture: {
      client: 'Flutter mobile application with offline-first architecture',
      backend: 'NestJS REST API with WebSocket layer for real-time coordination',
      data: 'MongoDB Atlas with schema-first data modeling',
      realtime: 'WebSocket engine for team collaboration and progress sync',
    },
    stack: ['Flutter', 'Dart', 'NestJS', 'TypeScript', 'MongoDB', 'WebSocket', 'JWT'],
    engineering: [
      'Schema-first data model design for scalable team and project structures',
      'JWT authentication with refresh token rotation for security',
      'Real-time sync engine for collaborative project boards',
      'Offline-first mobile architecture with conflict resolution',
    ],
    deployment: 'Core platform complete. Pilot program launching Q2 2024 with initial cohort of 50 student developers.',
    images: [devkaziSplash, devkaziSignIn, devkaziTeam, devkaziTeamDark, devkaziProject, devkaziChat, devkaziChatDark],
    links: {
      code: 'https://github.com/Mal-ArchLumi/DevKazi',
    },
  },
  {
    id: 'SYS_02',
    title: 'AWS Student Builder Club',
    subtitle: 'Cloud Education Community',
    status: 'ACTIVE',
    priority: 'high',
    type: 'web', // Web platform - landscape screenshots
    overview: 'Technical community of student developers building cloud-native applications on AWS infrastructure. Structured curriculum, hands-on workshops, and cloud challenge programs.',
    architecture: {
      scope: 'Community building and technical education platform',
      curriculum: 'Hands-on AWS workshops, cloud challenges, certification pipeline',
      delivery: 'Regular technical sessions, lab environments, project showcases',
    },
    stack: ['AWS', 'Cloud Architecture', 'DevOps', 'Community Leadership'],
    engineering: [
      'Designed structured curriculum from fundamentals to advanced cloud patterns',
      'Built hands-on lab environments for practical cloud experience',
      'Established AWS certification preparation pipeline',
      'Created cloud challenge framework for skill validation',
    ],
    deployment: 'Active community at Mount Kenya University. Growing campus cloud literacy and AWS adoption.',
    images: [awsHome, awsScreen2, awsScreen3],
    links: {},
  },
  {
    id: 'SYS_03',
    title: 'Mkulima Hub',
    subtitle: 'Smart Farming Platform',
    status: 'DEPLOYED',
    priority: 'medium',
    type: 'mobile', // Mobile app - portrait screenshots
    overview: 'Mobile-first platform connecting Kenyan smallholder farmers to markets and agricultural knowledge. Built with offline-first architecture for unreliable network conditions.',
    architecture: {
      client: 'Flutter mobile app with local SQLite cache',
      backend: 'Supabase (PostgreSQL + Auth + Storage)',
      sync: 'Offline-first data sync with conflict resolution',
      deployment: 'Google Play production deployment',
    },
    stack: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'SQLite'],
    engineering: [
      'Offline-first architecture with local SQLite cache layer',
      'Conflict resolution system for offline edits',
      'Network optimization for low-bandwidth rural areas',
      'Progressive image loading for slow connections',
    ],
    deployment: 'Production deployment on Google Play. Serving active farmer community with marketplace and knowledge feed.',
    images: [mkulimaImage],
    links: {
      code: 'https://github.com/Mal-ArchLumi/mkulima-hub',
    },
  },
  {
    id: 'SYS_04',
    title: 'KenyaMart',
    subtitle: 'E-Commerce System',
    status: 'LIVE',
    priority: 'medium',
    type: 'web', // Web platform - landscape screenshots
    overview: 'Full-stack e-commerce platform with complete order processing pipeline. Handles authentication, catalog management, cart system, and payment integration.',
    architecture: {
      frontend: 'Vanilla JavaScript with modular component architecture',
      backend: 'REST API with payment gateway integration',
      deployment: 'Netlify production hosting with CDN',
    },
    stack: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'Payment Gateway'],
    engineering: [
      'Modular JavaScript architecture without framework dependencies',
      'Session-based authentication with secure token handling',
      'Shopping cart state management with localStorage persistence',
      'Payment gateway integration with error handling',
    ],
    deployment: 'Live production deployment on Netlify. Serving real users with complete e-commerce functionality.',
    images: [kenyamartImage],
    links: {
      live: 'https://kenyamart.netlify.app/',
      code: 'https://github.com/Mal-archLumi/Urban-Contemporary',
    },
  },
];

function SystemPanel({ system, index }) {
  const [expanded, setExpanded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Auto-scroll images every 3 seconds
  useEffect(() => {
    if (system.images.length > 1) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % system.images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [system.images.length]);

  return (
    <motion.article
      className={`system-panel system-panel--${system.priority}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* System Header */}
      <div className="system-panel__header">
        <div className="system-panel__meta">
          <div className="system-panel__id">{system.id}</div>
          <div className="system-panel__status-group">
            <span className={`system-panel__status system-panel__status--${system.status.toLowerCase().replace(' ', '-')}`}>
              {system.status}
            </span>
            {system.priority === 'high' && (
              <span className="system-panel__priority">PRIORITY</span>
            )}
          </div>
        </div>
        <div className="system-panel__title-group">
          <h3 className="system-panel__title">{system.title}</h3>
          <p className="system-panel__subtitle">{system.subtitle}</p>
        </div>
      </div>

      {/* System Body */}
      <div className="system-panel__body">
        {/* Visual Preview */}
        <div className="system-panel__visual">
          <div className={`system-panel__image-container ${system.type === 'mobile' ? 'system-panel__image-container--mobile' : ''}`}>
            <img 
              src={system.images[imageIndex]} 
              alt={`${system.title} - ${system.subtitle} built with ${system.stack.slice(0, 3).join(', ')}`}
              className="system-panel__image"
            />
            {system.images.length > 1 && (
              <div className="system-panel__image-nav">
                {system.images.map((_, i) => (
                  <button
                    key={i}
                    className={`system-panel__image-dot ${i === imageIndex ? 'active' : ''}`}
                    onClick={() => setImageIndex(i)}
                    aria-label={`View screenshot ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* System Overview */}
        <div className="system-panel__content">
          <div className="system-panel__section">
            <h4 className="system-panel__section-title">System Overview</h4>
            <p className="system-panel__overview">{system.overview}</p>
          </div>

          {/* Tech Stack */}
          <div className="system-panel__section">
            <h4 className="system-panel__section-title">Technology Stack</h4>
            <div className="system-panel__stack">
              {system.stack.map((tech) => (
                <span key={tech} className="system-panel__tech">{tech}</span>
              ))}
            </div>
          </div>

          {/* Deployment Status */}
          <div className="system-panel__section">
            <h4 className="system-panel__section-title">Deployment</h4>
            <p className="system-panel__deployment">{system.deployment}</p>
          </div>

          {/* Links */}
          {(system.links.live || system.links.code) && (
            <div className="system-panel__links">
              {system.links.live && (
                <a
                  href={system.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="system-panel__link system-panel__link--primary"
                >
                  <FiExternalLink size={14} />
                  <span>View Live</span>
                </a>
              )}
              {system.links.code && (
                <a
                  href={system.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="system-panel__link system-panel__link--secondary"
                >
                  <FiGithub size={14} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expandable Technical Details */}
      <div className="system-panel__expand">
        <button
          className="system-panel__expand-trigger"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span>Technical Architecture</span>
          {expanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="system-panel__details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="system-panel__details-inner">
                {/* Architecture Breakdown */}
                <div className="system-panel__arch">
                  <h5 className="system-panel__arch-title">Architecture Components</h5>
                  <div className="system-panel__arch-grid">
                    {Object.entries(system.architecture).map(([key, value]) => (
                      <div key={key} className="system-panel__arch-item">
                        <span className="system-panel__arch-label">{key}</span>
                        <span className="system-panel__arch-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Notes */}
                <div className="system-panel__engineering">
                  <h5 className="system-panel__engineering-title">Engineering Decisions</h5>
                  <ul className="system-panel__engineering-list">
                    {system.engineering.map((note, i) => (
                      <li key={i} className="system-panel__engineering-item">{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="builds" className="section section--systems">
      <header className="section__header">
        <div className="section__label">Engineering Portfolio</div>
        <h2 className="section__title">Production Systems</h2>
        <p className="section__subtitle">
          Full-stack development projects built with React, Next.js, Flutter, and Node.js. Each system represents
          real engineering work — from architecture and backend development to deployment and production impact.
        </p>
      </header>

      <div className="systems-dashboard">
        {SYSTEMS.map((system, index) => (
          <SystemPanel key={system.id} system={system} index={index} />
        ))}
      </div>
    </section>
  );
}
