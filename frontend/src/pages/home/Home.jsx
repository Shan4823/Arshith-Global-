import '../../styles/tailwind-home.css';

import useScrollReveal from '../../hooks/useScrollReveal';

import Loader from '../../components/layout/Loader';
import ProgressBar from '../../components/layout/ProgressBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSlider from '../../components/home/HeroSlider';
import InfoMarquee from '../../components/home/InfoMarquee';
import QuoteCard from '../../components/home/QuoteCard';
import CompaniesShowcase from '../../components/home/CompaniesShowcase';
import EvolutionTimeline from '../../components/home/EvolutionTimeline';
import PartnerAiSection from '../../components/home/PartnerAiSection';
import OperationalGallery from '../../components/home/OperationalGallery';
import CareersSection from '../../components/shared/CareersSection';
import ContactSection from '../../components/shared/ContactSection';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Loader />
      <ProgressBar />
      <Header />
      <HeroSlider />
      <InfoMarquee />
      <QuoteCard />
      <CompaniesShowcase />
      <EvolutionTimeline />
      <PartnerAiSection />
      <OperationalGallery />
      <CareersSection />
      <ContactSection />
      <Footer />
    </>
  );
}
