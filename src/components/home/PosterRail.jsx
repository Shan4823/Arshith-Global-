function PosterGroup({ href, accent, alt, title, images, tall }) {
  return (
    <div className="poster-rail-group">
      {images.map((src, i) => (
        <a
          key={src}
          href={href}
          className={`poster-card${tall[i] ? ' tall' : ''}`}
          style={{ '--card-accent': accent }}
        >
          <img className="poster-card-image" src={src} alt={alt} />
          <div className="poster-card-copy">
            <h3>{title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function PosterRail({ direction, duration, ...groupProps }) {
  return (
    <div className={`poster-rail ${direction}`} style={{ '--rail-duration': duration }}>
      <div className="poster-rail-track">
        <PosterGroup {...groupProps} />
        <PosterGroup {...groupProps} />
      </div>
    </div>
  );
}
