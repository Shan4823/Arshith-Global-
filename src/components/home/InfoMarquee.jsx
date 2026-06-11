const items = [
  'E-Commerce',
  'IT Services',
  'Digital Consulting',
  'Arshith Fresh',
  'Web Development',
  'Cloud Solutions',
  'Arshith InfoTech',
  'Est. 2019',
  'Suntech Solutions',
];

export default function InfoMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[0, 1].map((set) =>
          items.map((item, i) => (
            <span className="marquee-item" key={`${set}-${i}`}>
              <span className="marquee-dot"></span>
              {item}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
