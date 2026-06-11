const rowOneImages = Array.from({ length: 10 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return { src: `/marque/${num}.jpeg`, alt: `Operations ${i + 1}` };
});

const rowTwoImages = Array.from({ length: 10 }, (_, i) => {
  const num = String(i + 11).padStart(2, '0');
  return { src: `/marque/${num}.jpeg`, alt: `Operations ${i + 11}` };
});

function MarqueeRow({ images, reverse }) {
  return (
    <div className="og-marquee">
      {[0, 1, 2].map((trackIndex) => (
        <div className={`og-marquee-track${reverse ? ' reverse' : ''}`} key={trackIndex}>
          {images.map((img) => (
            <div className="og-card" key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="og-card-overlay"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function OperationalGallery() {
  return (
    <section
      id="operational-gallery"
      className="section"
      style={{
        backgroundColor: '#ffffff',
        padding: '80px 0',
        borderBottom: '1px solid #f1f5f9',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div style={{ maxWidth: '48rem' }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c9943c',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <i className="fa-solid fa-image" style={{ color: '#059669', fontSize: '0.8rem' }}></i>
            Operational Gallery
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '2.8rem',
              fontWeight: 600,
              color: '#0f172a',
              lineHeight: 1.2,
              marginTop: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Arshith Group in{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 500, color: '#059669' }}>Action</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: '#64748b',
              lineHeight: 1.7,
              marginTop: '1rem',
              maxWidth: '40rem',
            }}
          >
            A visual chronicle of our South Indian agricultural logistics hubs, software
            engineering workspaces, solar cold storages, and local grower collaborations.
          </p>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '1rem 0',
          userSelect: 'none',
        }}
      >
        <MarqueeRow images={rowOneImages} reverse={false} />
        <MarqueeRow images={rowTwoImages} reverse={true} />

        <div className="og-fade-left"></div>
        <div className="og-fade-right"></div>
      </div>
    </section>
  );
}
