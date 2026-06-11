const PROJECTS = [
  {
    title: 'Business Website',
    description: 'Modern corporate website with responsive UI.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Online store with cart and payment system.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  },
  {
    title: 'Dashboard System',
    description: 'Admin dashboard with analytics and control panel.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Our Work</h2>

        <p className="section-subtitle">
          We have successfully developed modern and responsive websites tailored to different business needs. Our
          projects focus on performance, user experience, and clean design.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
