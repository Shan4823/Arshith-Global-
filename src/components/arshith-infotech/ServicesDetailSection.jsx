const SERVICES = [
  {
    icon: 'fa-code',
    title: 'Software Development',
    description:
      'We design and develop high-quality applications including web, mobile, and enterprise solutions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  },
  {
    icon: 'fa-users-cog',
    title: 'IT & Non-IT Services',
    description: 'We provide staffing, support, and consulting services across industries.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
  },
  {
    icon: 'fa-bullhorn',
    title: 'Digital Marketing',
    description: 'SEO, social media marketing, and branding strategies for business growth.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48',
  },
  {
    icon: 'fa-server',
    title: 'Backend Support',
    description: 'Strong backend systems, APIs, and database management services.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  },
];

export default function ServicesDetailSection() {
  return (
    <section id="services" className="section section1">
      <div className="container">
        <h2 className="section-title">Our Expertise</h2>

        <div className="services-column">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="card-text">
                <div className="icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
