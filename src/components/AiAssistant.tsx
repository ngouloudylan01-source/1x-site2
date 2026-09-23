import { useEffect, useRef, useState } from 'react';
import { Sparkles, Send, Bot, User } from 'lucide-react';
import { askAssistant, SUGGESTED_QUESTIONS, type AssistantMessage } from '@/lib/assistant';

const WELCOME: AssistantMessage = {
  role: 'assistant',
  text:
    "Salut, je suis l'assistant IA de cette page ! Pose-moi une question sur le projet de Dylan : le PC, les jeux, la santé, ou comment faire un don.",
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

    const delay = 450 + Math.random() * 500;
    window.setTimeout(() => {
      const reply = askAssistant(trimmed);
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setTyping(false);
    }, delay);
  };

  return (
    <section id="ai" className="relative py-24 sm:py-32 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-teal-400">
            Intelligence artificielle intégrée
          </span>
          <h2 className="mt-3 font-black-display text-3xl sm:text-4xl md:text-5xl text-white">
            DEMANDE À <span className="text-gradient-warm">L'ASSISTANT</span>
          </h2>
          <p className="mt-4 text-ink-300 text-sm sm:text-base max-w-xl mx-auto">
            Un petit assistant qui connaît toute mon histoire et répond à tes questions
            instantanément, en toute simplicité.
          </p>
        </div>

        <div className="glass rounded-lg overflow-hidden shadow-3d-deep border border-teal-500/20">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-amber-400 flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5 text-ink-950" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Assistant du projet</p>
              <p className="text-xs text-teal-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                En ligne · réponses instantanées
              </p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-80 sm:h-96 overflow-y-auto px-4 sm:px-5 py-5 space-y-4">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                    m.role === 'user' ? 'bg-amber-500/20' : 'bg-teal-500/20'
                  }`}
                >
                  {m.role === 'user' ? (
                    <User className="w-3.5 h-3.5 text-amber-400" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 text-teal-400" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-amber-500/15 text-amber-50 rounded-tr-none'
                      : 'bg-white/5 text-ink-100 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-start gap-2.5">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <div className="bg-white/5 rounded-lg rounded-tl-none px-4 py-3 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions */}
          <div className="px-4 sm:px-5 pb-3 flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-ink-200 hover:border-teal-400/50 hover:text-teal-300 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-4 sm:px-5 py-4 border-t border-white/10"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écris ta question ici..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-ink-400 focus:outline-none focus:border-teal-400/50 transition-colors"
            />
            <button
              type="submit"
              className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-400 to-teal-600 hover:scale-105 transition-transform"
              aria-label="Envoyer"
            >
              <Send className="w-4 h-4 text-ink-950" />
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-ink-500 mt-4">
          Assistant local intégré au site — gratuit, sans clé API, fonctionne même hors ligne.
        </p>
      </div>
    </section>
  );
}
