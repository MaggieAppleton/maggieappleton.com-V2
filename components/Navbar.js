import { useState, useRef } from "react";
import useOnClickOutside from "../utils/onclickOutside";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/solid";
import UnderlineHoverLink from "./UnderlineHoverLink";

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
            <div className="main">
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
                        <UnderlineHoverLink href="/essays">
                            Essays
                        </UnderlineHoverLink>
                    </Link>
                    <Link href="/notes">
                        <UnderlineHoverLink href="/notes">
                            Notes
                        </UnderlineHoverLink>
                    </Link>
                    <Link href="/patterns">
                        <UnderlineHoverLink href="/patterns">
                            Patterns
                        </UnderlineHoverLink>
                    </Link>
                    <Link href="/library">
                        <UnderlineHoverLink href="/library">
                            Library
                        </UnderlineHoverLink>
                    </Link>
                </Dropdown>
                <Link href="/projects">
                    <UnderlineHoverLink href="/projects">
                        Projects
                    </UnderlineHoverLink>
                </Link>
                <Link href="/about">
                    <UnderlineHoverLink href="/about">About</UnderlineHoverLink>
                </Link>
                <Link href="/start">
                    <UnderlineHoverLink href="/start">
                        Start Here
                    </UnderlineHoverLink>
                </Link>
            </div>
        </StyledNavbar>
    );
}

const StyledNavbar = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--space-24) var(--space-32);
    .main {
        a {
            margin-left: var(--space-24);
            padding-bottom: var(--space-4);
            text-decoration: none;
            font-size: var(--font-size-sm);
            font-family: var(--font-sans);
            color: var(--color-gray-800);
            transition: color 0.2s ease-in-out;
            :hover {
                color: var(--color-dark-crimson);
            }
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
    border-radius: var(--border-radius-sm);
    z-index: 1;
    .main & div {
        display: block;
        padding: var(--space-8) 0;
        a {
            margin: 0 var(--space-8) var(--space-4) var(--space-8);
        }
    }
`;

const HoverLink = styled.a`
    span,
    svg {
        display: inline-block;
        vertical-align: middle;
        transition: color 0.3s ease-in-out, transform 0.8s ease-in-out;
        color: var(--color-dark-crimson);
    }
    &:hover {
        span {
            color: var(--color-sea-blue);
        }
        svg {
            color: var(--color-sea-blue);
            transform: rotateY(180deg);
        }
    }
    svg {
        margin-left: var(--space-4);
        position: relative;
        top: 1px;
    }
`;
