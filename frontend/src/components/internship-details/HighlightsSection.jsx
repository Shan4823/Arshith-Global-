import InfoCardsSection from '../internship/InfoCardsSection';

const cards = [
  {
    icon: <i className="fa-solid fa-diagram-project"></i>,
    heading: 'Real-Time Projects',
    text: 'Work on live projects with real-world requirements and deadlines.',
  },
  {
    icon: <i className="fa-solid fa-comments"></i>,
    heading: 'Client Interaction',
    text: 'Get direct exposure to client requirements and feedback cycles.',
  },
  {
    icon: <i className="fa-solid fa-chalkboard-user"></i>,
    heading: 'Mentorship',
    text: 'Receive guidance and code reviews from experienced industry mentors.',
  },
  {
    icon: <i className="fa-solid fa-sitemap"></i>,
    heading: 'Industry Workflow',
    text: 'Experience real development, documentation, and deployment workflows.',
  },
];

export default function HighlightsSection() {
  return (
    <InfoCardsSection
      title="Program Highlights"
      description="What makes this internship different from a typical classroom course."
      cards={cards}
    />
  );
}
