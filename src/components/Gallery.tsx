import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      title: 'Boxing Training',
    },
    {
      url: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
      title: 'Yoga Session',
    },
    {
      url: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80',
      title: 'Weight Training',
    },
    {
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
      title: 'Meditation',
    },
    {
      url: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80',
      title: 'Group Training',
    },
    {
      url: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=80',
      title: 'Personal Training',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our world of wellness and transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">
                        {image.title}
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogTitle className="sr-only">{image.title}</DialogTitle>
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}