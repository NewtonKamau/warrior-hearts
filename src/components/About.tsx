import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Dumbbell, Flower2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    { icon: Heart, title: 'Wellness', description: 'Holistic approach to health and well-being' },
    { icon: Brain, title: 'Mindfulness', description: 'Mental clarity and emotional balance' },
    { icon: Dumbbell, title: 'Fitness', description: 'Strength and conditioning programs' },
    { icon: Flower2, title: 'Yoga', description: 'Traditional and modern yoga practices' },
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Transform Your Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine ancient wisdom with modern science to create a unique approach
            to wellness, fitness, and personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <feature.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}