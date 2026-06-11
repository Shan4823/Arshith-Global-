const COLLABORATORS = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'];

export default function CollaborationSection() {
  return (
    <section id="collaboration" className="section">
      <div className="container text-center">
        <h2 className="section-title">Our Collaborations</h2>
        <p className="section-subtitle">
          We collaborate with leading companies and organizations to deliver quality services and innovative
          solutions.
        </p>

        <div className="logo-slider">
          <div className="logo-track">
            {COLLABORATORS.map((name) => (
              <div className="collab-logo" key={`a-${name}`}>
                {name}
              </div>
            ))}
            {COLLABORATORS.map((name) => (
              <div className="collab-logo" key={`b-${name}`}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
