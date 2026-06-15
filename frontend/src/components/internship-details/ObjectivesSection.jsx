import InfoCardsSection from '../internship/InfoCardsSection';

const cards = [
  {
    icon: '🧪',
    heading: 'Hands-on Experience',
    text: 'Real-time project exposure.',
  },
  {
    icon: '💼',
    heading: 'Industry Skills',
    text: 'Modern IT skill development.',
  },
  {
    icon: '🧩',
    heading: 'Problem Solving',
    text: 'Analytical thinking enhancement.',
  },
  {
    icon: '🎯',
    heading: 'Career Preparation',
    text: 'Placement readiness training.',
  },
];

export default function ObjectivesSection() {
  return (
    <InfoCardsSection
      title="Program Objectives"
      description="The core goals that guide every part of this internship program."
      cards={cards}
    />
  );
}
