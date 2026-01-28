import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-up' | 'blur-reveal';
}

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-in-up'
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    'fade-in-up': {
      hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    'slide-in-left': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    'slide-in-right': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    'scale-up': {
      hidden: { opacity: 0, scale: 0.9, filter: 'blur(4px)' },
      visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
    },
    'blur-reveal': {
      hidden: { opacity: 0, filter: 'blur(20px)' },
      visible: { opacity: 1, filter: 'blur(0px)' }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
        type: "spring",
        damping: 25,
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
