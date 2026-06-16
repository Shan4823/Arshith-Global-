import '../../styles/tailwind-home.css';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AboutHero from '../../components/aboutceo/AboutHero';
import StorySection from '../../components/aboutceo/StorySection';
import LeadershipSection from '../../components/aboutceo/LeadershipSection';
import StatsSection from '../../components/aboutceo/StatsSection';
import ChatWidget from '../../components/shared/ChatWidget';

export default function AboutCeo() {
  return (
    <>
      <Header />

      <main>
        <AboutHero />
        <StorySection />
        <LeadershipSection />
        <StatsSection />
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
}
