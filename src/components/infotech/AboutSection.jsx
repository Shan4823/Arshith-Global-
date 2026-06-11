export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal-left">
            <h4 className="section-badge">Who We Are</h4>
            <h2 className="section-title">Supercharging Progress</h2>
            <p className="about-desc">
              We are a next-generation global technology company that helps enterprises reimagine their businesses
              for the digital age. Our technology products, services, and engineering are built on decades of
              innovation, with a world-renowned management philosophy, a strong culture of invention and
              risk-taking, and a relentless focus on customer relationships.
            </p>
            <ul className="about-list">
              <li>
                <i className="fas fa-check-circle text-primary"></i> <strong>Innovation-Driven:</strong> Pioneering
                solutions in AI, Cloud, and Cyber.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary"></i> <strong>Client-Centric:</strong> A relentless
                focus on delivering value.
              </li>
              <li>
                <i className="fas fa-check-circle text-primary"></i> <strong>Global Reach:</strong> Operating across
                40+ countries.
              </li>
            </ul>
            <a href="about-infotech.html" className="btn btn-primary mt-4">
              Learn More About Us
            </a>
          </div>
          <div className="about-image reveal-right">
            <img src="/assets/images/tech-abstract.png" alt="Technology Abstract" className="rounded-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
