const WHY_CARDS = [
  {
    icon: 'fa-handshake',
    title: 'Client-Centricity',
    desc: 'We treat your business as our own. Our success metrics are tied directly to your business outcomes, ensuring complete alignment from day one.',
    revealClass: 'reveal-up delay-100',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Relentless Innovation',
    desc: 'We invest heavily in our R&D labs, constantly exploring emerging tech like Generative AI to ensure our clients always have a competitive edge.',
    revealClass: 'reveal-up delay-200',
  },
  {
    icon: 'fa-shield-check',
    title: 'Security First',
    desc: 'In a world of increasing cyber threats, we embed zero-trust security protocols into the foundation of every digital product we engineer.',
    revealClass: 'reveal-up delay-300',
  },
  {
    icon: 'fa-globe-americas',
    title: 'Global Diversity',
    desc: 'Innovation thrives on diverse perspectives. Our global workforce spans dozens of cultures, bringing rich, varied problem-solving approaches to the table.',
    revealClass: 'reveal-up delay-400',
  },
];

export default function CoreDnaSection() {
  return (
    <section className="section-padding bg-alt">
      <div className="container">
        <div className="text-center reveal-up">
          <h4 className="section-badge">Our DNA</h4>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-subtitle">
            The principles that guide our culture, our code, and our client relationships.
          </p>
        </div>
        <div className="why-grid mt-5">
          {WHY_CARDS.map((card) => (
            <div key={card.title} className={`why-card ${card.revealClass}`}>
              <div className="why-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
