import PosterRail from './PosterRail';

const rails = [
  {
    direction: 'up',
    duration: '28s',
    href: 'infotech.html',
    accent: '#1f66cc',
    alt: 'Arshith Infotech',
    title: 'Arshith Infotech',
    images: [
      'https://i.pinimg.com/736x/ad/31/92/ad3192e9ac6169a2614d932ded3b54e6.jpg',
      'https://i.pinimg.com/control1/736x/95/04/5f/95045fafecf5a86dbf704012906fb91b.jpg',
      'https://i.pinimg.com/1200x/3a/03/6a/3a036a16477e9d64e309734792c740e3.jpg',
      'https://i.pinimg.com/736x/f8/82/bd/f882bd2d5ead41a09966ad81c292f1e5.jpg',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    ],
    tall: [false, true, false, true, false],
  },
  {
    direction: 'down',
    duration: '32s',
    href: 'https://arshithfresh.com/',
    accent: '#6fc97e',
    alt: 'Arshith Fresh',
    title: 'Arshith Fresh',
    images: [
      'https://i.pinimg.com/736x/1a/3e/1d/1a3e1d27f7a3f935f4b9f5856a137e5e.jpg',
      'https://i.pinimg.com/736x/4d/ae/9d/4dae9de3f44d4ca5d0aefd8f6ee845ab.jpg',
      'https://i.pinimg.com/736x/ec/ca/29/ecca299ee395018aab53b0542f4a0800.jpg',
      'https://i.pinimg.com/control1/1200x/99/ea/f3/99eaf3266c9b01dab3c4c3eaae82fb17.jpg',
      'https://i.pinimg.com/1200x/b4/d8/d6/b4d8d6c31de1bfd17e52fa4041f79f77.jpg',
    ],
    tall: [false, true, false, true, false],
  },
  {
    direction: 'up',
    duration: '30s',
    href: 'https://suntechorganization.com/',
    accent: '#d7b96c',
    alt: 'Suntech Solutions',
    title: 'Suntech Solutions',
    images: [
      'https://i.pinimg.com/736x/99/4f/4a/994f4af2fa7dd601b53b467685a2a63e.jpg',
      'https://i.pinimg.com/736x/b5/03/09/b50309a02f54651f7262e56e66a7926f.jpg',
      'https://i.pinimg.com/736x/20/5b/7b/205b7b120ba93a1b47a7856749ac02a7.jpg',
      'https://i.pinimg.com/1200x/68/90/1f/68901f537a558b237c938aebd73adab4.jpg',
      'https://i.pinimg.com/736x/c7/46/31/c746310b6a6f3de2f4658d3e535bc4c3.jpg',
    ],
    tall: [false, true, false, true, false],
  },
];

export default function CompaniesShowcase() {
  return (
    <section id="companies" className="home-company-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Companies</p>
          <h2>Three companies, one connected group</h2>
        </div>

        <div className="home-company-showcase">
          <div className="home-company-image-panel">
            <div className="home-company-image-card">
              <img src="/companies-reference.jpeg" alt="Company hierarchy design reference" />
            </div>
          </div>

          <div className="poster-wall" aria-label="Company showcase posters">
            {rails.map((rail) => (
              <PosterRail key={rail.title + rail.direction} {...rail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
