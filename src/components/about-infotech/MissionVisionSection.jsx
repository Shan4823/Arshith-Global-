export default function MissionVisionSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="about-grid align-center">
          <div className="about-content reveal-left active">
            <h4 className="section-badge">Our Purpose</h4>
            <h2 className="section-title">Built on Belief. Driven by Engineering.</h2>
            <p className="about-desc">
              At Info-tech, we believe that technology is the ultimate equalizer. Our mission is to democratize
              advanced capabilities — from AI to Cloud to Quantum Computing — for enterprises of all sizes.
            </p>
            <p className="about-desc">
              We don&apos;t just act as vendors; we act as transformation partners. By deeply understanding your
              business context, we engineer solutions that not only solve today&apos;s problems but anticipate
              tomorrow&apos;s challenges.
            </p>
            <div className="mission-vision-cards mt-4">
              <div className="mv-card">
                <i className="fas fa-eye text-primary"></i>
                <h4>Our Vision</h4>
                <p>To be the world&apos;s most trusted partner in navigating the digital age.</p>
              </div>
              <div className="mv-card">
                <i className="fas fa-bullseye text-primary"></i>
                <h4>Our Mission</h4>
                <p>To deliver scalable, secure, and innovative engineering solutions that drive measurable growth.</p>
              </div>
            </div>
          </div>
          <div className="about-image reveal-right active">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaborating"
              className="rounded-image shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
