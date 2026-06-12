const INDUSTRIES = [
  {
    title: 'Financial Services',
    desc: 'Driving digital banking and fintech innovation.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    delay: 'delay-100',
  },
  {
    title: 'Healthcare',
    desc: 'Transforming patient care with digital health.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    delay: 'delay-200',
  },
  {
    title: 'Manufacturing',
    desc: 'Industry 4.0 and smart supply chains.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    delay: 'delay-300',
  },
  {
    title: 'Retail & CPG',
    desc: 'Enhancing customer experiences and omnichannel commerce.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    delay: 'delay-400',
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding">
      <div className="container">
        <div className="text-center reveal-up">
          <h4 className="section-badge">Industries We Serve</h4>
          <h2 className="section-title">Domain Expertise</h2>
          <p className="section-subtitle">
            Delivering tailored technology solutions across major global industries.
          </p>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className={`industry-card reveal-up ${industry.delay}`}
              style={{ backgroundImage: `url('${industry.img}')` }}
            >
              <div className="industry-overlay">
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
