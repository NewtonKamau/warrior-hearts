import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Team } from './components/Team';
import { RemoteServices } from './components/RemoteServices';
import { BmiCalculator } from './components/BmiCalculator';
import { MouseFollower } from './components/MouseFollower';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <MouseFollower mousePosition={mousePosition} />
      <Navigation />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            <About />
            <Services />
            <RemoteServices />
            <BmiCalculator />
            <Team />
            <Gallery />
            <Testimonials />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;