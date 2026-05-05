import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheck, FiAlertCircle, FiClock } from 'react-icons/fi';

const COLLABORATION_INTENTS = [
  {
    id: 'project',
    label: 'Project Collaboration',
    desc: 'Full-stack development, system architecture, technical partnership',
  },
  {
    id: 'technical',
    label: 'Technical Discussion',
    desc: 'Architecture review, code consultation, system design feedback',
  },
  {
    id: 'opportunity',
    label: 'Opportunity / Recruitment',
    desc: 'Contract work, full-time positions, freelance engagements',
  },
  {
    id: 'general',
    label: 'General Contact',
    desc: 'Questions, networking, community engagement',
  },
];

const DIRECT_CHANNELS = [
  {
    label: 'EMAIL',
    value: 'makutualvine@gmail.com',
    href: 'mailto:makutualvine@gmail.com',
    icon: FiMail,
  },
  {
    label: 'GITHUB',
    value: 'Mal-ArchLumi',
    href: 'https://github.com/Mal-ArchLumi',
    icon: FiGithub,
  },
  {
    label: 'LINKEDIN',
    value: 'Alvine Lumiti',
    href: 'https://www.linkedin.com/in/alvine-lumiti-7a1a73299/',
    icon: FiLinkedin,
  },
  {
    label: 'LOCATION',
    value: 'Nairobi, Kenya',
    href: null,
    icon: FiMapPin,
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Contact() {
  const [selectedIntent, setSelectedIntent] = useState('project');
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    console.log('Attempting to send email with data:', formData);

    try {
      // Initialize EmailJS with public key
      emailjs.init('_eGe3_Hw7hzf2QmG_');
      
      const result = await emailjs.send(
        'service_7ij60iq',
        'template_cz0lwoo',
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: 'makutualvine@gmail.com',
        }
      );

      console.log('Email sent successfully:', result);

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll respond within 24 hours.',
      });
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      console.error('Error details:', {
        text: error.text,
        status: error.status,
        message: error.message
      });
      
      let errorMessage = 'Failed to send message. ';
      
      if (error.text) {
        if (error.text.includes('template')) {
          errorMessage += 'Email template not found. ';
        } else if (error.text.includes('service')) {
          errorMessage += 'Email service configuration error. ';
        } else if (error.text.includes('public key')) {
          errorMessage += 'Invalid public key. ';
        }
      }
      
      errorMessage += 'Please email me directly at makutualvine@gmail.com';
      
      setStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 8000);
    }
  };

  return (
    <section id="contact" className="section section--contact">
      {/* Section Header */}
      <motion.div
        className="collab-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="collab-header__label">CONTACT / COLLABORATION SYSTEM</div>
        <h2 className="collab-header__title">Initiate Collaboration</h2>
        <p className="collab-header__desc">
          Structured entry point for collaboration, technical discussion, or professional engagement.
          Select intent category and provide context for efficient communication routing.
        </p>
      </motion.div>

      {/* Main Interface */}
      <div className="collab-interface">
        {/* Left Panel: Intent Selection + Info */}
        <motion.div
          className="collab-sidebar"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* Intent Categories */}
          <div className="collab-intents">
            <div className="collab-intents__label">COLLABORATION INTENT</div>
            <div className="collab-intents__grid">
              {COLLABORATION_INTENTS.map((intent) => (
                <button
                  key={intent.id}
                  className={`collab-intent ${selectedIntent === intent.id ? 'active' : ''}`}
                  onClick={() => setSelectedIntent(intent.id)}
                  type="button"
                >
                  <div className="collab-intent__label">{intent.label}</div>
                  <div className="collab-intent__desc">{intent.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* System Info */}
          <div className="collab-info">
            <div className="collab-info__item">
              <FiClock className="collab-info__icon" />
              <div className="collab-info__content">
                <div className="collab-info__label">Response Time</div>
                <div className="collab-info__value">Within 24 hours</div>
              </div>
            </div>
            <div className="collab-info__item">
              <FiMapPin className="collab-info__icon" />
              <div className="collab-info__content">
                <div className="collab-info__label">Location</div>
                <div className="collab-info__value">Nairobi, Kenya (EAT)</div>
              </div>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="collab-channels">
            <div className="collab-channels__label">DIRECT CHANNELS</div>
            <div className="collab-channels__grid">
              {DIRECT_CHANNELS.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <div className="collab-channel">
                    <Icon className="collab-channel__icon" />
                    <div className="collab-channel__info">
                      <div className="collab-channel__label">{channel.label}</div>
                      <div className="collab-channel__value">{channel.value}</div>
                    </div>
                  </div>
                );

                return channel.href ? (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="collab-channel-link"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={channel.label} className="collab-channel-link">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Panel: Message System */}
        <motion.div
          className="collab-form-panel"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="collab-form-header">
            <div className="collab-form-title">MESSAGE SYSTEM</div>
            <div className="collab-form-subtitle">
              Intent: <span className="collab-form-intent">
                {COLLABORATION_INTENTS.find(i => i.id === selectedIntent)?.label}
              </span>
            </div>
          </div>

          <form className="collab-form" onSubmit={handleSubmit}>
            {status.message && (
              <motion.div
                className={`collab-alert collab-alert--${status.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                <span>{status.message}</span>
              </motion.div>
            )}

            <motion.div className="collab-field" variants={fadeUp}>
              <label htmlFor="from_name" className="collab-field__label">
                NAME
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="collab-field__input"
                placeholder="Your full name"
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div className="collab-field" variants={fadeUp}>
              <label htmlFor="from_email" className="collab-field__label">
                EMAIL
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="collab-field__input"
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div className="collab-field" variants={fadeUp}>
              <label htmlFor="message" className="collab-field__label">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="8"
                className="collab-field__textarea"
                placeholder="Provide context: project scope, timeline, technical requirements, or discussion topics..."
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="collab-submit"
              disabled={isSubmitting}
              variants={fadeUp}
            >
              {isSubmitting ? (
                <>
                  <span className="collab-submit__spinner" />
                  TRANSMITTING...
                </>
              ) : (
                <>
                  <FiSend />
                  SEND MESSAGE
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
