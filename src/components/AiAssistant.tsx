import { useEffect, useRef, useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { askAssistant, SUGGESTED_QUESTIONS, type AssistantMessage } from '@/lib/assistant';

const WELCOME: AssistantMessage = {
  role: 'assistant',
  text:
    "Bonjour, je suis l'assistant de cette page. Posez-moi une question sur le projet de Dylan : la machine, les jeux, la santé, ou comment faire un don.",
};

export default function AiAssistant() {
  const [messages, setMessages] = useState<AssistantMessage[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      const reply = askAssistant(trimmed);
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setTyping(false);
    }, delay);
  };

  return (
    <section id="ai" className="relative py-20 sm:py-28 bg-ink-900/40 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-5 sm:px-6">
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            Assistant intégré
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Posez vos questions
          </h2>
          <p className="mt-3 text-ink-400 text-sm sm:text-base">
            Un assistant qui connaît mon histoire et répond simplement, à toute heure.
          </p>
        </div>

        <div className="card rounded-lg overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
            <div className="w-8 h-8 rounded-full bg-teal-500/15 flex items-center justify-center">
              <Bot className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Assistant du projet</p>
              <p className="text-xs text-ink-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                En ligne
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="h-80 sm:h-96 overflow-y-auto px-4 sm:px-5 py-5 space-y-4">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                    m.role === 'user' ? 'bg-white/10' : 'bg-teal-500/15'
                  }`}
                >
                  {m.role === 'user' ? (
                    <User className="w-3.5 h-3.5 text-ink-300" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 text-teal-400" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-white/10 text-white rounded-tr-none'
                      : 'bg-white/5 text-ink-200 rounded-tl-none'
                  }`}
                >
                  {m.text}
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
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-ink-300 hover:border-teal-400/40 hover:text-teal-300 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-4 sm:px-5 py-4 border-t border-white/5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-ink-500 focus:outline-none focus:border-teal-400/40 transition-colors"
            />
            <button
              type="submit"
              className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-teal-500 hover:bg-teal-400 transition-colors"
              aria-label="Envoyer"
            >
              <Send className="w-4 h-4 text-ink-950" />
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-ink-600 mt-4">
          Assistant intégré au site, gratuit et sans clé API.
        </p>
      </div>
    </section>
  );
}
