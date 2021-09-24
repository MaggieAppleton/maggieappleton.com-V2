import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <StyledNavbar
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/garden">
                <a>The Garden</a>
            </Link>
        </StyledNavbar>
    );
}

const StyledNavbar = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: var(--space-24) var(--space-32);
    & a {
        margin-left: var(--space-16);
        text-decoration: none;
        color: var(--color-salmon);
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
    }
`;
