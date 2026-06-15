import { motion } from 'framer-motion';
import { fadeUp, heroStagger, tapScale, floatLoop } from '../../lib/motion';
import { INTERNSHIP_DOMAINS } from '../../lib/internshipDomains';
import RotatingText from '../shared/RotatingText';

export default function InternshipHero() {
  return (
    <section className="mncfix-hero" style={{ marginTop: '100px' }}>
      <span className="mncfix-blob mncfix-blob--brand mncfix-blob--a" aria-hidden="true"></span>
      <span className="mncfix-blob mncfix-blob--gold mncfix-blob--b" aria-hidden="true"></span>
      <motion.div className="container" variants={heroStagger} initial="hidden" animate="show">
        <div className="mncfix-hero-grid">
          <div className="mncfix-hero-content">
            <motion.div className="mncfix-badge" variants={fadeUp}>
              <span className="dot"></span> Internship Program
            </motion.div>
            <motion.h1 variants={fadeUp}>
              Front-End Developer <span className="mncfix-hero-title-accent">Internship Program</span>
            </motion.h1>
            <motion.div className="mncfix-hero-domains" variants={fadeUp}>
              <span className="mncfix-hero-domains-label">Internships now open in</span>
              <RotatingText words={INTERNSHIP_DOMAINS} />
            </motion.div>
            <motion.div className="mncfix-hero-highlights" variants={fadeUp}>
              <span className="mncfix-hero-highlight">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Industry-Ready
              </span>
              <span className="mncfix-hero-highlight">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Mentor-Guided
              </span>
              <span className="mncfix-hero-highlight">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Portfolio-Focused
              </span>
            </motion.div>
            <motion.div className="mncfix-hero-actions" variants={fadeUp}>
              <motion.a href="#program-details" className="mncfix-btn-outline" {...tapScale}>
                Learn More
              </motion.a>
              <motion.a href="internship-details.html" className="mncfix-apply-btn" {...tapScale}>
                Apply Now →
              </motion.a>
            </motion.div>
          </div>

          <motion.div className="mncfix-hero-media" variants={fadeUp}>
            <span className="mncfix-hero-media-glow" aria-hidden="true"></span>
            <motion.div
              className="mncfix-hero-media-frame"
              {...floatLoop(0.6, 6, 12)}
              whileHover={{ scale: 1.03 }}
            >
              <img src="/assets/images/hero-office.png" alt="Interns collaborating on a front-end project" />
            </motion.div>

            <motion.div
              className="mncfix-hero-float-card mncfix-hero-float-card--a"
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className="mncfix-hero-float-inner" {...floatLoop(0.2, 5, 8)}>
                <span className="mncfix-hero-float-icon">
                  <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>
                </span>
                <span className="mncfix-hero-float-text">
                  <strong>100% Hands-on</strong>
                  <span>Live Projects</span>
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="mncfix-hero-float-card mncfix-hero-float-card--b"
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className="mncfix-hero-float-inner" {...floatLoop(1, 5, 8)}>
                <span className="mncfix-hero-float-icon mncfix-hero-float-icon--gold">
                  <i className="fa-solid fa-certificate" aria-hidden="true"></i>
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
