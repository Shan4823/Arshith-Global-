const TIMELINE = [
  {
    year: '2018',
    title: 'The Beginning',
    desc: 'Info-tech was founded in a small garage with a team of 5 visionary engineers focused on providing basic networking solutions to local businesses.',
    revealClass: 'reveal-left',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    desc: 'Opened our first international offices in London and New York, pivoting to enterprise software development and early cloud architectures.',
    revealClass: 'reveal-right delay-100',
  },
  {
    year: '2023',
    title: 'The Cloud Era',
    desc: 'Launched our dedicated Cloud Engineering practice, becoming a premier partner for major providers and helping Fortune 500s migrate securely.',
    revealClass: 'reveal-left delay-200',
  },
  {
    year: '2025',
    title: 'AI & Beyond',
    desc: 'Established the InfoAI™ Innovation Lab, integrating generative AI into our core service offerings to drive unprecedented efficiency for our clients.',
    revealClass: 'reveal-right delay-300',
  },
];

export default function JourneyTimelineSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center reveal-up">
          <h4 className="section-badge">Our Journey</h4>
          <h2 className="section-title">A Legacy of Innovation</h2>
          <p className="section-subtitle">
            Tracing our path from a small engineering startup to a global IT powerhouse.
          </p>
        </div>
        <div className="timeline mt-5">
          {TIMELINE.map((item) => (
            <div key={item.year} className={`timeline-item ${item.revealClass}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
