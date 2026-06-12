const careerCards = [
  { bg: '/job oppurtunity.jpg', title: 'Job Opportunities' },
  { bg: '/values.jpg', title: 'Our Values' },
  { bg: '/work-culture.jpg', title: 'Life at Arshith' },
  { bg: '/Internship-and-Training-1024x536(1).png', title: 'Internships' },
];

export default function CareersSection() {
  return (
    <section className="ag-careers" id="careers">
      <div className="container">
        <div className="ag-careers-head">
          <h2 className="ag-section-title">Join Us</h2>
          <a href="#" className="ag-btn ag-btn--solid-dark">
            Know More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="ag-careers-grid">
          {careerCards.map((card) => (
            <div
              className="ag-career-card"
              style={{ backgroundImage: `url("${card.bg}")` }}
              key={card.title}
            >
              <div className="ag-career-overlay"></div>
              <div className="ag-career-body">
                <h4>{card.title}</h4>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
