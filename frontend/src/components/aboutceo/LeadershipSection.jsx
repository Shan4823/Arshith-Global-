const leaders = [
  {
    name: 'Farook N',
    role: 'Chairman - Arshith Group',
    img: '/logos/sir(1)(1).png',
    alt: 'Farook Nurubasha',
    badge: 'Est. 10 Yrs Software & Scaling',
    reverse: false,
    paragraphs: [
      'As a proudly rooted Indian brand, we at Arshith Fresh are dedicated to creating honest, healthy, and high-quality products that nourish every home. Our journey is guided by deep respect for tradition and a bold vision for modern India. We believe in transparency, trust, and long-term relationships — not shortcuts.',
      'Our focus is on delivering authentic value while empowering local communities and enabling sustainable practices that benefit everyone.',
    ],
  },
  {
    name: 'Pallavi N',
    role: 'Managing Director - Arshith Group',
    img: '/logos/mamimagefinal.jpeg',
    alt: 'Pallavi',
    badge: 'Est. 10 Yrs Operational Systems',
    reverse: true,
    paragraphs: [
      "At Arshith Group, we're more than just a brand — we're a heartfelt movement rooted in the soil of India, blooming with purpose. Every product we craft carries a promise: purity without compromise, wellness with every bite, and care in every grain.",
      "We don't believe in shortcuts — only in the long road of trust, honesty, and enduring relationships. Our mission is to nourish every Indian home, whether in a bustling metro or a remote village, with food that's wholesome, transparent, and thoughtfully made. This is our way of giving back.",
    ],
  },
];

function LeaderCard({ name, role, img, alt, badge, reverse, paragraphs }) {
  const imageBlock = (
    <div className="ag-leader-img">
      <img src={img} alt={alt} />
      <span className="leader-badge">
        <i className="fa-solid fa-star"></i>
        {badge}
      </span>
    </div>
  );

  const contentBlock = (
    <div className="ag-leader-content">
      <h3>{name}</h3>
      <h4>{role}</h4>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );

  return (
    <div className={`ag-leader-card${reverse ? ' ag-leader-reverse' : ''}`}>
      {reverse ? (
        <>
          {contentBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {contentBlock}
        </>
      )}
    </div>
  );
}

export default function LeadershipSection() {
  return (
    <section className="ag-section ag-leadership" id="leadership">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="ag-eyebrow">Our Team</span>
          <h2 className="ag-section-title">Leadership</h2>
        </div>

        {leaders.map((leader) => (
          <LeaderCard key={leader.name} {...leader} />
        ))}
      </div>
    </section>
  );
}
