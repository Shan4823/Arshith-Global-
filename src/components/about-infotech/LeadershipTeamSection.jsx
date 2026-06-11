const TEAM = [
  {
    img: '/assets/images/ceo.png',
    name: 'Farook N',
    role: 'Chief Executive Officer',
    revealClass: 'reveal-up delay-100',
  },
  {
    img: '/assets/images/md.png',
    name: 'Pallavi N',
    role: 'Managing Director',
    revealClass: 'reveal-up delay-200',
  },
];

export default function LeadershipTeamSection() {
  return (
    <section className="section-padding bg-alt">
      <div className="container">
        <div className="text-center reveal-up">
          <h4 className="section-badge">Leadership</h4>
          <h2 className="section-title">Meet Our Executive Team</h2>
          <p className="section-subtitle">
            Guided by industry veterans who are passionate about technology and human potential.
          </p>
        </div>
        <div className="team-grid mt-5">
          {TEAM.map((member) => (
            <div key={member.name} className={`team-card ${member.revealClass}`}>
              <div className="team-img" style={{ backgroundImage: `url('${member.img}')` }}></div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
