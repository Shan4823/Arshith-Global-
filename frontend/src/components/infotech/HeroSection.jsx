import { useRef } from 'react';
import useTypewriter from '../../hooks/infotech/useTypewriter';
import useHeroParticles from '../../hooks/infotech/useHeroParticles';

const TYPEWRITER_WORDS = ['Digital Future', 'Business Growth', 'Global Innovation'];

export default function HeroSection() {
  const canvasRef = useRef(null);
  useHeroParticles(canvasRef);
  const typedText = useTypewriter(TYPEWRITER_WORDS);

  return (
    <header className="hero">
      <canvas id="heroParticles" ref={canvasRef}></canvas>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Your <br />
            <span className="typewriter">{typedText}</span>
          </h1>
          <p className="hero-subtitle">
            We deliver innovative IT solutions that drive growth, enhance security, and transform businesses for
            the digital age.
          </p>
          <div className="hero-cta">
            <a href="#services" className="btn btn-primary">
              Discover Solutions
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-image floating-hero-img">
          <div className="ken-burns-wrapper">
            <img src="/assets/images/hero-office.png" alt="IT Professionals collaborating" />
          </div>
          <div className="floating-card">
            <div className="floating-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-main)', fontWeight: 700 }}>99.9%</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Uptime Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
