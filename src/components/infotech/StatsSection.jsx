import useStatCounters from '../../hooks/infotech/useStatCounters';

const STAT_TARGETS = [8, 20, 100];

export default function StatsSection() {
  const { containerRef, values } = useStatCounters(STAT_TARGETS);

  return (
    <section id="stats" className="stats" ref={containerRef}>
      <div className="container reveal-up">
        <div className="stat-item">
          <h4 className="counter">{values[0]}</h4>
          <p>Years of Excellence</p>
        </div>
        <div className="stat-item">
          <h4>
            <span className="counter">{values[1]}</span>+
          </h4>
          <p>Global Clients</p>
        </div>
        <div className="stat-item">
          <h4>
            <span className="counter">{values[2]}</span>+
          </h4>
          <p>IT Professionals</p>
        </div>
      </div>
    </section>
  );
}
