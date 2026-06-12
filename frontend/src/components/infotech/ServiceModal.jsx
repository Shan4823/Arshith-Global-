import { SERVICES } from './serviceData';

export default function ServiceModal({ activeKey, onClose }) {
  const service = SERVICES.find((s) => s.key === activeKey);

  return (
    <div
      id="serviceModal"
      role="dialog"
      aria-modal="true"
      className={activeKey ? 'open' : undefined}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-icon">
          <i className={`fas ${service ? service.icon : 'fa-laptop-code'}`}></i>
        </div>
        <h2>{service ? service.modalTitle : 'Service Title'}</h2>
        <p className="modal-desc">{service ? service.modalDesc : ''}</p>
        <ul className="modal-features">
          {service?.modalFeatures.map((feature) => (
            <li key={feature}>
              <i className="fas fa-check-circle"></i>
              {feature}
            </li>
          ))}
        </ul>
        <a href="#contact" className="modal-cta">
          Get a Free Consultation <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
