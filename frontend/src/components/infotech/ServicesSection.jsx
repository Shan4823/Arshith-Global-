import { SERVICES } from './serviceData';

export default function ServicesSection({ onOpenModal }) {
  return (
    <section id="services" className="section-padding bg-alt">
      <div className="container">
        <div className="text-center reveal-up">
          <h2 className="section-title">Our Core Capabilities</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored to your unique business challenges.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div
              key={service.key}
              className={`service-card reveal-scale ${service.delay}`}
              data-modal={service.key}
              onClick={() => onOpenModal(service.key)}
            >
              <i className={`fas ${service.icon} service-icon`}></i>
              <h3>{service.cardTitle}</h3>
              <p>{service.cardText}</p>
              <span className="card-learn">
                <i className="fas fa-arrow-right"></i> Learn more
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
