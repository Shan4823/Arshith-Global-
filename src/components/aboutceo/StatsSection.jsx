import useCountUp from '../../hooks/useCountUp';

const stats = [
  { target: '7+', label: 'Years of Experience' },
  { target: '10+', label: 'Services & Solutions' },
  { target: '100+', label: 'Quality Products' },
  { target: '30k+', label: 'Happy Customers' },
];

function StatItem({ target, label }) {
  const { ref, display } = useCountUp(target);

  return (
    <div className="ag-stat-item">
      <h3 ref={ref}>{display}</h3>
      <p>{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="ag-section ag-stats-wrap">
      <div className="container">
        <div className="ag-stats-grid">
          {stats.map((stat) => (
            <StatItem key={stat.target} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
