export default function InfoCardsSection({ title, description, cards }) {
  return (
    <section className="section">
      <div className="container">
        <div className="head">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="mncfix-grid">
          {cards.map((card) => (
            <div className="mncfix-card" key={card.heading}>
              <div className="mncfix-ico">{card.icon}</div>
              <h3>{card.heading}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
