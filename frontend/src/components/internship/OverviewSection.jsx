import InfoCardsSection from './InfoCardsSection';

const cards = [
  {
    icon: <i className="fa-solid fa-graduation-cap"></i>,
    color: 'teal',
    heading: 'Who can apply',
    text: 'Freshers, final-year students, career switchers, and self-taught developers who want strong front-end fundamentals and real project exposure.',
  },
  {
    icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
    color: 'purple',
    heading: 'How it works',
    text: 'Step-by-step learning with tasks, UI challenges, reviews, and guidance. You’ll build layouts, components, and complete pages just like in a real company.',
  },
  {
    icon: <i className="fa-solid fa-lightbulb"></i>,
    color: 'gold',
    heading: 'Learning approach',
    text: 'Focus on hands-on practice, clean code, responsiveness, and professional UI standards used by MNC-level development teams.',
  },
];

export default function OverviewSection() {
  return (
    <InfoCardsSection
      id="program-details"
      kicker="About the program"
      title="Internship overview"
      description="A practical, mentor-guided program focused on real-world front-end development, not classroom-style learning."
      cards={cards}
    />
  );
}
