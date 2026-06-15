import { motion } from 'framer-motion';
import { fadeUp, heroStagger, tapScale, floatLoop, VIEWPORT_ONCE } from '../../lib/motion';
import { INTERNSHIP_DOMAINS } from '../../lib/internshipDomains';
import RotatingText from '../shared/RotatingText';

export default function DetailsHero() {
  return (
    <>
      <section className="mncfix-hero" style={{ marginTop: '100px' }}>
        <span className="mncfix-blob mncfix-blob--brand mncfix-blob--a" aria-hidden="true"></span>
        <span className="mncfix-blob mncfix-blob--gold mncfix-blob--b" aria-hidden="true"></span>
        <motion.div className="container" variants={heroStagger} initial="hidden" animate="show">
          <div className="mncfix-hero-grid">
            <div className="mncfix-hero-content">
              <motion.div variants={fadeUp}>
                <motion.a href="internship.html" className="mncfix-back-btn" {...tapScale}>
                  <i className="fa-solid fa-arrow-left"></i> Back to Overview
                </motion.a>
              </motion.div>
              <motion.div className="mncfix-badge" variants={fadeUp}>
                <span className="dot"></span> Internship Program
              </motion.div>
              <motion.h1 variants={fadeUp}>
                <span className="mncfix-hero-title-accent">Internship Program</span> — Full Details
              </motion.h1>
              <motion.p className="mncfix-companies" variants={fadeUp}>
                <span className="mncfix-companies-icon" aria-hidden="true">
                  <i className="fa-solid fa-building-columns"></i>
                </span>
                Arshith Fresh India Pvt. Ltd. &amp; Suntech Solutions
              </motion.p>
              <motion.div className="mncfix-hero-domains" variants={fadeUp}>
                <span className="mncfix-hero-domains-label">Specializations include</span>
                <RotatingText words={INTERNSHIP_DOMAINS} />
              </motion.div>
            </div>

            <motion.div className="mncfix-hero-media" variants={fadeUp}>
              <span className="mncfix-hero-media-glow" aria-hidden="true"></span>
              <motion.div
                className="mncfix-hero-media-frame"
                {...floatLoop(0.6, 6, 12)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="/assets/images/tech-abstract.png"
                  alt="Technology stack and tools covered in the internship program"
                />
              </motion.div>

              <motion.div
                className="mncfix-hero-float-card mncfix-hero-float-card--a"
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div className="mncfix-hero-float-inner" {...floatLoop(0.2, 5, 8)}>
                  <span className="mncfix-hero-float-icon">
                    <i className="fa-solid fa-calendar-days" aria-hidden="true"></i>
                  </span>
                  <span className="mncfix-hero-float-text">
                    <strong>6 Months</strong>
                    <span>Program Duration</span>
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
                    <span>+ Placement Support</span>
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="section mncfix-decorated">
        <span className="mncfix-blob mncfix-blob--brand mncfix-blob--c" aria-hidden="true"></span>
        <div className="container">
          <motion.p
            className="mncfix-intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Arshith Fresh India Pvt. Ltd. &amp; Suntech Solutions are pleased to propose an
            Internship Program designed to provide students with practical exposure and
            industry-relevant skills in Web Development, UI/UX Design, and Cloud Technologies.
            This program is designed for undergraduate students, including both Degree and
            B.Tech students, with a primary focus on 3rd Year B.Tech pursuing students. The
            program aims to bridge the gap between academic learning and real-time industry
            requirements through hands-on experience in live projects, helping students develop
            both technical expertise and professional competencies. Additionally, this
            internship is structured to enhance placement readiness, improve employability
            skills, and prepare students to confidently participate in campus recruitment drives
            and job opportunities within the organization.
          </motion.p>
        </div>
      </section>
    </>
  );
}
