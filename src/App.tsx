import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import EventsCarousel from '@/components/EventsCarousel';
import Discography from '@/components/Discography';
import Hits from '@/components/Hits';
import Dashboard from '@/components/Dashboard';
import News from '@/components/News';
import Featurings from '@/components/Featurings';
import IvorianDoll from '@/components/IvorianDoll';
import Certifications from '@/components/Certifications';
import Community from '@/components/Community';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import FloatingPlayer from '@/components/FloatingPlayer';
import ErrorBoundary from '@/components/ErrorBoundary';
import Marquee from '@/components/Marquee';
import ChartsPage from '@/pages/ChartsPage';
import EventPage from '@/pages/EventPage';
import LifestylePage from '@/pages/LifestylePage';
import { useRoute } from '@/lib/router';

// Structure du site (§6) :
// Accueil : Hero → Parcours → Événements → Discographie → Hits & pépites →
// Tableau de bord live → Actualités → Featurings → Certifications & trophées →
// Communauté 1X ULTRA → Biographie → Pied de page (emblème EN GANG)
// Pages : #/charts (classements 1–50), #/lifestyle (styles & garage),
// #/evenement/:id (détail d'un événement).
function App() {
  const route = useRoute();

  return (
    <ErrorBoundary>
      <div className="bg-anthracite-950 min-h-screen">
        <Header />
        {route.page === 'charts' && <ChartsPage />}
        {route.page === 'lifestyle' && <LifestylePage />}
        {route.page === 'evenement' && <EventPage id={route.id} />}
        {route.page === 'home' && (
          <main>
            <Hero />
            <Marquee />
            <Timeline />
            <EventsCarousel />
            <Discography />
            <Hits />
            <Dashboard />
            <News />
            <Featurings />
            <IvorianDoll />
            <Certifications />
            <Community />
            <Bio />
          </main>
        )}
        <Footer />
        <FloatingPlayer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
