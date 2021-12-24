import { motion } from "framer-motion";

const templateVariants = {
  initial: {
    opacity: 0,
    x: "-2%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: "-2%",
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const AnimatedContainer = ({ children }) => {
  return (
    <motion.main
      variants={templateVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  );
};

export default AnimatedContainer;
