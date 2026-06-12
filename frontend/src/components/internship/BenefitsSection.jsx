import InfoCardsSection from './InfoCardsSection';

const cards = [
  {
    icon: '✔',
    heading: 'Completion certificate',
    text: 'Receive an internship certificate that validates your practical experience and learning outcomes.',
  },
  {
    icon: '👨💻',
    heading: 'Mentorship support',
    text: 'Get guidance, feedback, and corrections to improve your code quality and professional standards.',
  },
  {
    icon: '🚀',
    heading: 'Career advantage',
    text: 'High-performing interns may get priority consideration for future opportunities or referrals.',
  },
];

export default function BenefitsSection() {
  return (
    <InfoCardsSection
      title="Internship benefits"
      description="More than learning — this internship helps you move closer to employment."
      cards={cards}
    />
  );
}
