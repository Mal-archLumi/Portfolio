import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import DevKazi from '../assets/Devkazi.png';
import mkulimaImage from '../assets/mkulimahub.jpg';
import kenyamartImage from '../assets/kenyamart.jpg';
import awsHome from '../assets/aws-student-builder-club-mku/aws-student-builder-home.png';
import awsScreen2 from '../assets/aws-student-builder-club-mku/aws-student-builder-screen-2.png';
import awsScreen3 from '../assets/aws-student-builder-club-mku/aws-student-builder-screen-3.png';

const BUILDS = [
  {
    id: 'BUILD_01',
    title: 'AWS Student Builder Club — MKU',
    status: 'ACTIVE',
    tags: ['AWS', 'COMMUNITY', 'CLOUD EDUCATION'],
    desc: 'Founded and lead the AWS Student Builder Club at Mount Kenya University. Established a structured community of student developers building cloud-native applications on AWS infrastructure. Organizes technical workshops, cloud challenges, and hands-on labs to accelerate cloud adoption on campus.',
    details: {
      role: 'Founder & Technical Lead',
      scope: 'Community building, technical curriculum, workshop delivery',
      impact: 'Growing campus cloud literacy and AWS certification pipeline',
    },
    images: [awsHome, awsScreen2, awsScreen3],
    live: null,
    code: null,
  },
  {
    id: 'BUILD_02',
    title: 'DevKazi',
    status: 'IN DEVELOPMENT',
    tags: ['FLUTTER', 'NESTJS', 'MONGODB', 'REAL-TIME'],
    desc: 'Micro-internship platform enabling student developers to form teams, execute industry-grade projects, and earn verified experience. Built with integrated tooling for team coordination, progress tracking, milestone management, and project delivery workflows.',
    details: {
      architecture: 'Flutter mobile client, NestJS REST API, MongoDB Atlas, WebSocket real-time sync',
      features: 'Team formation, project boards, code review integration, experience verification',
      status: 'Core platform complete, launching pilot program Q2 2024',
    },
    images: [DevKazi],
    live: null,
    code: 'https://github.com/Mal-ArchLumi/DevKazi',
  },
  {
    id: 'BUILD_03',
    title: 'Mkulima Hub',
    status: 'DEPLOYED',
    tags: ['FLUTTER', 'SUPABASE', 'DART', 'MOBILE'],
    desc: 'Smart farming companion for Kenyan smallholder farmers. Provides community marketplace, agricultural knowledge feed, and resource hub. Bridges the gap between farmers and market access through mobile-first design and offline-capable architecture.',
    details: {
      architecture: 'Flutter mobile app, Supabase backend (PostgreSQL + Auth + Storage)',
      deployment: 'Production on Google Play, serving active farmer community',
      impact: 'Connecting farmers to markets and agricultural best practices',
    },
    images: [mkulimaImage],
    live: null,
    code: 'https://github.com/Mal-ArchLumi/mkulima-hub',
  },
  {
    id: 'BUILD_04',
    title: 'KenyaMart',
    status: 'LIVE',
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'E-COMMERCE'],
    desc: 'Full-stack e-commerce platform with user authentication, product catalog management, shopping cart, and payment integration. Deployed and serving real users with complete order processing pipeline.',
    details: {
      stack: 'Vanilla JavaScript frontend, backend API integration, payment gateway',
      deployment: 'Netlify production deployment',
      features: 'User auth, product management, cart system, checkout flow',
    },
    images: [kenyamartImage],
    live: 'https://kenyamart.netlify.app/',
    code: 'https://github.com/Mal-archLumi/Urban-Contemporary',
  },
];

function BuildGallery({ images }) {
  const [index, setIndex] = useState(0);
  const multi = images.length > 1;

  useEffect(() => {
    if (!multi) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [multi, images.length]);

  return (
    <div className="build__gallery">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Screenshot ${index + 1}`}
          className="build__gallery-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>
      {multi && (
        <div className="build__gallery-controls">
          {images.map((_, i) => (
            <button
              key={i}
              className={`build__gallery-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Builds() {
  return (
    <section id="builds" className="section">
      <div className="section__header">
        <h2 className="section__title">BUILDS</h2>
        <p className="section__subtitle">
          Production systems and active builds — each solving a defined problem for a real audience.
          Technical depth, deployment status, and architectural decisions documented.
        </p>
      </div>

      <div className="builds">
        {BUILDS.map((build, i) => (
          <motion.article
            key={build.id}
            className="build"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="build__header">
              <div className="build__meta">
                <p className="build__id">{build.id}</p>
                <h3 className="build__title">{build.title}</h3>
                <div className="build__tags">
                  <span className="build__tag build__tag--status">{build.status}</span>
                  {build.tags.map((tag) => (
                    <span key={tag} className="build__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="build__actions">
                {build.live && (
                  <a
                    href={build.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="build__action build__action--primary"
                  >
                    <FiExternalLink size={14} />
                    LIVE
                  </a>
                )}
                {build.code && (
                  <a
                    href={build.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="build__action"
                  >
                    <FiGithub size={14} />
                    SOURCE
                  </a>
                )}
              </div>
            </div>

            <div className="build__body">
              <p className="build__desc">{build.desc}</p>
              <div className="build__details">
                {Object.entries(build.details).map(([key, value]) => (
                  <div key={key} className="build__detail">
                    <span className="build__detail-label">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                    <span className="build__detail-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <BuildGallery images={build.images} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
