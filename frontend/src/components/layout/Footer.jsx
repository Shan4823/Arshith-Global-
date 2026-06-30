import useBackToTop from '../../hooks/useBackToTop';

export default function Footer({ enableBackToTop = true }) {
  const scrollToTop = useBackToTop();

  return (
    <footer className="ag-footer" id="footer">
      <div className="container ag-footer-inner">
        <div className="ag-footer-brand">
          <a href="#">
            <img
              src="/logos/LOGO-removebg-preview.png"
              alt="Arshith Group Logo"
              className="ag-footer-logo-img"
            />
          </a>
          <p>
            Arshith Group is committed to innovation, sustainability, and
            excellence across multiple industries including E-Commerce,
            Technology, and Digital Services. We empower communities and deliver
            trusted solutions.
          </p>
          <div className="ag-footer-social">
            <a href="https://www.linkedin.com/in/farook-n-2bb2b5344/" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/arshith-fresh-india-pvt-ltd/posts/?feedView=all"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.linkedin.com/in/pallavi-n-4578033ab/" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.linkedin.com/company/suntech-it-solution/" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/npallavi_arshith?igsh=MXVxeWViejE3eHJsdg=="
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@vamikadurbar?si=mvXxo3HM8Qe4liD9" aria-label="Instagram">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://youtube.com/@arshithfresh?si=ZjvzneHlriAxv322" aria-label="Instagram">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="ag-footer-cols">
          <div className="ag-footer-col">
            <h5>About Us</h5>
            <ul>
              <li><a href="#">About Arshith Group</a></li>
              <li><a href="#">CEO Office</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Our Journey</a></li>
              <li><a href="#">Awards</a></li>
            </ul>
          </div>
          <div className="ag-footer-col">
            <h5>Businesses</h5>
            <ul>
              <li><a href="#">E-Commerce</a></li>
              <li><a href="#">Business Consulting &amp; Services </a></li>
              <li><a href="#">Digital &amp; Marketing</a></li>
              <li><a href="#">Software Development</a></li>
            </ul>
          </div>
          <div className="ag-footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div className="ag-footer-col">
            <h5>Need Help?</h5>
            <ul style={{ gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i
                  className="fa-solid fa-location-dot"
                  style={{ marginTop: '4px', color: 'transparent', WebkitTextStroke: '1.5px #555' }}
                ></i>
                <span style={{ fontSize: '0.88rem', color: '#666' }}>
                  Bengaluru, Karnataka, India - 560076
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i
                  className="fa-solid fa-phone"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px #555' }}
                ></i>
                <span style={{ fontSize: '0.88rem', color: '#666' }}>+91 8618471424</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-regular fa-envelope" style={{ color: '#555' }}></i>
                <span style={{ fontSize: '0.88rem', color: '#666' }}>info@arshithgroup.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_bg">
        <div className="footer_bg_one">
          <div className="car-logo">Let&rsquo;s start with Arshith<span>.</span></div>
        </div>
        <div className="footer_bg_two">
          <div className="cyclist-logo">Others</div>
        </div>
      </div>

      <div className="ag-footer-bottom">
        <div className="container ag-footer-bottom-inner">
          <p>&copy; 2026 Arshith Group. All rights reserved.</p>
          <div className="ag-footer-legal">
            <a href="#">Legal Disclaimer</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
          <button
            className="ag-back-top"
            id="agBackTop"
            aria-label="Back to top"
            onClick={enableBackToTop ? scrollToTop : undefined}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
