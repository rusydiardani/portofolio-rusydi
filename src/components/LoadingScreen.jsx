import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-color)]">
      <motion.div
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
        className="w-24 h-24 bg-[var(--color-neo-primary)] border-8 border-[var(--border-color)] neo-shadow flex items-center justify-center text-3xl font-bold"
      >
        MyPortfolio.
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
