import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useChatbot from '../../hooks/useChatbot';
import ChatPanel from './ChatPanel';
import chatbotLogo from '../../assets/chatbot-logo.png';

const HINT_FIRST_DELAY = 4000;
const HINT_VISIBLE_FOR = 7000;
const HINT_REPEAT_EVERY = 50000;

// ChatWidget lives at the page level — hosts chatbot state so conversations
// survive open/close cycles without needing localStorage.
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);
  const chatbot = useChatbot();

  // Periodically nudge an idle visitor with a speech-bubble invite, unless
  // they've opened the chat or dismissed the hint already.
  useEffect(() => {
    if (isOpen || hintDismissed) return;
    let showTimer, hideTimer;
    const cycle = (delay) => {
      showTimer = setTimeout(() => {
        setShowHint(true);
        hideTimer = setTimeout(() => {
          setShowHint(false);
          cycle(HINT_REPEAT_EVERY);
        }, HINT_VISIBLE_FOR);
      }, delay);
    };
    cycle(HINT_FIRST_DELAY);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      setShowHint(false);
    };
  }, [isOpen, hintDismissed]);

  const openFromHint = () => {
    setShowHint(false);
    setIsOpen(true);
  };

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

      {/* Idle-nudge speech bubble — invites the visitor to chat */}
      <AnimatePresence>
        {showHint && !isOpen && (
          <motion.div
            key="hint"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{
              opacity: { duration: 0.25, ease: 'easeOut' },
              scale: { duration: 0.25, ease: 'easeOut' },
              y: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
            }}
            onClick={openFromHint}
            role="button"
            tabIndex={0}
            style={{
              position: 'fixed', bottom: 92, right: 20, zIndex: 9997,
              maxWidth: 220, background: '#ffffff', color: '#1e293b',
              padding: '11px 16px', borderRadius: 14,
              boxShadow: '0 10px 30px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)',
              fontSize: 13, fontWeight: 500, lineHeight: 1.4,
              cursor: 'pointer', borderLeft: '3px solid #1f4a3a',
            }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setShowHint(false); setHintDismissed(true); }}
              aria-label="Dismiss"
              style={{
                position: 'absolute', top: -8, right: -8, width: 20, height: 20,
                borderRadius: '50%', background: '#1f4a3a', color: '#fff',
                border: '2px solid #fff', fontSize: 10, lineHeight: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}
            >✕</button>
            👋 Can I help you with something?
            <span style={{
              position: 'absolute', bottom: -6, right: 28,
              width: 0, height: 0,
              borderLeft: '7px solid transparent', borderRight: '7px solid transparent',
              borderTop: '7px solid #ffffff',
            }} />
          </motion.div>
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
