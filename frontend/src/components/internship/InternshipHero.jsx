import { motion } from 'framer-motion';
import { fadeUp, heroStagger, tapScale, floatLoop } from '../../lib/motion';
import { INTERNSHIP_DOMAINS } from '../../lib/internshipDomains';
import RotatingText from '../shared/RotatingText';
import ThreeParticles from '../shared/ThreeParticles';
import ThreeGlobe from '../shared/ThreeGlobe';

const statItems = [
  { value: '100%', label: 'Hands-on' },
  { value: '3–6', label: 'Months' },
  { value: '₹1,250', label: 'Starting fee' },
];

export default function InternshipHero() {
  return (
    <section
      className="mncfix-hero"
      style={{ marginTop: '100px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Three.js particle network background */}
      <ThreeParticles count={85} />

      <span className="mncfix-blob mncfix-blob--brand mncfix-blob--a" aria-hidden="true" style={{ zIndex: 1 }} />
      <span className="mncfix-blob mncfix-blob--gold mncfix-blob--b" aria-hidden="true" style={{ zIndex: 1 }} />

      <motion.div className="container" variants={heroStagger} initial="hidden" animate="show" style={{ position: 'relative', zIndex: 2 }}>
        <div className="mncfix-hero-grid">

          {/* ── Left: content ── */}
          <div className="mncfix-hero-content">
            <motion.div className="mncfix-badge" variants={fadeUp}>
              <span className="dot" />
              <motion.span
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                Internship Program
              </motion.span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Front-End Developer{' '}
              <span className="mncfix-hero-title-accent">Internship Program</span>
            </motion.h1>

            <motion.div className="mncfix-hero-domains" variants={fadeUp}>
              <span className="mncfix-hero-domains-label">Internships now open in</span>
              <RotatingText words={INTERNSHIP_DOMAINS} />
            </motion.div>

            <motion.div className="mncfix-hero-highlights" variants={fadeUp}>
              {['Industry-Ready', 'Mentor-Guided', 'Portfolio-Focused'].map((label, i) => (
                <motion.span
                  key={label}
                  className="mncfix-hero-highlight"
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <i className="fa-solid fa-circle-check" aria-hidden="true" /> {label}
                </motion.span>
              ))}
            </motion.div>

            {/* Live stats row */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: 20, margin: '18px 0 4px', flexWrap: 'wrap' }}
            >
              {statItems.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: 'rgba(61,178,86,0.08)',
                    border: '1.5px solid rgba(61,178,86,0.25)',
                    borderRadius: 12, padding: '8px 16px',
                    textAlign: 'center', backdropFilter: 'blur(4px)',
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#3db256', lineHeight: 1.1 }}>{value}</div>
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="mncfix-hero-actions" variants={fadeUp}>
              <motion.a href="#program-details" className="mncfix-btn-outline" {...tapScale}>
                Learn More
              </motion.a>
              <motion.a
                href="internship-details.html"
                className="mncfix-apply-btn"
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                Apply Now →
              </motion.a>
            </motion.div>
          </div>

          {/* ── Right: Three.js globe ── */}
          <motion.div className="mncfix-hero-media" variants={fadeUp}>
            <span className="mncfix-hero-media-glow" aria-hidden="true" />

            {/* Globe replaces static image */}
            <motion.div
              className="mncfix-hero-media-frame"
              {...floatLoop(0.6, 6, 12)}
              whileHover={{ scale: 1.03 }}
              style={{ display: 'block' }}
            >
              <ThreeGlobe />
            </motion.div>

            {/* Float card A */}
            <motion.div
              className="mncfix-hero-float-card mncfix-hero-float-card--a"
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className="mncfix-hero-float-inner" {...floatLoop(0.2, 5, 8)}>
                <span className="mncfix-hero-float-icon">
                  <i className="fa-solid fa-laptop-code" aria-hidden="true" />
                </span>
                <span className="mncfix-hero-float-text">
                  <strong>100% Hands-on</strong>
                  <span>Live Projects</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Float card B */}
            <motion.div
              className="mncfix-hero-float-card mncfix-hero-float-card--b"
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className="mncfix-hero-float-inner" {...floatLoop(1, 5, 8)}>
                <span className="mncfix-hero-float-icon mncfix-hero-float-icon--gold">
                  <i className="fa-solid fa-certificate" aria-hidden="true" />
                </span>
                <span className="mncfix-hero-float-text">
                  <strong>Certified</strong>
                  <span>On Completion</span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
