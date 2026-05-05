import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { sectionHead, staggerContainer, fadeUp, slideLeft, btnHover, btnTap } from './motion';

export default function EngagementLayer() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', form, 'YOUR_EMAILJS_USER_ID')
      .then(() => { setStatus('success'); setForm({ name: '', email: '', message: '' }); })
      .catch(() => setStatus('error'))
      .finally(() => { setSending(false); setTimeout(() => setStatus(null), 5000); });
  };

  return (
    <section id="engage" className="sys-section">
      <motion.div
        variants={sectionHead}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="sys-label">Engagement</p>
        <h2 className="sys-heading">Work with me</h2>
        <p className="sys-subtext">
          Available for freelance projects, collaborations, and contract work.
          Reach out with a clear brief and I'll respond within 24 hours.
        </p>
      </motion.div>

      <div className="engage__grid">
        {/* Form */}
        <motion.form
          className="engage__form"
          onSubmit={handleSubmit}
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {status === 'success' && (
            <motion.div
              className="engage__alert engage__alert--success"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent. I'll be in touch shortly.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              className="engage__alert engage__alert--error"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Failed to send. Email me directly at makutualvine@gmail.com
            </motion.div>
          )}

          {[
            { id: 'name',    label: 'Name',    type: 'input',    inputType: 'text',  placeholder: 'Your name' },
            { id: 'email',   label: 'Email',   type: 'input',    inputType: 'email', placeholder: 'your@email.com' },
            { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Describe what you\'re building or need help with...' },
          ].map(({ id, label, type, inputType, placeholder }) => (
            <motion.div key={id} className="engage__field" variants={fadeUp}>
              <label htmlFor={id}>{label}</label>
              {type === 'textarea' ? (
                <textarea id={id} name={id} rows="5" value={form[id]} onChange={handleChange} required placeholder={placeholder} />
              ) : (
                <input id={id} name={id} type={inputType} value={form[id]} onChange={handleChange} required placeholder={placeholder} />
              )}
            </motion.div>
          ))}

          <motion.div variants={fadeUp}>
            <motion.button
              type="submit"
              className="sys-btn sys-btn--primary"
              style={{ width: '100%' }}
              disabled={sending}
              whileHover={!sending ? btnHover : {}}
              whileTap={!sending ? btnTap : {}}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Info panel */}
        <motion.div
          className="engage__info"
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { icon: <FiMail />,   label: 'Email',    value: 'makutualvine@gmail.com', href: 'mailto:makutualvine@gmail.com' },
            { icon: <FiMapPin />, label: 'Location', value: 'Nairobi, Kenya',         href: null },
            { icon: <FiGithub />, label: 'GitHub',   value: 'Mal-ArchLumi',           href: 'https://github.com/Mal-ArchLumi' },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="engage__channel">
              <div className="engage__channel-icon">{icon}</div>
              <div>
                <p className="engage__channel-label">{label}</p>
                {href
                  ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="engage__channel-value">{value}</a>
                  : <span className="engage__channel-value">{value}</span>
                }
              </div>
            </div>
          ))}

          <div>
            <p className="engage__channel-label" style={{ marginBottom: '0.75rem' }}>Socials</p>
            <div className="engage__socials">
              {[
                { icon: <FiGithub />,   href: 'https://github.com/Mal-ArchLumi',                        label: 'GitHub' },
                { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/alvine-lumiti-7a1a73299/',   label: 'LinkedIn' },
                { icon: <FiMail />,     href: 'mailto:makutualvine@gmail.com',                           label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="engage__social-btn"
                  aria-label={label}
                  whileHover={{ scale: 1.1, transition: { duration: 0.18 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
