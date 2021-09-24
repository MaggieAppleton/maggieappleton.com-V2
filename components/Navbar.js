import styled from "styled-components";
import Link from "next/link";
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuPopover,
    MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <StyledNavbar
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Link href="/">
                <a href="/">
                    <img src="https://via.placeholder.com/40x40" alt="logo" />
                </a>
            </Link>
            <div>
                <Dropdown label="The Garden">
                    <StyledMenuLink as="a" href="/essays">
                        Essays
                    </StyledMenuLink>
                    <StyledMenuLink as="a" href="/notes">
                        Notes
                    </StyledMenuLink>
                    <StyledMenuLink as="a" href="/patterns">
                        Patterns
                    </StyledMenuLink>
                    <StyledMenuLink as="a" href="/library">
                        Library
                    </StyledMenuLink>
                    <StyledMenuLink as="a" href="/garden">
                        Explore all
                    </StyledMenuLink>
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
    padding: var(--space-24) var(--space-32);
    & a:not(:first-child) {
        margin-left: var(--space-24);
        text-decoration: none;
        color: var(--color-salmon);
        font-size: var(--font-size-sm);
        font-family: var(--font-sans);
    }
`;

function Dropdown({ label, labelHref, children, ...props }) {
    return (
        <Menu>
            <StyledMenuButton>{label}</StyledMenuButton>
            <StyledMenuList>{children}</StyledMenuList>
        </Menu>
    );
}

const StyledMenuButton = styled(MenuButton)`
    border: none;
    background: none;
    margin-left: var(--space-24);
    text-decoration: none;
    color: var(--color-salmon);
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
`;

const StyledMenuLink = styled(MenuLink)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
    background: var(--colour-cream);
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
`;

const StyledMenuList = styled(MenuList)`
    padding: var(--space-8) var(--space-12);
    background: var(--colour-cream);
    border-radius: var(--border-radius-base);
    margin-top: var(--space-8);
    width: var(--space-128);
    z-index: 1;
    position: relative;
    & a:last-child {
        color: green;
    }
`;
