import useStatCounters from '../../hooks/infotech/useStatCounters';

const STAT_TARGETS = [20, 500, 8];

export default function GlobalStatsSection() {
  const { containerRef, values } = useStatCounters(STAT_TARGETS);

  return (
    <section className="stats about-stats" ref={containerRef}>
      <div className="container reveal-up">
        <div className="stat-item">
          <h4>
            <span className="counter">{values[0]}</span>+
          </h4>
          <p>Global Professionals</p>
        </div>
        <div className="stat-item">
          <h4>
            <span className="counter">{values[1]}</span>+
          </h4>
          <p>Successful Projects</p>
        </div>
        <div className="stat-item">
          <h4 className="counter">{values[2]}</h4>
          <p>Years of Innovation</p>
        </div>
      </div>
    </section>
  );
}
