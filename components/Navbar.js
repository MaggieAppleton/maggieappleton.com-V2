import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../utils/onclickOutside";
import styled from "styled-components";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/solid";
import UnderlineHoverLink from "./links/UnderlineHoverLink";
import { debounce } from "lodash";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setIsOpen(false));

    // Need to debounce this so that it only fires once
    let handleFlyout = () => {
        setIsOpen(true);
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
                <div className="outside-dropdown">
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
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <Dropdown
                            key="dropdown"
                            ref={ref}
                            initial={{
                                opacity: 0,
                                rotateX: "90deg",
                                transformOrigin: "top",
                            }}
                            animate={{ opacity: 1, rotateX: "0deg" }}
                            exit={{ opacity: 0, rotateX: "90deg" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <Link href="/essays">
                                <DropdownLink href="/essays">
                                    Essays
                                </DropdownLink>
                            </Link>
                            <Link href="/notes">
                                <DropdownLink href="/notes">Notes</DropdownLink>
                            </Link>
                            <Link href="/patterns">
                                <DropdownLink href="/patterns">
                                    Patterns
                                </DropdownLink>
                            </Link>
                            <Link href="/library">
                                <DropdownLink href="/library">
                                    Library
                                </DropdownLink>
                            </Link>
                        </Dropdown>
                    )}
                </AnimatePresence>
                <div className="outside-dropdown">
                    <Link href="/projects">
                        <UnderlineHoverLink href="/projects">
                            Projects
                        </UnderlineHoverLink>
                    </Link>
                    <Link href="/about">
                        <UnderlineHoverLink href="/about">
                            About
                        </UnderlineHoverLink>
                    </Link>
                    {/* <Link href="/start">
                        <UnderlineHoverLink href="/start">
                            Start Here
                        </UnderlineHoverLink>
                    </Link> */}
                </div>
            </div>
        </StyledNavbar>
    );
}

const StyledNavbar = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--space-24) var(--space-32);
    .outside-dropdown {
        display: inline-block;
        a {
            margin-left: var(--space-24);
            padding-bottom: var(--space-4);
            text-decoration: none;
            font-size: var(--font-size-sm);
            font-family: var(--font-sans);
            transition: color 0.2s ease-in-out;
            span {
                color: var(--color-gray-800);
            }
            :hover {
                span {
                    color: var(--color-crimson);
                }
            }
        }
    }
`;
const DropdownLink = styled.a`
    margin: 0 !important;
    color: var(--color-gray-800);
    text-decoration: none;
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
    border-bottom: 1px solid var(--color-tinted-cream);
    border-left: 2px solid var(--color-cream);
    padding: var(--space-12) var(--space-32) var(--space-12) var(--space-16);
    transition: all 0.3s ease-in-out;
    &:hover {
        background: var(--color-light-cream);
        color: var(--color-crimson);
        border-left: 2px solid var(--color-sea-blue);
    }
`;

const Dropdown = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 0.7rem;
    background: var(--color-cream);
    margin-left: 1.2rem;
    border: 1px solid var(--color-tinted-cream);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--box-shadow-lg);
    z-index: 1;
`;

const HoverLink = styled.a`
    cursor: pointer;
    span,
    svg {
        display: inline-block;
        vertical-align: middle;
        transition: color 0.3s ease-in-out, transform 0.8s ease-in-out;
        color: var(--color-gray-600);
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
