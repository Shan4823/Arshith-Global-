export default function AboutHero() {
  return (
    <section
      className="ag-page-hero"
      style={{
        background: "url('/logos/aboutbg.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <div className="container ag-page-hero-inner">
        <h1 className="ag-visible">About Arshith Group</h1>
        <p className="ag-visible" style={{ animationDelay: '0.1s', color: 'white' }}>
          Arshith Group is built on three main pillars, ArshithInfotech, ArshithFresh, and
          SuntechSolutions. We deliver soft solutions and drive businesses to grow, scale, and
          succeed in the digital world.
        </p>
      </div>
    </section>
  );
}
