import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { HoursAndRules } from './components/HoursAndRules';
import { Packages } from './components/Packages';
import { Gallery } from './components/Gallery';
import { BookingSection } from './components/BookingSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyMobileButton } from './components/StickyMobileButton';

export default function App() {
  return (
    <div className="w-full" style={{ backgroundColor: 'var(--cloud-white)' }}>
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Activities />
      <HoursAndRules />
      <Packages />
      <Gallery />
      <BookingSection />
      <Contact />
      <Footer />
      <StickyMobileButton />
    </div>
  );
}