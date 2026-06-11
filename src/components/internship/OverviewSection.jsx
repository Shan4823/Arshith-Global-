import InfoCardsSection from './InfoCardsSection';

const cards = [
  {
    icon: '01',
    heading: 'Who can apply',
    text: 'Freshers, final-year students, career switchers, and self-taught developers who want strong front-end fundamentals and real project exposure.',
  },
  {
    icon: '02',
    heading: 'How it works',
    text: 'Step-by-step learning with tasks, UI challenges, reviews, and guidance. You’ll build layouts, components, and complete pages just like in a real company.',
  },
  {
    icon: '03',
    heading: 'Learning approach',
    text: 'Focus on hands-on practice, clean code, responsiveness, and professional UI standards used by MNC-level development teams.',
  },
];

export default function OverviewSection() {
  return (
    <InfoCardsSection
      title="Internship overview"
      description="A practical, mentor-guided program focused on real-world front-end development, not classroom-style learning."
      cards={cards}
    />
  );
}
