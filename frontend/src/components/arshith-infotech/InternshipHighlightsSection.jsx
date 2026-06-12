const HIGHLIGHTS = [
  { icon: 'fa-laptop-code', title: 'Real-time project exposure' },
  { icon: 'fa-user-tie', title: 'Guidance from experienced mentors' },
  { icon: 'fa-certificate', title: 'Certificate after completion' },
];

export default function InternshipHighlightsSection() {
  return (
    <section id="internship" className="section light-bg">
      <div className="container text-center">
        <h2 className="section-title">Internship Opportunities</h2>
        <p className="section-subtitle">
          We provide internship programs for students and fresh graduates to gain real-time industry experience.
          Interns will work on live projects, learn modern technologies, and improve their technical and
          professional skills.
        </p>
        <div className="highlights">
          {HIGHLIGHTS.map((item) => (
            <div className="highlight-item" key={item.title}>
              <i className={`fas ${item.icon}`}></i>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
