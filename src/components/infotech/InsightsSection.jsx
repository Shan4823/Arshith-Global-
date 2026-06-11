const INSIGHTS = [
  {
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    meta: 'Artificial Intelligence • May 12, 2026',
    title: 'The Future of Generative AI in the Enterprise',
    desc: 'How leading organizations are leveraging generative AI to streamline operations, reduce costs, and create entirely new revenue streams.',
    author: 'Dr. Aisha Patel',
    role: 'Head of AI Research',
    revealClass: 'reveal-left delay-100',
  },
  {
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    meta: 'Cloud Strategy • April 28, 2026',
    title: 'Multi-Cloud in 2026: Strategy Over Complexity',
    desc: 'Why the most successful enterprises are consolidating their cloud strategy instead of expanding — and how to get there without disruption.',
    author: 'Marcus Chen',
    role: 'Principal Cloud Architect',
    revealClass: 'reveal-up delay-200',
  },
  {
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    meta: 'Cybersecurity • April 15, 2026',
    title: 'Building a Zero-Trust Architecture That Actually Works',
    desc: 'A practical framework for implementing zero-trust security in hybrid environments — without slowing down your engineering teams.',
    author: 'Priya Ramesh',
    role: 'Chief Security Officer',
    revealClass: 'reveal-right delay-300',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="section-padding bg-alt">
      <div className="container">
        <div className="text-center reveal-up">
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">
            Thought leadership, industry analysis, and expert perspectives from our team.
          </p>
        </div>
        <div className="insights-grid">
          {INSIGHTS.map((insight) => (
            <div key={insight.title} className={`insight-card ${insight.revealClass}`}>
              <div className="insight-img" style={{ backgroundImage: `url('${insight.img}')` }}></div>
              <div className="insight-content">
                <span className="insight-meta">{insight.meta}</span>
                <h3>{insight.title}</h3>
                <p>{insight.desc}</p>
                <div className="insight-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div>
                    <strong>{insight.author}</strong>
                    <br />
                    <small>{insight.role}</small>
                  </div>
                </div>
                <a href="#" className="read-more">
                  Read Article <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
