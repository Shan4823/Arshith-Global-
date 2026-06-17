import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// ─── Theme tokens (scoped — never touches page CSS variables) ─────────────────
const LIGHT = {
  bg: '#ffffff',
  sidebar: '#f8fafc',
  sidebarBorder: '#e2e8f0',
  header: 'linear-gradient(160deg, #3db256 0%, #35a74d 100%)',
  surface: '#f8fafc',
  botBubble: '#ffffff',
  botBubbleBorder: '#e2e8f0',
  userBubble: '#3db256',
  userText: '#ffffff',
  botText: '#1e293b',
  text: '#1e293b',
  muted: '#6b7280',
  border: '#e2e8f0',
  inputBg: '#f8fafc',
  cardBg: '#ffffff',
  cardBorder: '#e2e8f0',
  cardHover: '#f0fdf4',
  accent: '#3db256',
  btnHover: 'rgba(61,178,86,0.08)',
  shadow: '0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)',
  activeConv: '#ecfdf5',
};
const DARK = {
  bg: '#111827',
  sidebar: '#1f2937',
  sidebarBorder: '#374151',
  header: 'linear-gradient(135deg, #166534 0%, #15803d 60%, #16a34a 100%)',
  surface: '#111827',
  botBubble: '#1f2937',
  botBubbleBorder: '#374151',
  userBubble: '#16a34a',
  userText: '#ffffff',
  botText: '#f3f4f6',
  text: '#f9fafb',
  muted: '#9ca3af',
  border: '#374151',
  inputBg: '#1f2937',
  cardBg: '#1f2937',
  cardBorder: '#374151',
  cardHover: '#263340',
  accent: '#4ade80',
  btnHover: 'rgba(255,255,255,0.07)',
  shadow: '0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
  activeConv: '#14532d',
};

const SUGGESTIONS = [
  { icon: '🏢', label: 'About Arshith Group', q: 'Tell me about Arshith Group' },
  { icon: '🎓', label: 'Internship opportunities', q: 'What internship opportunities are available at Arshith Group?' },
  { icon: '💼', label: 'Services we offer', q: 'What IT services does Arshith InfoTech offer?' },
  { icon: '📞', label: 'Contact support', q: 'How can I contact Arshith Group?' },
  { icon: '👥', label: 'Leadership team', q: 'Who leads Arshith Group?' },
  { icon: '💰', label: 'Internship fees', q: 'What are the internship fees and duration options?' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmtTime = ts =>
  new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderMarkdown(raw) {
  let s = esc(raw);
  s = s.replace(/\*\*(.*?)\*\*/gs, '<strong>$1</strong>');
  s = s.replace(/\*(.*?)\*/gs, '<em>$1</em>');
  s = s.replace(/`(.*?)`/g, '<code style="background:rgba(0,0,0,0.12);padding:2px 6px;border-radius:4px;font-family:monospace;font-size:0.82em">$1</code>');
  s = s.replace(/\n/g, '<br/>');
  return s;
}

// ─── Atoms ────────────────────────────────────────────────────────────────────
function SparkleIcon({ size = 16, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 2L13.9 10.1L22 12L13.9 13.9L12 22L10.1 13.9L2 12L10.1 10.1Z" />
    </svg>
  );
}

function BotAvatar({ size = 28 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(135deg, #3db256 0%, #35a74d 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 3px 10px rgba(61,178,86,0.4)',
    }}>
      <SparkleIcon size={Math.round(size * 0.48)} />
    </div>
  );
}

function UserAvatar({ size = 28 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(135deg, #475569, #334155)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.45,
    }}>👤</div>
  );
}

function TypingDots({ color = '#94a3b8' }) {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '3px 2px' }}>
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
          style={{ width: 7, height: 7, borderRadius: '50%', background: color, display: 'block' }}
        />
      ))}
    </div>
  );
}

function CopyBtn({ text, t }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text).catch(() => {});
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };
  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      onClick={copy}
      title="Copy"
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '2px 7px', borderRadius: 5,
        fontSize: 10, color: t.muted, transition: 'color 0.15s',
        display: 'flex', alignItems: 'center', gap: 3,
      }}
    >
      {done ? '✓ Copied' : '⧉ Copy'}
    </motion.button>
  );
}

