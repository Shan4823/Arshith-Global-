import '../../styles/tailwind-home.css';

import useScrollReveal from '../../hooks/useScrollReveal';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CareersSection from '../../components/shared/CareersSection';
import ContactSection from '../../components/shared/ContactSection';
import NewsSection from '../../components/latestnews/NewsSection';

export default function LatestNews() {
  useScrollReveal();

  return (
    <>
      <Header infotechLinkOpenInNewTab={false} />
      <NewsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </>
  );
}
