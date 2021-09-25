import { useState, useRef } from "react";
import useOnClickOutside from "../utils/onclickOutside";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsOpen(false));

    const handleFlyout = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledNavbar
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <Link href="/">
                <a href="/">
                    <img src="https://via.placeholder.com/40x40" alt="logo" />
                </a>
            </Link>
            <div>
                <Link href="/garden">
                    <HoverLink
                        onFocus={handleFlyout}
                        onMouseOver={handleFlyout}
                        href="/garden"
                    >
                        <span>The Garden</span>
                        <ChevronDownIcon width="22" height="22" />
                    </HoverLink>
                </Link>
                <Dropdown
                    ref={ref}
                    style={{ display: isOpen ? "block" : "none" }}
                >
                    <Link href="/essays">
                        <a href="/essays">Essays</a>
                    </Link>
                    <Link href="/notes">
                        <a href="/notes">Notes</a>
                    </Link>
                    <Link href="/patterns">
                        <a href="/patterns">Patterns</a>
                    </Link>
                    <Link href="/library">
                        <a href="/library">Library</a>
                    </Link>
                </Dropdown>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/start">
                    <a>Start Here</a>
                </Link>
            </div>
        </StyledNavbar>
    );
}

const StyledNavbar = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--space-24) var(--space-16);
    & a {
        margin-left: var(--space-24);
        text-decoration: none;
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
        color: var(--color-gray-800);
        transition: color 0.2s ease-in-out;
        :hover {
            color: var(--color-dark-crimson);
        }
    }
`;

const Dropdown = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: var(--space-8);
    background: var(--color-cream);
    padding: var(--space-8) var(--space-16);
    border-radius: var(--border-radius-base);
    z-index: 1;
    & a {
        margin-left: var(--space-8);
        display: block;
        padding: var(--space-4) 0;
    }
`;

const HoverLink = styled.a`
    span,
    svg {
        display: inline-block;
        vertical-align: middle;
    }
    svg {
        margin-left: var(--space-4);
        position: relative;
        top: 1px;
    }
`;
