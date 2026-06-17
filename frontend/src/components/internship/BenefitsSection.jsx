import InfoCardsSection from './InfoCardsSection';

const cards = [
  {
    icon: <i className="fa-solid fa-certificate"></i>,
    color: 'gold',
    heading: 'Completion certificate',
    text: 'Receive an internship certificate that validates your practical experience and learning outcomes.',
  },
  {
    icon: <i className="fa-solid fa-chalkboard-user"></i>,
    color: 'blue',
    heading: 'Mentorship support',
    text: 'Get guidance, feedback, and corrections to improve your code quality and professional standards.',
  },
  {
    icon: <i className="fa-solid fa-rocket"></i>,
    color: 'purple',
    heading: 'Career advantage',
    text: 'High-performing interns may get priority consideration for future opportunities or referrals.',
  },
];

export default function BenefitsSection() {
  return (
    <InfoCardsSection
      kicker="Perks & rewards"
      title="Internship benefits"
      description="More than learning — this internship helps you move closer to employment."
      cards={cards}
    />
  );
}
