import InfoCardsSection from '../internship/InfoCardsSection';

const cards = [
  {
    icon: <i className="fa-solid fa-diagram-project"></i>,
    color: 'blue',
    heading: 'Real-Time Projects',
    text: 'Work on live projects with real-world requirements and deadlines.',
  },
  {
    icon: <i className="fa-solid fa-comments"></i>,
    color: 'gold',
    heading: 'Client Interaction',
    text: 'Get direct exposure to client requirements and feedback cycles.',
  },
  {
    icon: <i className="fa-solid fa-chalkboard-user"></i>,
    color: 'teal',
    heading: 'Mentorship',
    text: 'Receive guidance and code reviews from experienced industry mentors.',
  },
  {
    icon: <i className="fa-solid fa-sitemap"></i>,
    color: 'purple',
    heading: 'Industry Workflow',
    text: 'Experience real development, documentation, and deployment workflows.',
  },
];

export default function HighlightsSection() {
  return (
    <InfoCardsSection
      kicker="What sets us apart"
      title="Program Highlights"
      description="What makes this internship different from a typical classroom course."
      cards={cards}
      variant="quad"
    />
  );
}
