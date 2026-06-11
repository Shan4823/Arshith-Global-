import '../../styles/legacy/infotech.css';
import '../../styles/legacy/footer-premium.css';

import useRevealAnimations from '../../hooks/infotech/useRevealAnimations';

import Preloader from '../../components/infotech/Preloader';
import InfoTechNavbar from '../../components/infotech/InfoTechNavbar';
import InfoTechFooter from '../../components/infotech/InfoTechFooter';
import BackToTop from '../../components/infotech/BackToTop';
import CookieBanner from '../../components/infotech/CookieBanner';

import AboutHeroSection from '../../components/about-infotech/AboutHeroSection';
import GlobalStatsSection from '../../components/about-infotech/GlobalStatsSection';
import MissionVisionSection from '../../components/about-infotech/MissionVisionSection';
import CoreDnaSection from '../../components/about-infotech/CoreDnaSection';
import JourneyTimelineSection from '../../components/about-infotech/JourneyTimelineSection';
import LeadershipTeamSection from '../../components/about-infotech/LeadershipTeamSection';
import AwardsSection from '../../components/about-infotech/AwardsSection';
import AboutCtaSection from '../../components/about-infotech/AboutCtaSection';

export default function AboutInfoTech() {
  useRevealAnimations();

  return (
    <>
      <Preloader />
      <InfoTechNavbar variant="about" />
      <AboutHeroSection />
      <GlobalStatsSection />
      <MissionVisionSection />
      <CoreDnaSection />
      <JourneyTimelineSection />
      <LeadershipTeamSection />
      <AwardsSection />
      <AboutCtaSection />
      <InfoTechFooter />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
