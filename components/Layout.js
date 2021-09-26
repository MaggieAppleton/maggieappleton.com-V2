import styled from "styled-components";
import { motion } from "framer-motion";

export default function Layout({ children, type }) {
    return (
        <StyledLayout
        // variants={variants} // Pass the variant object into Framer Motion
        // initial="hidden" // Set the initial state to variants.hidden
        // animate="enter" // Animated state to variants.enter
        // exit="exit" // Exit state (used later) to variants.exit
        // transition={{ type: "linear" }}
        >
            {children}
        </StyledLayout>
    );
}

// const variants = {
//     initial: { opacity: 0, x: 0, y: -100 },
//     enter: { opacity: 1, x: 0, y: 0 },
//     exit: { opacity: 0, x: 0, y: -100 },
// };

const StyledLayout = styled(motion.main)`
    max-width: 1400px;
    margin: var(--space-32) auto;
    padding: 0 var(--space-48);
    @media (max-width: 768px) {
        margin: var(--space-24) auto;
        padding: 0 var(--space-32);
    }
    @media (max-width: 576px) {
        margin: var(--space-16) auto;
        padding: 0 var(--space-16);
    }
`;
