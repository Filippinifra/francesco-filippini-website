import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAppLoading } from 'hook/useAppLoading';

export const FadeAnimation = ({ children, direction }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { animationsAvailable } = useAppLoading();

  useEffect(() => {
    if (inView && animationsAvailable) {
      controls.start('visible');
    }
  }, [controls, inView, animationsAvailable]);

  const coordinates = {
    visible: {
      x: 0,
      y: 0,
    },
    hidden: {
      x: direction === 'left' ? -50 : 0,
      y: direction === 'left' ? 0 : 50,
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7 }}
      variants={{
        visible: { opacity: 1, ...coordinates.visible },
        hidden: { opacity: 0, ...coordinates.hidden },
      }}
    >
      {children}
    </motion.div>
  );
};
