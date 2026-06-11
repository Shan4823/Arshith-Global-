const SERVICES = [
  { title: 'Software Development', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b' },
  { title: 'IT & Non-IT Services', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c' },
  { title: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5' },
  { title: 'Backend Support', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692' },
  { title: 'E-Commerce Solutions', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f' },
];

export default function ServicesOverviewSection() {
  return (
    <section id="services-overview" className="section light-bg">
      <div className="container text-center">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">
          We deliver a wide range of services designed to meet business and technology needs efficiently.
        </p>

        <div className="service-list-simple">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="service-item"
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
