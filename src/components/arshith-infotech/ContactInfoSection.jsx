const CONTACT_ITEMS = [
  {
    icon: 'fa-building',
    title: 'Address',
    content: (
      <>
        Arshith Fresh India Pvt Ltd
        <br />
        Andhra Pradesh, India
      </>
    ),
  },
  {
    icon: 'fa-phone-alt',
    title: 'Phone',
    content: '+91 XXXXX XXXXX',
  },
  {
    icon: 'fa-envelope',
    title: 'Email',
    content: 'info@arshithgroup.com',
  },
];

export default function ContactInfoSection() {
  return (
    <section id="contact" className="section light-bg">
      <div className="container text-center">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-info">
          {CONTACT_ITEMS.map((item) => (
            <div className="contact-item" key={item.title}>
              <i className={`fas ${item.icon}`}></i>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
