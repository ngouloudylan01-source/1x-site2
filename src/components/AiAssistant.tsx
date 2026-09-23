import { useEffect, useRef, useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { askAssistant, type AssistantMessage } from '@/lib/assistant';
import { useLanguage } from '@/i18n';

export default function AiAssistant() {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<AssistantMessage[]>([
    { role: 'assistant', text: t.assistant.welcome },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', text: t.assistant.welcome }]);
    setInput('');
    setTyping(false);
  }, [language, t.assistant.welcome]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);

    const delay = 400 + Math.random() * 450;
    window.setTimeout(() => {
      const reply = askAssistant(trimmed, language);
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setTyping(false);
    }, delay);
  };

  return (
    <section id="ai" className="relative py-20 sm:py-28 bg-ink-900/40 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-5 sm:px-6">
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            {t.assistant.eyebrow}
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {t.assistant.title}
          </h2>
          <p className="mt-3 text-ink-400 text-sm sm:text-base">{t.assistant.description}</p>
        </div>

        <div className="card rounded-lg overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
            <div className="w-8 h-8 rounded-full bg-teal-500/15 flex items-center justify-center">
              <Bot className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{t.assistant.name}</p>
              <p className="text-xs text-ink-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                {t.assistant.online}
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="h-80 sm:h-96 overflow-y-auto px-4 sm:px-5 py-5 space-y-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex items-start gap-2.5 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                    message.role === 'user' ? 'bg-white/10' : 'bg-teal-500/15'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-3.5 h-3.5 text-ink-300" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 text-teal-400" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-white/10 text-white rounded-tr-none'
                      : 'bg-white/5 text-ink-200 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-start gap-2.5">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-500/15 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <div className="bg-white/5 rounded-lg rounded-tl-none px-4 py-3 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          <div className="px-4 sm:px-5 pb-3 flex flex-wrap gap-2">
            {t.assistant.suggestions.map((question) => (
              <button
                key={question}
                onClick={() => send(question)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-ink-300 hover:border-teal-400/40 hover:text-teal-300 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-4 sm:px-5 py-4 border-t border-white/5"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.assistant.placeholder}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-ink-500 focus:outline-none focus:border-teal-400/40 transition-colors"
            />
            <button
              type="submit"
              className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-teal-500 hover:bg-teal-400 transition-colors"
              aria-label={t.assistant.send}
            >
              <Send className="w-4 h-4 text-ink-950" />
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-ink-600 mt-4">{t.assistant.footnote}</p>
      </div>
    </section>
  );
}
