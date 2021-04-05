import React from 'react';
import { motion } from 'framer-motion';

export const ButtonAnimation = ({ children, canTap }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: canTap ? 0.9 : null }}>
    {children}
  </motion.div>
);