// ─── Message bubble ───────────────────────────────────────────────────────────
function Bubble({ msg, t }) {
  const isBot = msg.role === 'bot';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{
        display: 'flex',
        flexDirection: isBot ? 'row' : 'row-reverse',
        gap: 8,
        alignItems: 'flex-end',
        marginBottom: 10,
      }}
    >
      {isBot ? <BotAvatar /> : <UserAvatar />}
      <div style={{
        maxWidth: '76%',
        display: 'flex', flexDirection: 'column',
        alignItems: isBot ? 'flex-start' : 'flex-end',
      }}>
        <div
          style={{
            padding: '10px 14px',
            borderRadius: isBot ? '3px 14px 14px 14px' : '14px 3px 14px 14px',
            background: isBot ? t.botBubble : t.userBubble,
            color: isBot ? t.botText : t.userText,
            border: isBot ? `1px solid ${t.botBubbleBorder}` : 'none',
            fontSize: 12.5,
            lineHeight: 1.6,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            wordBreak: 'break-word',
          }}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
        />
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4, marginTop: 4,
          flexDirection: isBot ? 'row' : 'row-reverse',
        }}>
          <span style={{ fontSize: 10, color: t.muted }}>{fmtTime(msg.ts)}</span>
          {isBot && <CopyBtn text={msg.text} t={t} />}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Chatbot Three.js particle background (welcome screen only) ───────────────
function ChatbotParticles({ isDark }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth || 360;
    const h = el.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 500);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const COLOR = isDark ? 0x4ade80 : 0x3db256;
    const COUNT = 28;

    const posArr = new Float32Array(COUNT * 3);
    const velArr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      posArr[i * 3]     = (Math.random() - 0.5) * 110;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 80;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velArr[i * 3]     = (Math.random() - 0.5) * 0.04;
      velArr[i * 3 + 1] = (Math.random() - 0.5) * 0.04;
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    const ptMat = new THREE.PointsMaterial({ size: 1.6, color: COLOR, transparent: true, opacity: 0.6 });
    scene.add(new THREE.Points(ptGeo, ptMat));

    const MAX_SEGS = COUNT * 4;
    const linePosArr = new Float32Array(MAX_SEGS * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePosArr, 3));
    lineGeo.setDrawRange(0, 0);
    const lineMat = new THREE.LineBasicMaterial({ color: COLOR, transparent: true, opacity: isDark ? 0.18 : 0.13 });
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    const THRESH_SQ = 26 * 26;
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        posArr[ix]     += velArr[ix];
        posArr[ix + 1] += velArr[ix + 1];
        if (Math.abs(posArr[ix])     > 56) velArr[ix]     *= -1;
        if (Math.abs(posArr[ix + 1]) > 42) velArr[ix + 1] *= -1;
      }
      ptGeo.attributes.position.needsUpdate = true;

      let seg = 0;
      for (let i = 0; i < COUNT && seg < MAX_SEGS; i++) {
        for (let j = i + 1; j < COUNT && seg < MAX_SEGS; j++) {
          const dx = posArr[i*3] - posArr[j*3];
          const dy = posArr[i*3+1] - posArr[j*3+1];
          if (dx*dx + dy*dy < THRESH_SQ) {
            const b = seg * 6;
            linePosArr[b]   = posArr[i*3];   linePosArr[b+1] = posArr[i*3+1]; linePosArr[b+2] = posArr[i*3+2];
            linePosArr[b+3] = posArr[j*3];   linePosArr[b+4] = posArr[j*3+1]; linePosArr[b+5] = posArr[j*3+2];
            seg++;
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, seg * 2);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = el.clientWidth || 360;
      const nh = el.clientHeight || 400;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      ptGeo.dispose(); ptMat.dispose();
      lineGeo.dispose(); lineMat.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [isDark]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    />
  );
}

