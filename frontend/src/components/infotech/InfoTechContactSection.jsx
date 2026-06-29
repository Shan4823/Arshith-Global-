import useContactForm from '../../hooks/infotech/useContactForm';

export default function InfoTechContactSection() {
  const { submitting, submitted, error, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h4 className="section-badge">Get In Touch</h4>
            <h2 className="section-title">
              Let's Build Something <span style={{ color: 'var(--primary)' }}>Great Together</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Whether you're looking to modernize your IT infrastructure, launch a new digital product, or explore
              AI-driven solutions — we're ready to help you get there.
            </p>
            <ul className="contact-details">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Office</strong>
                  <br />
                  Bengaluru, Karnataka, India - 560076
                </div>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <div>
                  <strong>Phone</strong>
                  <br />
                  +91 8618471424
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <br />
                  support@arshith-infotech.com
                </div>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <div>
                  <strong>Business Hours</strong>
                  <br />
                  Mon – Fri, 10:00 AM – 6:00 PM EST
                </div>
              </li>
            </ul>
          </div>
          <div className="contact-form-wrap reveal-right">
            {!submitted && (
              <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                {/* Honeypot - display:none (not just off-screen) so autofill reliably skips it;
                    a generic name like "website" gets auto-filled by some browsers' autofill
                    even with autocomplete="off", which silently makes real submissions look like spam. */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="hp_contact_field" tabIndex="-1" autoComplete="off" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstName" placeholder="Arshith" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastName" placeholder="Infotech" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" placeholder="support@arshith-infotech.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="arshith-infotech" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option>Digital Transformation</option>
                    <option>Cloud Computing</option>
                    <option>Engineering &amp; R&amp;D</option>
                    <option>Data &amp; AI</option>
                    <option>Cybersecurity</option>
                    <option>Infrastructure Management</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Tell us about your project or challenge..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit-btn" disabled={submitting}>
                  {submitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </button>
                {error && (
                  <p className="form-note" style={{ color: '#dc2626' }}>
                    <i className="fas fa-exclamation-circle"></i> {error}
                  </p>
                )}
                <p className="form-note">
                  <i className="fas fa-shield-alt"></i> Your information is secure and will never be shared.
                </p>
              </form>
            )}
            {submitted && (
              <div className="form-success" id="formSuccess">
                <i className="fas fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will contact you within 1 business day.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
