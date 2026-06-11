import '../../styles/tailwind-home.css';
import '../../styles/legacy/styles.css';
import '../../styles/legacy/styles2.css';
import './internship.css';

import useScrollReveal from '../../hooks/useScrollReveal';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CareersSection from '../../components/shared/CareersSection';
import ContactSection from '../../components/shared/ContactSection';
import InternshipHero from '../../components/internship/InternshipHero';
import OverviewSection from '../../components/internship/OverviewSection';
import GainSection from '../../components/internship/GainSection';
import BenefitsSection from '../../components/internship/BenefitsSection';
import DurationSection from '../../components/internship/DurationSection';
import OpportunitiesSection from '../../components/internship/OpportunitiesSection';
import ApplySection from '../../components/internship/ApplySection';

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
        <OpportunitiesSection />
        <ApplySection />
      </div>
      <CareersSection />
      <ContactSection />
      <Footer />
    </>
  );
}
