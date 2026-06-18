import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import useChatbot from '../../hooks/useChatbot';
import ChatPanel from './ChatPanel';
import chatbotLogo from '../../assets/chatbot-logo.png';

// ChatWidget lives at the page level — hosts chatbot state so conversations
// survive open/close cycles without needing localStorage.
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const chatbot = useChatbot();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ChatPanel
            key="panel"
            onClose={() => setIsOpen(false)}
            {...chatbot}
          />
        )}
      </AnimatePresence>

      {/* Floating trigger — hidden while panel is open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1, scale: 1,
              y: [0, -8, 0],
              rotate: [0, -4, 4, 0],
            }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{
              opacity: { duration: 0.2, ease: 'easeOut' },
              scale: { duration: 0.2, ease: 'easeOut' },
              y: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open Arshith Assistant"
            title="Arshith Assistant"
            style={{
              position: 'fixed', bottom: 24, right: 24, zIndex: 9998,
              width: 56, height: 56, borderRadius: '50%',
              border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg, #1f4a3a 0%, #173529 100%)',
              boxShadow: '0 8px 28px rgba(23,53,41,0.55), 0 3px 8px rgba(0,0,0,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 8,
            }}
          >
            <img src={chatbotLogo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, -3, 0], x: [0, 1, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 1, right: 3,
                width: 12, height: 12, borderRadius: '50%',
                background: '#c23f8d', boxShadow: '0 2px 6px rgba(194,63,141,0.5)',
              }}
            />
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, 3, 0], x: [0, -1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              style={{
                position: 'absolute', top: 10, right: -3,
                width: 9, height: 9, borderRadius: '50%',
                background: '#4f8fb3', boxShadow: '0 2px 6px rgba(79,143,179,0.5)',
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
