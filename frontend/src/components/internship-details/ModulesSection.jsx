import InfoCardsSection from '../internship/InfoCardsSection';

const cards = [
  {
    icon: '1',
    heading: 'Project Requirement Documentation (DPR)',
    text: 'Understanding client requirements, structured documentation, and industry reporting standards.',
  },
  {
    icon: '2',
    heading: 'Project Quotation & Analysis',
    text: 'Cost estimation, feasibility study, requirement gathering, and system design planning.',
  },
  {
    icon: '3',
    heading: 'Project Implementation',
    text: 'Real-time development, testing, debugging, deployment, and SDLC understanding.',
  },
  {
    icon: '4',
    heading: 'Technical Skills Coverage',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'PHP', 'Java', 'Python', 'Flask', 'Django', 'MySQL', 'MongoDB'],
  },
  {
    icon: '5',
    heading: 'UI/UX & Cloud Exposure',
    text: 'Figma, Canva, Shopify, AWS basics, PythonAnywhere deployment, and version control systems.',
  },
  {
    icon: '6',
    heading: 'Soft Skills Development',
    text: 'Communication, presentation, teamwork, time management, and professional ethics.',
  },
];

export default function ModulesSection() {
  return (
    <InfoCardsSection
      kicker="Curriculum"
      title="Learning Modules"
      description="A structured curriculum covering documentation, development, deployment, and professional skills."
      cards={cards}
      variant="steps"
    />
  );
}
