import { motion } from 'framer-motion';

interface MouseFollowerProps {
  mousePosition: { x: number; y: number };
}

export function MouseFollower({ mousePosition }: MouseFollowerProps) {
  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 h-4 w-4 rounded-full bg-primary/30"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 500,
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-50 h-2 w-2 rounded-full bg-primary"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 700,
        }}
      />
    </>
  );
}