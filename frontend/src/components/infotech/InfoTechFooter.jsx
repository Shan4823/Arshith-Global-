export default function InfoTechFooter() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Ahead in Tech</h3>
              <p>Get the latest insights on AI, Cloud, and Digital Transformation delivered to your inbox.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your business email" required />
              <button type="submit" className="btn btn-primary">
                Subscribe <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo footer-logo">
              Arshith&nbsp;<span className="logo-tech">Info-Tech</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-about">
              Pioneering the future of digital services and consulting. We empower forward-thinking enterprises
              across 40+ countries to reimagine their business for the digital age.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="YouTube" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Capabilities</h4>
            <ul>
              <li>
                <a href="#services">
                  <i className="fas fa-angle-right"></i> Cloud Migration
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fas fa-angle-right"></i> Applied AI & Data
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fas fa-angle-right"></i> Cybersecurity
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fas fa-angle-right"></i> Digital Engineering
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fas fa-angle-right"></i> Enterprise Software
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Organization</h4>
            <ul>
              <li>
                <a href="about-infotech.html">
                  <i className="fas fa-angle-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="#careers">
                  <i className="fas fa-angle-right"></i> Careers
                </a>
              </li>
              <li>
                <a href="#footer">
                  <i className="fas fa-angle-right"></i> Investor Relations
                </a>
              </li>
              <li>
                <a href="#footer">
                  <i className="fas fa-angle-right"></i> Global Newsroom
                </a>
              </li>
              <li>
                <a href="#footer">
                  <i className="fas fa-angle-right"></i> Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact Us</h4>
            <ul className="footer-contact-minimal">
              <li>
                <i className="fas fa-map-marker-alt"></i> Bengaluru, Karnataka, India - 560076
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> +91 8618471424
              </li>
              <li>
                <i className="fas fa-envelope"></i> support@arshith-infotech.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-flex">
            <p>&copy; 2026 Arshith Info-Tech. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Preferences</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
