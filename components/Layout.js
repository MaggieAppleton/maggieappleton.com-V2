import styled from "styled-components";
import { motion } from "framer-motion";

export const layoutVariants = {
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

export default function Layout({ children, type }) {
  return (
    <StyledLayout
      variants={layoutVariants} // Pass the variant object into Framer Motion
      initial="initial" // Set the initial state to variants.hidden
      animate="animate" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
    >
      {children}
    </StyledLayout>
  );
}

const StyledLayout = styled(motion.main)`
  max-width: 1400px;
  margin: var(--space-l) auto var(--space-128);
  padding: 0 var(--space-l);
  @media (max-width: 768px) {
    margin: var(--space-s) auto var(--space-2xl);
    padding: 0 var(--space-m);
  }
  @media (max-width: 576px) {
    margin: var(--space-xs) auto var(--space-xl);
    padding: 0 var(--space-xs);
  }
`;
