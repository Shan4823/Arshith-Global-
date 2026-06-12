export default function OpportunitiesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="head" style={{ textAlign: 'center' }}>
          <h2>Updated Opportunities</h2>
          <p>
            Candidates who successfully complete the 6-month internship will undergo dedicated
            training and become eligible for placement opportunities. They will be given top
            priority during walk-in drives conducted by Arshith Fresh.
          </p>
        </div>

        <div
          className="mncfix-grid"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="mncfix-card1" style={{ textAlign: 'center' }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0858/0772/6869/files/intership_poster.jpg?v=1775115897"
              alt="Internship Poster"
              className="poster-img"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
