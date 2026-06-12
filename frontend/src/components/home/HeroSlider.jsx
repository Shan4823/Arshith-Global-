import { useEffect, useRef, useState } from 'react';

const SLIDE_INTERVAL = 6000;

const slides = [
  {
    bg: '/logos/ecommerce3.png',
    badge: 'E-Commerce',
    title: 'Arshith Fresh',
    titleStyle: { color: 'rgb(253, 255, 254)' },
    desc: 'Rooted in nature, grown with care, We bring freshness beyond compare. From farm to you, pure and true, Quality you trust in all we do..',
    ctaHref: 'https://arshithfresh.com/',
  },
  {
    bg: '/logos/infotech.jpeg',
    bgPosition: 'center',
    badge: 'IT Services & IT Consulting',
    title: 'ArshithInfoTech',
    desc: 'Building innovative solutions with modern code, Turning ideas into a powerful digital mode, Driven by quality, performance, and trust, Delivering excellence through ArshithInfoTech.',
    ctaHref: 'infotech.html',
  },
  {
    bg: '/logos/nonit.png',
    badge: 'Business Consulting & Services',
    title: 'Suntech Solutions.',
    desc: 'Empowering businesses with smart digital solutions, Driving growth through innovation and precision. Your trusted partner for success and transformation, Building a stronger future with Suntech Organization.',
    ctaHref: 'https://suntechorganization.com/',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
  };

  const moveSlider = (direction) => {
    setCurrent((prev) => (prev + direction + slides.length) % slides.length);
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrent(index);
    resetInterval();
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="hero-cinematic" id="heroCinematic">
      {slides.map((slide, i) => (
        <div className={`cinematic-slide${i === current ? ' active' : ''}`} key={slide.title}>
          <div
            className="cinematic-bg"
            style={{
              backgroundImage: `url("${slide.bg}")`,
              ...(slide.bgPosition ? { backgroundPosition: slide.bgPosition } : {}),
            }}
          ></div>
          <div className="cinematic-content">
            <div className="cinematic-badge" style={{ background: 'var(--primary)' }}>
              {slide.badge}
            </div>
            <h2 className="cinematic-title" style={slide.titleStyle}>
              {slide.title}
            </h2>
            <p className="cinematic-desc">{slide.desc}</p>
            <div>
              <a href={slide.ctaHref} className="btn-cinematic">
                Know More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="cinematic-controls">
        <div className="cinematic-arrow prev-cine" onClick={() => moveSlider(-1)}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="cinematic-arrow next-cine" onClick={() => moveSlider(1)}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div className="cinematic-indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot-cine${i === current ? ' active' : ''}`}
            data-index={i}
            onClick={() => goToSlide(i)}
          ></div>
        ))}
      </div>
    </section>
  );
}
