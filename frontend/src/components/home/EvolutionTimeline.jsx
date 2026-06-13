import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2019',
    title: 'Suntech Solutions Evolution',
    side: 'left-side',
    desc: 'Laying the foundation of the group by establishing Suntech Solutions, focusing on business consulting, corporate services, and operational optimization to empower early enterprise growth.',
  },
  {
    year: '2021',
    title: 'Suntech Expansion with Backend Support',
    side: 'right-side',
    desc: "Expanded Suntech Solutions' service portfolio to offer robust backend support, administration management, and initial digital marketing solutions to help clients streamline remote operations.",
  },
  {
    year: '2023',
    title: 'Arshith Group Evolution.',
    side: 'left-side',
    desc: 'Consolidating our expanding service operations and consulting divisions under a unified corporate identity, establishing a strong foundation for long-term multi-sector growth and sustainable business development.',
  },
  {
    year: '2025',
    title: 'Arshith Fresh India Pvt Ltd Inauaguration',
    side: 'right-side',
    desc: 'Officially incorporating and inaugurating Arshith Fresh India Pvt Ltd, establishing our flagship e-commerce platform to connect farmers directly with consumers.',
  },
  {
    year: '2026',
    title: 'Arshith Info-Tech Expansion.',
    side: 'left-side',
    desc: 'Scaling our technical capabilities globally, offering comprehensive software solutions, advanced cloud architectures, and digital transformations to enterprise-grade clients.',
  },
];

export default function EvolutionTimeline() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;
    const progressLine = progressRef.current;
    if (!container || !progressLine) return;

    const triggers = [];

    const progressTween = gsap.fromTo(
      progressLine,
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 60%',
          end: 'bottom 70%',
          scrub: 1.5,
        },
      },
    );
    if (progressTween.scrollTrigger) triggers.push(progressTween.scrollTrigger);

    container.querySelectorAll('.milestone-item').forEach((el, index) => {
      const dot = el.querySelector('.timeline-dot');
      const card = el.querySelector('.timeline-card');
      if (!dot || !card) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(dot, {
        backgroundColor: '#2563eb',
        borderColor: '#60a5fa',
        scale: 1.3,
        duration: 0.4,
      }).fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2',
      );

      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
    });

    ScrollTrigger.refresh();
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="timeline-section" id="journey" ref={sectionRef}>
      <div className="timeline-container">
        <div className="timeline-header">
          <span className="timeline-eyebrow">Our Journey</span>
          <h2 className="timeline-title">Tracing Our Evolution</h2>
          <p className="timeline-desc">
            From a humble visionary concept to a leading multi-sector corporate
            brand, see how we have scaled our services over the years.
          </p>
        </div>

        <div className="timeline-path">
          <div className="bg-line"></div>
          <div className="progress-line" id="progressLine" ref={progressRef}></div>

          {milestones.map((milestone) => (
            <div className={`milestone-item ${milestone.side}`} key={milestone.year}>
              <div className="node-wrapper">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-card">
                <span className="timeline-year">{milestone.year}</span>
                <h3 className="timeline-card-title">{milestone.title}</h3>
                <p className="timeline-card-desc">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
