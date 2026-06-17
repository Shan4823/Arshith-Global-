import InfoCardsSection from '../internship/InfoCardsSection';

const cards = [
  {
    icon: <i className="fa-solid fa-flask"></i>,
    color: 'teal',
    heading: 'Hands-on Experience',
    text: 'Real-time project exposure.',
  },
  {
    icon: <i className="fa-solid fa-briefcase"></i>,
    color: 'orange',
    heading: 'Industry Skills',
    text: 'Modern IT skill development.',
  },
  {
    icon: <i className="fa-solid fa-puzzle-piece"></i>,
    color: 'purple',
    heading: 'Problem Solving',
    text: 'Analytical thinking enhancement.',
  },
  {
    icon: <i className="fa-solid fa-bullseye"></i>,
    color: 'pink',
    heading: 'Career Preparation',
    text: 'Placement readiness training.',
  },
];

export default function ObjectivesSection() {
  return (
    <InfoCardsSection
      kicker="Our mission"
      title="Program Objectives"
      description="The core goals that guide every part of this internship program."
      cards={cards}
      variant="quad"
    />
  );
}
