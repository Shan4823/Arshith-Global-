import useContactForm from '../../hooks/useContactForm';

export default function ContactSection({ sourcePage = '' }) {
  const { status, errorMessage, handleSubmit } = useContactForm(sourcePage);

  return (
    <section className="ag-contact" id="contact">
      <div className="container">
        <div className="ag-contact-heading">
          <span className="ag-contact-eyebrow">Get In Touch</span>
          <h2 className="ag-contact-title">Contact Us</h2>
          <p className="ag-contact-sub">
            Have a question or want to work with us? Reach out and our team will
            get back to you shortly.
          </p>
        </div>

        <div className="ag-contact-form-wrap">
          <form className="ag-contact-form" id="agContactForm" noValidate onSubmit={handleSubmit}>
            {/* Honeypot - display:none (not just off-screen) so autofill reliably skips it;
                a generic name like "website" gets auto-filled by some browsers' autofill
                even with autocomplete="off", which silently makes real submissions look like spam. */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input type="text" name="hp_contact_field" tabIndex="-1" autoComplete="off" />
            </div>
            <div className="ag-form-row">
              <div className="ag-form-group">
                <label htmlFor="contactName">Full Name</label>
                <input type="text" id="contactName" name="name" placeholder="Arshith " required />
              </div>
              <div className="ag-form-group">
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  placeholder="arshith@example.com"
                  required
                />
              </div>
            </div>
            <div className="ag-form-row">
              <div className="ag-form-group">
                <label htmlFor="contactPhone">Phone Number</label>
                <input type="tel" id="contactPhone" name="phone" placeholder="+91 98765 43210" />
              </div>
              <div className="ag-form-group">
                <label htmlFor="contactSubject">Subject</label>
                <select id="contactSubject" name="subject" defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option value="careers">Careers &amp; Jobs</option>
                  <option value="internship">Internship</option>
                  <option value="business">Business Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="ag-form-group">
              <label htmlFor="contactMsg">Message</label>
              <textarea
                id="contactMsg"
                name="message"
                rows="5"
                placeholder="Write your message here…"
                required
              ></textarea>
            </div>
            <div className="ag-form-submit-row">
              <button type="submit" className="ag-form-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>Sending... <i className="fa-solid fa-spinner fa-spin"></i></>
                ) : (
                  <>Send Message <i className="fa-solid fa-paper-plane"></i></>
                )}
              </button>
              {status === 'success' && (
                <p className="ag-form-success" id="agFormSuccess" style={{ display: 'block' }}>
                  ✅ Thank you! We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p
                  className="ag-form-error"
                  id="agFormError"
                  style={{ display: 'block', fontSize: '0.88rem', color: '#dc2626' }}
                >
                  ⚠ {errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
