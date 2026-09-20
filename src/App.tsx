import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Bio from '@/components/Bio';
import Discography from '@/components/Discography';
import SocialFeed from '@/components/SocialFeed';
import Charts from '@/components/Charts';
import Community from '@/components/Community';
import Tour from '@/components/Tour';
import Shop from '@/components/Shop';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import FloatingPlayer from '@/components/FloatingPlayer';
import ErrorBoundary from '@/components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-anthracite-950 min-h-screen">
        <Header />
        <main>
          <Hero />
          <Bio />
          <Discography />
          <SocialFeed />
          <Charts />
          <Community />
          <Tour />
          <Shop />
          <Certifications />
        </main>
        <Footer />
        <FloatingPlayer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
