import useStickyHeader from '../../hooks/useStickyHeader';
import useMobileDrawer from '../../hooks/infotech/useMobileDrawer';
import useScrollSpy from '../../hooks/infotech/useScrollSpy';
import useSmoothAnchorScroll from '../../hooks/infotech/useSmoothAnchorScroll';

const NAV_LINKS_BY_VARIANT = {
  infotech: [
    { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#insights', label: 'Insights' },
    { href: '#careers', label: 'Careers' },
    { href: 'about-infotech.html', label: 'About Us' },
  ],
  about: [
    { href: 'infotech.html#services', label: 'Services' },
    { href: 'infotech.html#industries', label: 'Industries' },
    { href: 'infotech.html#insights', label: 'Insights' },
    { href: 'infotech.html#careers', label: 'Careers' },
    { href: 'about-infotech.html', label: 'About Us' },
  ],
};

export default function InfoTechNavbar({ variant = 'infotech' }) {
  const scrolled = useStickyHeader();
  const { open, closeDrawer, toggleDrawer } = useMobileDrawer();
  const activeId = useScrollSpy();
  useSmoothAnchorScroll(closeDrawer);

  const navLinks = NAV_LINKS_BY_VARIANT[variant];
  const logoHref = variant === 'about' ? 'infotech.html' : '#';
  const ctaHref = variant === 'about' ? 'infotech.html#contact' : '#contact';

  return (
    <>
      <nav
        className="navbar"
        style={{ boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)' }}
      >
        <div className="container">
          <a href={logoHref} className="logo">
            Arshith&nbsp;<span className="logo-tech">Info-Tech</span>
            <span className="logo-dot">.</span>
          </a>
          <ul className={`nav-links${open ? ' active' : ''}`}>
            <div className="drawer-brand">
              Arshith&nbsp;<span className="logo-tech">Info-Tech</span>
              <span className="logo-dot">.</span>
            </div>
            <button className="drawer-close" aria-label="Close menu" onClick={closeDrawer}>
              <i className="fas fa-times"></i>
            </button>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={activeId && link.href === `#${activeId}` ? 'active' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={ctaHref} className="btn btn-primary nav-cta">
            Contact Us
          </a>
          <div className="menu-toggle" onClick={toggleDrawer}>
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav>
      <div id="menuOverlay" className={open ? 'active' : undefined} onClick={closeDrawer}></div>
    </>
  );
}
