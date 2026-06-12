const newsItems = [
  {
    img: '/logos/mallareddy.jpeg',
    alt: 'News Image 1',
    title: 'A Defining Moment for Future Growth and Direction',
  },
  {
    img: '/logos/diest collage.jpeg',
    alt: 'News Image 2',
    title: 'Marking a New Phase of Progress and Commitment.',
  },
  {
    img: '/logos/news3.jpeg',
    alt: 'News Image 3',
    title:
      'A Moment of Pride and Great Success: Honoring the synergy of institutional collaboration and the spirit of shared achievement',
  },
  {
    img: '/logos/students.jpeg',
    alt: 'News Image 3',
    title: 'Empowering minds today for a brighter leadership tomorrow',
  },
  {
    img: '/logos/news4.jpeg',
    alt: 'News Image 3',
    title: 'A Step Forward in Strengthening Women Leadership',
  },
  {
    img: '/logos/news5.jpeg',
    alt: 'News Image 3',
    title:
      '“Strengthening Foundations for Future Success”\n“Building Momentum Towards a Stronger Tomorrow”',
  },
];

export default function NewsSection() {
  return (
    <section
      className="section"
      style={{ backgroundColor: 'var(--bg-main)', padding: '50px', marginTop: '40px' }}
    >
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Latest news & updates</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>.</p>
          </div>
        </div>

        <div className="news-grid">
          {newsItems.map((item) => (
            <div className="news-card" key={item.title}>
              <img src={item.img} alt={item.alt} className="news-img" />
              <div className="news-content">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                ></div>
                <h3 className="news-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
