import '../../styles/tailwind-home.css';

import useScrollReveal from '../../hooks/useScrollReveal';

import Header from '../../components/layout/Header';
import FarmFooter from '../../components/shared/FarmFooter';
import InternshipHero from '../../components/internship/InternshipHero';
import OverviewSection from '../../components/internship/OverviewSection';
import GainSection from '../../components/internship/GainSection';
import BenefitsSection from '../../components/internship/BenefitsSection';
import DurationSection from '../../components/internship/DurationSection';
import ApplySection from '../../components/internship/ApplySection';
import VideoCtaSection from '../../components/shared/VideoCtaSection';
import ChatWidget from '../../components/shared/ChatWidget';

export default function Internship() {
  useScrollReveal();

  return (
    <>
      <Header
        businessLinksOpenInNewTab={false}
        onlineAssessmentHref="https://quizzory.in/id/69f8284ef7e103e112b455ef"
      />
      <div className="mncfix">
        <InternshipHero />
        <OverviewSection />
        <GainSection />
        <BenefitsSection />
        <DurationSection />
        <ApplySection />
        <VideoCtaSection
          heading="Ready to launch your career?"
          subtext="Apply now and take the first step toward a portfolio-ready, mentor-guided internship."
          ctaLabel="Apply Now →"
          ctaHref="internship-details.html"
        />
      </div>
      <FarmFooter />
      <ChatWidget />
    </>
  );
}
