import useStickyHeader from '../../hooks/useStickyHeader';
import useMobileNav from '../../hooks/useMobileNav';

export default function Header({
  businessLinksOpenInNewTab = true,
  infotechLinkOpenInNewTab = businessLinksOpenInNewTab,
  onlineAssessmentHref = 'https://quizzory.in/id/69f06408b86cdfe2ea25b728',
}) {
  const scrolled = useStickyHeader();
  const { navOpen, toggleNav, openDropdown, handleDropdownClick } = useMobileNav();
  const businessLinkProps = businessLinksOpenInNewTab ? { target: '_blank' } : {};
  const infotechLinkProps = infotechLinkOpenInNewTab ? { target: '_blank' } : {};

  return (
    <header
      className={`ag-header${scrolled ? ' ag-header--scrolled' : ''}`}
      id="agHeader"
    >
      <nav className="ag-nav container">
        <a href="index.html" className="ag-logo">
          <img
            src="/logos/LOGO-removebg-preview.png"
            alt="Arshith Logo"
            className="ag-logo-img"
          />
        </a>
        <ul className={`ag-nav-links${navOpen ? ' ag-nav-open' : ''}`} id="agNavLinks">
          <li className="ag-nav-item">
            <a href="aboutceo.html">About Us </a>
          </li>
          <li
            className={`ag-nav-item ag-has-drop${
              openDropdown === 'businesses' ? ' ag-drop-open' : ''
            }`}
          >
            <a href="#" onClick={handleDropdownClick('businesses')}>
              Businesses <i className="fa-solid fa-chevron-down ag-caret"></i>
            </a>
            <div className="ag-dropdown">
              <a href="infotech.html" {...infotechLinkProps}>IT Services & IT Consulting</a>
              <a href="https://arshithfresh.com/" {...businessLinkProps}>E-Commerce</a>
              <a href="https://seller.arshithfresh.com/" {...businessLinkProps}>Multi sellers</a>
              <a href="https://suntechorganization.com/" {...businessLinkProps}>
                Business Consulting &amp; Services
              </a>
              <a href="https://suntechorganization.com/" {...businessLinkProps}>Digital Marketing</a>
            </div>
          </li>
          <li
            className={`ag-nav-item ag-has-drop${
              openDropdown === 'news' ? ' ag-drop-open' : ''
            }`}
          >
            <a href="#" onClick={handleDropdownClick('news')}>
              News <i className="fa-solid fa-chevron-down ag-caret"></i>
            </a>
            <div className="ag-dropdown">
              <a href="LatestNews.html">Latest News</a>
            </div>
          </li>
          <li
            className={`ag-nav-item ag-has-drop${
              openDropdown === 'careers' ? ' ag-drop-open' : ''
            }`}
          >
            <a href="#" onClick={handleDropdownClick('careers')}>
              Careers <i className="fa-solid fa-chevron-down ag-caret"></i>
            </a>
            <div className="ag-dropdown">
              <a href="https://arshithfresh.com/pages/internship">Internship</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuJ0Gypsx9tuPK9jHDwNQchAXFtykeKWD7NPBb_VxilLdYwA/viewform?usp=publish-editor">
                Technical Confirmation
              </a>
              <a href={onlineAssessmentHref}>Online Assessment</a>
            </div>
          </li>
          <li className="ag-nav-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="ag-nav-right">
          <button
            className={`ag-hamburger${navOpen ? ' ag-ham-open' : ''}`}
            id="agHamburger"
            aria-label="Open menu"
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
