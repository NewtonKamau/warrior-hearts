import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Calendar, MessageSquare, Globe } from 'lucide-react';

export function RemoteServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: Video,
      title: 'Live Online Classes',
      description: 'Join our interactive live sessions from anywhere in the world. Experience real-time guidance and personalized attention.',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Book sessions at your convenience. We adapt to your time zone and schedule.',
    },
    {
      icon: MessageSquare,
      title: '24/7 Coach Support',
      description: 'Get continuous support and guidance from our expert coaches through our messaging platform.',
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with like-minded individuals from around the world in our virtual wellness community.',
    },
  ];

  return (
    <section id="remote" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Train Anywhere, Anytime</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your personal wellness journey doesn't have to be limited by location. Join our global community of remote fitness enthusiasts.
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
              <Card className="h-full">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="link" className="p-0">
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Schedule a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}