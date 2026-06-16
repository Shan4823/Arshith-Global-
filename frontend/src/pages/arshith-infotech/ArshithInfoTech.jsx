import '../../styles/tailwind-arshith.css';

import ArshithInfoTechNavbar from '../../components/arshith-infotech/ArshithInfoTechNavbar';
import HeroSection from '../../components/arshith-infotech/HeroSection';
import ServicesOverviewSection from '../../components/arshith-infotech/ServicesOverviewSection';
import ServicesDetailSection from '../../components/arshith-infotech/ServicesDetailSection';
import ProjectsSection from '../../components/arshith-infotech/ProjectsSection';
import AboutSection from '../../components/arshith-infotech/AboutSection';
import InternshipHighlightsSection from '../../components/arshith-infotech/InternshipHighlightsSection';
import CollaborationSection from '../../components/arshith-infotech/CollaborationSection';
import ContactInfoSection from '../../components/arshith-infotech/ContactInfoSection';
import Footer from '../../components/layout/Footer';
import ChatWidget from '../../components/shared/ChatWidget';

export default function ArshithInfoTech() {
  return (
    <>
      <ArshithInfoTechNavbar />
      <HeroSection />
      <ServicesOverviewSection />
      <ServicesDetailSection />
      <ProjectsSection />
      <AboutSection />
      <InternshipHighlightsSection />
      <CollaborationSection />
      <ContactInfoSection />
      <Footer enableBackToTop={false} />
      <ChatWidget />
    </>
  );
}
