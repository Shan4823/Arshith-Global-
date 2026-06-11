const AWARDS = [
  { icon: 'fa-trophy', title: 'Top IT Service Provider 2025', org: 'Global Tech Review' },
  { icon: 'fa-medal', title: 'Best Cloud Migration Partner', org: 'Cloud Excellence Awards' },
  { icon: 'fa-award', title: 'Leader in Generative AI Solutions', org: 'Gartner Magic Quadrant 2026' },
  { icon: 'fa-star', title: 'Top 100 Places to Work', org: 'Fortune Magazine' },
];

export default function AwardsSection() {
  return (
    <section className="section-padding">
      <div className="container text-center reveal-up">
        <h2 className="section-title">Awards & Recognition</h2>
        <p className="section-subtitle">Excellence validated by global industry leaders.</p>
        <div className="awards-grid mt-4">
          {AWARDS.map((award) => (
            <div key={award.title} className="award-item">
              <i className={`fas ${award.icon}`}></i>
              <h4>{award.title}</h4>
              <p>{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
