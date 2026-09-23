import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Goals from '@/components/Goals';
import AiProjects from '@/components/AiProjects';
import AiAssistant from '@/components/AiAssistant';
import Impact from '@/components/Impact';
import Faq from '@/components/Faq';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import { LanguageProvider } from '@/i18n';

function App() {
  return (
    <LanguageProvider>
      <ErrorBoundary>
        <div className="bg-ink-950 min-h-screen">
          <Header />
          <main>
            <Hero />
            <Story />
            <Goals />
            <AiProjects />
            <AiAssistant />
            <Impact />
            <Faq />
            <Support />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export default App;
