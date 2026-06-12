import '../../styles/tailwind-infotech.css';

import useRevealAnimations from '../../hooks/infotech/useRevealAnimations';
import useServiceModal from '../../hooks/infotech/useServiceModal';

import Preloader from '../../components/infotech/Preloader';
import InfoTechNavbar from '../../components/infotech/InfoTechNavbar';
import HeroSection from '../../components/infotech/HeroSection';
import AboutSection from '../../components/infotech/AboutSection';
import ServicesSection from '../../components/infotech/ServicesSection';
import IndustriesSection from '../../components/infotech/IndustriesSection';
import InfoTechCareersSection from '../../components/infotech/InfoTechCareersSection';
import StatsSection from '../../components/infotech/StatsSection';
import WhyUsSection from '../../components/infotech/WhyUsSection';
import TechStackSection from '../../components/infotech/TechStackSection';
import ProcessSection from '../../components/infotech/ProcessSection';
import InsightsSection from '../../components/infotech/InsightsSection';
import InfoTechContactSection from '../../components/infotech/InfoTechContactSection';
import InfoTechFooter from '../../components/infotech/InfoTechFooter';
import FloatingCta from '../../components/infotech/FloatingCta';
import BackToTop from '../../components/infotech/BackToTop';
import ServiceModal from '../../components/infotech/ServiceModal';
import CookieBanner from '../../components/infotech/CookieBanner';

export default function InfoTech() {
  useRevealAnimations();
  const { activeKey, openModal, closeModal } = useServiceModal();

  return (
    <>
      <Preloader />
      <InfoTechNavbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection onOpenModal={openModal} />
      <IndustriesSection />
      <InfoTechCareersSection />
      <StatsSection />
      <WhyUsSection />
      <TechStackSection />
      <ProcessSection />
      <InsightsSection />
      <InfoTechContactSection />
      <InfoTechFooter />
      <FloatingCta />
      <BackToTop />
      <ServiceModal activeKey={activeKey} onClose={closeModal} />
      <CookieBanner />
    </>
  );
}
