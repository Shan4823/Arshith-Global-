import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import useChatbot from '../../hooks/useChatbot';
import ChatPanel from './ChatPanel';

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
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open Arshith Assistant"
            title="Arshith Assistant"
            style={{
              position: 'fixed', bottom: 24, right: 24, zIndex: 9998,
              width: 56, height: 56, borderRadius: '50%',
              border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg, #3db256 0%, #35a74d 100%)',
              boxShadow: '0 8px 28px rgba(61,178,86,0.5), 0 3px 8px rgba(0,0,0,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M12 2L13.9 10.1L22 12L13.9 13.9L12 22L10.1 13.9L2 12L10.1 10.1Z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