// ─── Welcome screen ───────────────────────────────────────────────────────────
function WelcomeScreen({ onSuggest, t, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '20px 14px 10px', gap: 16, flex: 1, overflowY: 'auto',
      }}
    >
      {/* Three.js particle background */}
      <ChatbotParticles isDark={isDark} />

      {/* Hero — sits above the canvas */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.4, type: 'spring', stiffness: 200 }}
          style={{
            width: 52, height: 52, borderRadius: '50%', margin: '0 auto 10px',
            background: 'linear-gradient(135deg, #3db256 0%, #35a74d 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(61,178,86,0.35)',
          }}
        ><SparkleIcon size={24} /></motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ fontSize: 17, fontWeight: 700, color: t.text, margin: '0 0 5px', letterSpacing: '-0.02em' }}
        >Arshith Assistant</motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22 }}
          style={{ fontSize: 12, color: t.muted, margin: 0, lineHeight: 1.5, maxWidth: 240 }}
        >
          Ask me anything about Arshith Group — services, internships, and more.
        </motion.p>
      </div>

      {/* Suggestion cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7,
          width: '100%', maxWidth: 320,
          position: 'relative', zIndex: 1,
        }}
      >
        {SUGGESTIONS.map((s, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.03, background: t.cardHover }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSuggest(s.q)}
            style={{
              background: t.cardBg,
              border: `1px solid ${t.cardBorder}`,
              borderRadius: 10,
              padding: '9px 9px',
              cursor: 'pointer',
              textAlign: 'left',
              color: t.text,
              transition: 'all 0.15s',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            }}
          >
            <div style={{ fontSize: 17, marginBottom: 4, lineHeight: 1 }}>{s.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 500, lineHeight: 1.35 }}>{s.label}</div>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ conversations, activeId, onNew, onSwitch, onClose, isDark, onToggleDark, t }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 10 }}
      />
      {/* Panel */}
      <motion.div
        initial={{ x: -230 }} animate={{ x: 0 }} exit={{ x: -230 }}
        transition={{ type: 'spring', damping: 26, stiffness: 240 }}
        style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: 220, zIndex: 20,
          background: t.sidebar, borderRight: `1px solid ${t.sidebarBorder}`,
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}
      >
        {/* Sidebar header */}
        <div style={{
          padding: '14px 12px 10px',
          borderBottom: `1px solid ${t.sidebarBorder}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <BotAvatar size={26} />
            <span style={{ fontSize: 13, fontWeight: 700, color: t.text }}>Chats</span>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: t.muted, fontSize: 15, lineHeight: 1, padding: 4 }}
          >✕</button>
        </div>

        {/* New chat */}
        <div style={{ padding: '10px 10px 6px' }}>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onNew}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #3db256, #2d6a4f)',
              color: '#fff', border: 'none', borderRadius: 8,
              padding: '8px 12px', cursor: 'pointer', fontSize: 12.5, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 6, textAlign: 'left',
            }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>＋</span> New Chat
          </motion.button>
        </div>

        {/* Conversation list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '4px 8px' }}>
          {conversations.length === 0 && (
            <p style={{ fontSize: 11, color: t.muted, padding: '8px 6px' }}>No conversations yet.</p>
          )}
          {conversations.map(c => (
            <motion.button
              key={c.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSwitch(c.id)}
              style={{
                width: '100%',
                background: c.id === activeId ? t.activeConv : 'transparent',
                border: 'none', borderRadius: 7,
                padding: '7px 9px', cursor: 'pointer',
                textAlign: 'left', color: t.text, fontSize: 12,
                marginBottom: 2,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                transition: 'background 0.15s',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <span style={{ opacity: 0.5, fontSize: 11 }}>💬</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Sidebar footer */}
        <div style={{
          padding: '10px 12px', borderTop: `1px solid ${t.sidebarBorder}`,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onToggleDark}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              background: t.btnHover, border: `1px solid ${t.border}`,
              borderRadius: 7, padding: '5px 9px', cursor: 'pointer', fontSize: 13,
              color: t.text, transition: 'all 0.15s',
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </motion.button>
          <span style={{ fontSize: 10, color: t.muted }}>v1.0 · AGT</span>
        </div>
      </motion.div>
    </>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header({ onMenu, onToggleDark, onClear, onClose, isDark, hasMessages, t }) {
  const btn = (label, title, onClick, icon) => (
    <motion.button
      key={label}
      whileTap={{ scale: 0.88 }}
      onClick={onClick}
      aria-label={title}
      title={title}
      style={{
        background: 'rgba(255,255,255,0.13)', border: 'none',
        borderRadius: 8, width: 34, height: 34, cursor: 'pointer',
        color: '#fff', fontSize: icon.length > 1 ? 13 : 17,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        transition: 'background 0.15s',
      }}
    >{icon}</motion.button>
  );

  return (
    <div style={{
      background: t.header, padding: '10px 12px',
      display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
    }}>
      {btn('menu', 'Open sidebar', onMenu, '☰')}
      <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SparkleIcon size={14} /></div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>Arshith Assistant</div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#86efac', display: 'inline-block' }} />
          Online
        </div>
      </div>
      {btn('theme', isDark ? 'Light mode' : 'Dark mode', onToggleDark, isDark ? '☀️' : '🌙')}
      {hasMessages && btn('clear', 'Clear chat', onClear, '🗑')}
      {btn('close', 'Close', onClose, '✕')}
    </div>
  );
}

// ─── Input bar ────────────────────────────────────────────────────────────────
function InputBar({ value, onChange, onSend, onKeyDown, isLoading, inputRef, t }) {
  const canSend = value.trim().length > 0 && !isLoading;
  return (
    <div style={{ padding: '8px 10px 10px', background: t.bg, borderTop: `1px solid ${t.border}`, flexShrink: 0 }}>
      <div style={{
        display: 'flex', gap: 8, alignItems: 'flex-end',
        background: t.inputBg, border: `1.5px solid ${t.border}`,
        borderRadius: 13, padding: '7px 7px 7px 13px',
        transition: 'border-color 0.2s',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}>
        <textarea
          ref={inputRef}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={isLoading}
          placeholder="Ask Arshith Assistant…"
          rows={1}
          aria-label="Message input"
          style={{
            flex: 1, background: 'none', border: 'none', outline: 'none',
            resize: 'none', fontSize: 13.5, color: t.text,
            lineHeight: 1.55, maxHeight: 110, overflowY: 'auto',
            fontFamily: 'inherit', padding: '4px 0',
          }}
          onInput={e => {
            e.target.style.height = 'auto';
            e.target.style.height = Math.min(e.target.scrollHeight, 110) + 'px';
          }}
        />
        <motion.button
          whileTap={{ scale: canSend ? 0.88 : 1 }}
          onClick={onSend}
          disabled={!canSend}
          aria-label="Send"
          style={{
            width: 36, height: 36, borderRadius: 9, border: 'none',
            cursor: canSend ? 'pointer' : 'default', flexShrink: 0,
            background: canSend
              ? 'linear-gradient(135deg, #3db256, #2d6a4f)'
              : (t.border),
            color: '#fff', fontSize: 17,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s, box-shadow 0.2s',
            boxShadow: canSend ? '0 4px 12px rgba(61,178,86,0.4)' : 'none',
          }}
        >↑</motion.button>
      </div>
      <p style={{ fontSize: 9.5, color: t.muted, margin: '6px 0 0', textAlign: 'center', letterSpacing: '0.02em' }}>
        Arshith Assistant · Arshith Group Technologies
      </p>
    </div>
  );
}

// ─── Main ChatPanel ───────────────────────────────────────────────────────────
export default function ChatPanel({
  onClose,
  conversations,
  activeId,
  activeMessages,
  isLoading,
  sendMessage,
  newConversation,
  switchConversation,
  clearMessages,
}) {
  const [isDark, setIsDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const t = isDark ? DARK : LIGHT;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeMessages, isLoading]);

  // Reset textarea height when input clears
  useEffect(() => {
    if (!input && inputRef.current) inputRef.current.style.height = 'auto';
  }, [input]);

  const handleSend = () => {
    const v = input.trim();
    if (!v || isLoading) return;
    sendMessage(v);
    setInput('');
    inputRef.current?.focus();
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleNew = () => { newConversation(); setSidebarOpen(false); };
  const handleSwitch = id => { switchConversation(id); setSidebarOpen(false); };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 18 }}
      transition={{ duration: 0.24, ease: [0.25, 0.8, 0.25, 1] }}
      className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[580px] sm:rounded-2xl"
      style={{
        zIndex: 9999,
        background: t.bg,
        boxShadow: t.shadow,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
      }}
      role="dialog"
      aria-label="Arshith Assistant"
      aria-modal="true"
    >
      {/* Sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <Sidebar
            conversations={conversations}
            activeId={activeId}
            onNew={handleNew}
            onSwitch={handleSwitch}
            onClose={() => setSidebarOpen(false)}
            isDark={isDark}
            onToggleDark={() => setIsDark(d => !d)}
            t={t}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <Header
        onMenu={() => setSidebarOpen(s => !s)}
        onToggleDark={() => setIsDark(d => !d)}
        onClear={clearMessages}
        onClose={onClose}
        isDark={isDark}
        hasMessages={activeMessages.length > 0}
        t={t}
      />

      {/* Message area */}
      <div style={{
        flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column',
        background: t.surface, padding: activeMessages.length === 0 && !isLoading ? 0 : '10px 12px 4px',
      }}>
        {activeMessages.length === 0 && !isLoading ? (
          <WelcomeScreen onSuggest={text => { sendMessage(text); }} t={t} isDark={isDark} />
        ) : (
          <>
            {activeMessages.map((msg, i) => (
              <Bubble key={`${activeId}-${i}`} msg={msg} t={t} />
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', gap: 8, alignItems: 'flex-end', marginBottom: 14 }}
              >
                <BotAvatar />
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '3px 14px 14px 14px',
                  background: t.botBubble,
                  border: `1px solid ${t.botBubbleBorder}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                }}>
                  <TypingDots color={t.muted} />
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} style={{ height: 1 }} />
          </>
        )}
        {activeMessages.length === 0 && <div ref={bottomRef} />}
      </div>

      {/* Input */}
      <InputBar
        value={input}
        onChange={e => setInput(e.target.value)}
        onSend={handleSend}
        onKeyDown={handleKeyDown}
        isLoading={isLoading}
        inputRef={inputRef}
        t={t}
      />
    </motion.div>
  );
}
