import '../../styles/tailwind-home.css';

import useScrollReveal from '../../hooks/useScrollReveal';

import Header from '../../components/layout/Header';
import FarmFooter from '../../components/shared/FarmFooter';
import DetailsHero from '../../components/internship-details/DetailsHero';
import ObjectivesSection from '../../components/internship-details/ObjectivesSection';
import HighlightsSection from '../../components/internship-details/HighlightsSection';
import DurationInfoSection from '../../components/internship-details/DurationInfoSection';
import ModulesSection from '../../components/internship-details/ModulesSection';
import StudentBenefitsSection from '../../components/internship-details/StudentBenefitsSection';
import CertificationSection from '../../components/internship-details/CertificationSection';
import RegistrationSection from '../../components/internship-details/RegistrationSection';
import ApplySection from '../../components/internship-details/ApplySection';
import VideoCtaSection from '../../components/shared/VideoCtaSection';
import { INTERNSHIP_APPLY_FORM_URL } from '../../lib/constants';

export default function InternshipDetails() {
  useScrollReveal();

  return (
    <>
      <Header
        businessLinksOpenInNewTab={false}
        onlineAssessmentHref="https://quizzory.in/id/69f8284ef7e103e112b455ef"
      />
      <div className="mncfix">
        <DetailsHero />
        <ObjectivesSection />
        <HighlightsSection />
        <DurationInfoSection />
        <ModulesSection />
        <StudentBenefitsSection />
        <CertificationSection />
        <RegistrationSection />
        <ApplySection />
        <VideoCtaSection
          heading="Take the next step in your career"
          subtext="Secure your spot in our 6-month internship program with certification and placement support."
          ctaLabel="Apply for Internship →"
          ctaHref={INTERNSHIP_APPLY_FORM_URL}
          ctaTarget="_blank"
          ctaRel="noopener noreferrer"
        />
      </div>
      <FarmFooter />
    </>
  );
}
