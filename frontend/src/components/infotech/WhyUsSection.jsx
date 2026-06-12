const WHY_CARDS = [
  {
    icon: 'fa-rocket',
    title: 'Outcome-First Approach',
    desc: 'Every engagement is measured by real business results — not hours logged. We align our success completely with yours.',
    revealClass: 'reveal-left delay-100',
  },
  {
    icon: 'fa-users',
    title: 'Dedicated Expert Teams',
    desc: 'You get a focused team of specialists — not generalists. Each project is staffed with domain experts who live and breathe your industry.',
    revealClass: 'reveal-up delay-200',
  },
  {
    icon: 'fa-lock',
    title: 'Security by Design',
    desc: "Security isn't an add-on — it's built into every line of code, every architecture decision, and every deployment we deliver.",
    revealClass: 'reveal-up delay-300',
  },
  {
    icon: 'fa-sync-alt',
    title: 'Agile Delivery',
    desc: 'Faster releases, tighter feedback loops. Our agile methodology means you see real progress every sprint — not just at project end.',
    revealClass: 'reveal-up delay-400',
  },
  {
    icon: 'fa-headset',
    title: '24/7 Support',
    desc: 'Round-the-clock monitoring and support means your systems stay live — because downtime is not an option in the digital economy.',
    revealClass: 'reveal-up delay-200',
  },
  {
    icon: 'fa-leaf',
    title: 'Sustainable Tech',
    desc: 'We design energy-efficient architectures and green cloud strategies that reduce your carbon footprint alongside your costs.',
    revealClass: 'reveal-right delay-300',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding">
      <div className="container">
        <div className="text-center reveal-up">
          <h4 className="section-badge">Why Choose Us</h4>
          <h2 className="section-title">What Sets Info-tech Apart</h2>
          <p className="section-subtitle">
            We don&apos;t just deliver technology — we deliver outcomes that transform how businesses compete and
            grow.
          </p>
        </div>
        <div className="why-grid">
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
