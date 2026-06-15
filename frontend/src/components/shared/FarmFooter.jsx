import { motion } from 'framer-motion';
import { fadeUp, fadeUpStagger, tapScale, VIEWPORT_ONCE } from '../../lib/motion';
import useBackToTop from '../../hooks/useBackToTop';

const quickLinks = [
  { label: 'About Us', href: 'aboutceo.html' },
  { label: 'Internship Program', href: 'internship.html' },
  { label: 'Full Program Details', href: 'internship-details.html' },
  { label: 'InfoTech Services', href: 'infotech.html' },
  {
    label: 'Suntech Solutions',
    href: 'https://suntechorganization.com/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const policyLinks = ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'FAQs'];

const socialLinks = [
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/company/arshith-fresh-india-pvt-ltd/posts/?feedView=all', label: 'LinkedIn' },
  { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/npallavi_arshith?igsh=MXVxeWViejE3eHJsdg==', label: 'Instagram' },
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/farook-n-2bb2b5344/', label: 'LinkedIn' },
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/company/suntech-it-solution/', label: 'LinkedIn' },
  { icon: 'fa-brands fa-youtube', href: 'https://youtube.com/@arshithfresh?si=ZjvzneHlriAxv322', label: 'YouTube' },
];

export default function FarmFooter() {
  const scrollToTop = useBackToTop();

  return (
    <>
      <motion.div
        className="mncfix-farm-banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          className="mncfix-farm-banner-video"
          src="/assets/farmer-field-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>

      <footer className="mncfix-farm-footer">
        <div className="container">
          <motion.div
            className="mncfix-farm-grid"
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
          >
            <motion.div variants={fadeUp}>
              <div className="mncfix-farm-logo">
                ARSH<span className="mncfix-farm-logo-accent">i</span>TH
              </div>
              <p className="mncfix-farm-tagline">The Best is Inside</p>
              <p className="mncfix-farm-office">
                <strong>Corporate Office</strong> — Bengaluru, Karnataka, India - 560076
              </p>
              <div className="mncfix-farm-newsletter">
                <h6>Subscribe to our Newsletter</h6>
                <form className="mncfix-farm-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" aria-label="Email" required />
                  <motion.button type="submit" aria-label="Subscribe" {...tapScale}>
                    <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div className="mncfix-farm-col" variants={fadeUp}>
              <h5>Quick Links +</h5>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target={link.target} rel={link.rel}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="mncfix-farm-col" variants={fadeUp}>
              <h5>Policies +</h5>
              <ul>
                {policyLinks.map((label) => (
                  <li key={label}>
                    <a href="#">{label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="mncfix-farm-col" variants={fadeUp}>
              <h5>Need Help?</h5>
              <ul className="mncfix-farm-help">
                <li>
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  Bengaluru, Karnataka, India - 560076
                </li>
                <li>
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  <a href="tel:+918618471424">+91 86184 71424</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:support@arshithfresh.com">support@arshithfresh.com</a>
                </li>
              </ul>
              <div className="mncfix-farm-social">
                {socialLinks.map((social, index) => (
                  <a key={`${social.icon}-${index}`} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <i className={social.icon} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="mncfix-farm-bottom">
            <p>&copy; 2026 Arshith Fresh India Pvt. Ltd. All rights reserved.</p>
            <motion.button
              className="mncfix-farm-top-btn"
              aria-label="Back to top"
              onClick={scrollToTop}
              {...tapScale}
            >
              <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
            </motion.button>
          </div>
        </div>
      </footer>
    </>
  );
}
