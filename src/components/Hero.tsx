import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transform Your Life Through Movement",
      description: "Join us on a journey to elevate your mind, body, and spirit through our comprehensive fitness programs.",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=1800&q=80",
      cta: "Start Your Journey",
    },
    {
      title: "Discover Inner Peace with Yoga",
      description: "Experience the perfect harmony of mind and body through our expert-led yoga sessions.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1800&q=80",
      cta: "Book a Session",
    },
    {
      title: "Master the Art of Boxing",
      description: "Learn boxing techniques from professional trainers in our state-of-the-art facility.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1800&q=80",
      cta: "Watch Preview",
      hasVideo: true,
    },
    {
      title: "Elite Boxing Training",
      description: "Experience the intensity of professional boxing training.",
      video: "https://player.vimeo.com/external/478588270.sd.mp4?s=3c9d243c4b76f3dc65eea36a7e93b5a6d0f93d0e&profile_id=165&oauth2_token_id=57447761",
      isVideo: true,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          {slides[currentSlide].isVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            >
              <source src={slides[currentSlide].video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="object-cover w-full h-full"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {!slides[currentSlide].isVideo && (
                <>
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p
                    className="text-xl mb-8 text-muted-foreground"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div className="flex gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      {slides[currentSlide].cta}
                    </Button>
                    {slides[currentSlide].hasVideo && (
                      <Button size="lg" variant="outline" className="gap-2">
                        <PlayCircle className="h-5 w-5" />
                        Watch Video
                      </Button>
                    )}
                  </motion.div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {!slides[currentSlide].isVideo && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="rounded-full bg-background/20 hover:bg-background/40"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-primary"
                    : "bg-primary/40"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="rounded-full bg-background/20 hover:bg-background/40"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      )}
    </section>
  );
}