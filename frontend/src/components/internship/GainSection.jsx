import InfoCardsSection from './InfoCardsSection';

const cards = [
  {
    icon: <i className="fa-solid fa-palette"></i>,
    color: 'pink',
    heading: 'Strong UI skills',
    text: 'Learn to build clean, modern, responsive interfaces using HTML, CSS, and JavaScript, following real industry patterns.',
  },
  {
    icon: <i className="fa-solid fa-laptop-code"></i>,
    color: 'blue',
    heading: 'Real projects',
    text: 'Work on real-world pages and components that you can confidently add to your resume and portfolio.',
  },
  {
    icon: <i className="fa-solid fa-briefcase"></i>,
    color: 'orange',
    heading: 'Job readiness',
    text: 'Understand how front-end developers work in companies — structure, responsiveness, best practices, and problem-solving mindset.',
  },
];

export default function GainSection() {
  return (
    <InfoCardsSection
      kicker="Why join us"
      title="What you will gain"
      description="Skills, confidence, and portfolio strength that directly help in job interviews."
      cards={cards}
    />
  );
}
