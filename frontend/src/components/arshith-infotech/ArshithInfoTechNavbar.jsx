const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#careers', label: 'Careers' },
  { href: '#internship', label: 'Internship' },
  { href: '#about', label: 'About Us' },
  { href: '#collaboration', label: 'Collaboration' },
  { href: '#introduce', label: 'Introduce' },
  { href: '#contact', label: 'Contact' },
];

export default function ArshithInfoTechNavbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="/logos/main_logo.png" alt="Arshith Fresh India" style={{ width: '100%', height: '50px' }} />
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hamburger">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}
