const TECH_BADGES = [
  { icon: 'fab fa-aws', label: 'AWS' },
  { icon: 'fab fa-microsoft', label: 'Azure' },
  { icon: 'fab fa-google', label: 'Google Cloud' },
  { icon: 'fab fa-docker', label: 'Docker' },
  { icon: 'fas fa-dharmachakra', label: 'Kubernetes' },
  { icon: 'fab fa-react', label: 'React' },
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fab fa-python', label: 'Python' },
  { icon: 'fas fa-database', label: 'PostgreSQL' },
  { icon: 'fab fa-git-alt', label: 'DevOps & CI/CD' },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="section-padding bg-alt">
      <div className="container">
        <div className="text-center reveal-up">
          <h4 className="section-badge">Our Technology Stack</h4>
          <h2 className="section-title">Powered by Industry-Leading Tools</h2>
          <p className="section-subtitle">
            We leverage the world&apos;s most trusted platforms and frameworks to build solutions that scale.
          </p>
        </div>
        <div className="tech-grid reveal-up delay-100">
          {TECH_BADGES.map((tech) => (
            <div key={tech.label} className="tech-badge">
              <i className={tech.icon}></i>
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
