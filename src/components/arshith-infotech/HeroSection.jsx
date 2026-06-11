export default function HeroSection() {
  return (
    <header id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/logos/mp_.mp4" type="video/mp4" />
        </video>
        <div style={{ fontWeight: '100px', fontSize: '50px' }}>
          Empowering Businesses with Smart Digital Solutions
        </div>
        <p>
          We provide innovative software solutions, IT services, and digital strategies to help businesses grow in
          the modern world.
          <br />
          From development to deployment, we ensure quality, performance, and reliability.
          <br />
          Your success is our mission.
        </p>
        <a href="#contact" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </header>
  );
}
