import { motion } from 'framer-motion';
import { fadeUp, heroStagger, tapScale, floatLoop } from '../../lib/motion';

const QUICK_FACTS = [
  { icon: 'fa-bolt', label: 'Replies within 24 hours' },
  { icon: 'fa-headset', label: 'Dedicated support team' },
  { icon: 'fa-earth-asia', label: 'Pan-India presence' },
];

export default function ContactHero() {
  return (
    <section
      className="ag-page-hero ag-contact-hero ag-contact-hero--split"
      style={{
        background: 'linear-gradient(135deg, #004b8d 0%, #00305f 100%)',
      }}
    >
      <span className="ag-contact-hero-orb ag-contact-hero-orb--a" aria-hidden="true" />
      <span className="ag-contact-hero-orb ag-contact-hero-orb--b" aria-hidden="true" />
      <span className="ag-contact-hero-orb ag-contact-hero-orb--c" aria-hidden="true" />

      <div className="container ag-contact-hero-grid">
        <motion.div
          className="ag-contact-hero-content"
          variants={heroStagger}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={fadeUp} className="ag-contact-eyebrow" style={{ color: '#bcdcff' }}>
            We&rsquo;d Love To Hear From You
          </motion.span>
          <motion.h1 variants={fadeUp}>Contact Us</motion.h1>
          <motion.p variants={fadeUp}>
            Have a question about our services, careers, or partnerships? Reach out and our
            team will get back to you shortly.
          </motion.p>

          <motion.div className="ag-contact-hero-facts" variants={fadeUp}>
            {QUICK_FACTS.map((fact) => (
              <motion.span
                className="ag-contact-hero-fact"
                key={fact.label}
                whileHover={{ y: -3, background: 'rgba(255,255,255,0.18)' }}
                transition={{ duration: 0.2 }}
              >
                <i className={`fa-solid ${fact.icon}`} aria-hidden="true" /> {fact.label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <motion.a href="#contact" className="ag-contact-hero-cta" {...tapScale} whileHover={{ gap: 16 }}>
              Send a Message <i className="fa-solid fa-arrow-down" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="ag-contact-hero-media"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="ag-contact-hero-media-glow" aria-hidden="true" />

          <motion.div
            className="ag-contact-hero-media-frame"
            {...floatLoop(0.4, 6, 10)}
            whileHover={{ scale: 1.02 }}
          >
            <img src="/assets/images/hero-office.png" alt="The Arshith Group team collaborating in the office" />
          </motion.div>

          <motion.div
            className="ag-contact-hero-float-card ag-contact-hero-float-card--a"
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="ag-contact-hero-float-inner" {...floatLoop(0.2, 5, 8)}>
              <span className="ag-contact-hero-float-icon">
                <i className="fa-solid fa-layer-group" aria-hidden="true" />
              </span>
              <span className="ag-contact-hero-float-text">
                <strong>3 Business Pillars</strong>
                <span>One Trusted Group</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="ag-contact-hero-float-card ag-contact-hero-float-card--b"
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="ag-contact-hero-float-inner" {...floatLoop(0.8, 5, 8)}>
              <span className="ag-contact-hero-float-icon">
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
              </span>
              <span className="ag-contact-hero-float-text">
                <strong>Bengaluru, India</strong>
                <span>HQ &amp; Growing</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
