const ABOUT_POINTS = [
  'Arshith Fresh India Pvt Ltd is a growing software and service-based company',
  'We focus on delivering high-quality digital solutions',
  'Our team is dedicated to innovation and excellence',
  'We support businesses with end-to-end services',
  'Customer satisfaction is our top priority',
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <ul className="custom-list">
            {ABOUT_POINTS.map((point) => (
              <li key={point}>
                <i className="fas fa-check-circle"></i> {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-image">
          <div className="placeholder-graphic"></div>
        </div>
      </div>
    </section>
  );
}
