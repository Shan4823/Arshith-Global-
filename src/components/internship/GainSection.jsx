import InfoCardsSection from './InfoCardsSection';

const cards = [
  {
    icon: 'UI',
    heading: 'Strong UI skills',
    text: 'Learn to build clean, modern, responsive interfaces using HTML, CSS, and JavaScript, following real industry patterns.',
  },
  {
    icon: 'PR',
    heading: 'Real projects',
    text: 'Work on real-world pages and components that you can confidently add to your resume and portfolio.',
  },
  {
    icon: 'JR',
    heading: 'Job readiness',
    text: 'Understand how front-end developers work in companies — structure, responsiveness, best practices, and problem-solving mindset.',
  },
];

export default function GainSection() {
  return (
    <InfoCardsSection
      title="What you will gain"
      description="Skills, confidence, and portfolio strength that directly help in job interviews."
      cards={cards}
    />
  );
}
