import '../../styles/tailwind-home.css';

import { motion } from 'framer-motion';
import useScrollReveal from '../../hooks/useScrollReveal';
import { fadeUp, VIEWPORT_ONCE } from '../../lib/motion';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactHero from '../../components/contact/ContactHero';
import ContactInfoStrip from '../../components/contact/ContactInfoStrip';
import ContactSection from '../../components/shared/ContactSection';
import ChatWidget from '../../components/shared/ChatWidget';

export default function Contact() {
  useScrollReveal();

  return (
    <>
      <Header />

      <main>
        <ContactHero />
        <ContactInfoStrip />
        <motion.div initial="hidden" whileInView="show" viewport={VIEWPORT_ONCE} variants={fadeUp}>
          <ContactSection sourcePage="contact" />
        </motion.div>
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
}
