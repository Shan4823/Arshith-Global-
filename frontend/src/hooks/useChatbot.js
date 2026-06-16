import { useCallback, useRef, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

let _seq = 0;
const uid = () => String(++_seq);
const blankConv = () => ({ id: uid(), title: 'New Chat', messages: [] });

export default function useChatbot() {
  const firstId = useRef(null);
  if (firstId.current === null) firstId.current = uid();

  const [conversations, setConversations] = useState(() => [
    { id: firstId.current, title: 'New Chat', messages: [] },
  ]);
  const [activeId, setActiveId] = useState(firstId.current);
  const [isLoading, setIsLoading] = useState(false);

  // Refs so sendMessage never captures stale state
  const convsRef = useRef(conversations);
  convsRef.current = conversations;
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  const patch = (id, fn) =>
    setConversations(prev => prev.map(c => (c.id === id ? fn(c) : c)));

  const sendMessage = useCallback(async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const convId = activeIdRef.current;
    const conv = convsRef.current.find(c => c.id === convId);
    const history = conv?.messages ?? [];

    const userMsg = { role: 'user', text: trimmed, ts: Date.now() };

    patch(convId, c => ({
      ...c,
      title: c.messages.length === 0
        ? trimmed.slice(0, 40) + (trimmed.length > 40 ? '…' : '')
        : c.title,
      messages: [...c.messages, userMsg],
    }));

    setIsLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Error');
      patch(convId, c => ({
        ...c,
        messages: [...c.messages, { role: 'bot', text: data.reply, ts: Date.now() }],
      }));
    } catch {
      patch(convId, c => ({
        ...c,
        messages: [
          ...c.messages,
          { role: 'bot', text: "Sorry, I couldn't reach the server right now. Please try again.", ts: Date.now() },
        ],
      }));
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const newConversation = useCallback(() => {
    const c = blankConv();
    setConversations(prev => [c, ...prev]);
    setActiveId(c.id);
  }, []);

  const switchConversation = useCallback(id => setActiveId(id), []);

  const clearMessages = useCallback(() => {
    patch(activeIdRef.current, c => ({ ...c, title: 'New Chat', messages: [] }));
  }, []);

  const activeMessages =
    conversations.find(c => c.id === activeId)?.messages ?? [];

  return {
    conversations,
    activeId,
    activeMessages,
    isLoading,
    sendMessage,
    newConversation,
    switchConversation,
    clearMessages,
  };
}
