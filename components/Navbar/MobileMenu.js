import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledMobileMenu>
      <StyledButton
        onClick={() => {
          setMenuOpen(true);
        }}
        aria-label="open menu"
      >
        <svg
          width={24}
          height={20}
          viewBox="0 0 24 24"
          fill="var(--color-gray-600)"
        >
          <rect width={24} height={4} rx={2} />
          <rect y={9} width={24} height={4} rx={2} />
          <rect y={18} width={24} height={4} rx={2} />
        </svg>
      </StyledButton>
      <AnimatePresence>
        {menuOpen && (
          <FullPageMenu
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <LinkContainer>
              <LinkButton
                handleClick={() => {
                  setMenuOpen(false);
                }}
                href="/garden"
              >
                The Garden
              </LinkButton>
              <LinkButton
                handleClick={() => {
                  setMenuOpen(false);
                }}
                href="/essays"
              >
                Essays
              </LinkButton>
              <LinkButton
                handleClick={() => {
                  setMenuOpen(false);
                }}
                href="/notes"
              >
                Notes
              </LinkButton>
              <LinkButton
                handleClick={() => {
                  setMenuOpen(false);
                }}
                href="/library"
              >
                Library
              </LinkButton>
              <LinkButton
                handleClick={() => {
                  setMenuOpen(false);
                }}
                href="/now"
              >
                Now
              </LinkButton>
              <LinkButton
                handleClick={() => {
                  setMenuOpen(false);
                }}
                href="/about"
              >
                About
              </LinkButton>
            </LinkContainer>
            <StyledButton
              aria-label="close menu"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <svg width={21} height={21} fill="var(--color-gray-600)">
                <rect
                  x={4.136}
                  y={0.6}
                  width={23}
                  height={5}
                  rx={2}
                  transform="rotate(45 4.136 .6)"
                />
                <rect
                  x={0.601}
                  y={16.864}
                  width={23}
                  height={5}
                  rx={2}
                  transform="rotate(-45 .6 16.864)"
                />
              </svg>
            </StyledButton>
          </FullPageMenu>
        )}
      </AnimatePresence>
    </StyledMobileMenu>
  );
}

function LinkButton({ href, children, handleClick }) {
  return (
    <Link href={href}>
      <button onClick={handleClick}>{children}</button>
    </Link>
  );
}

const StyledMobileMenu = styled(motion.div)`
  display: flex;
  @media screen and (min-width: 550px) {
    display: none;
  }
`;

const LinkContainer = styled(motion.div)`
  display: flex;
  gap: var(--space-xs);
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  margin: var(--space-l) auto;
  button {
    border: none;
    background: none;
    cursor: pointer;
    color: var(--color-crimson);
    font-size: var(--font-size-lg);
    font-family: var(--font-serif);
    transition: all 0.3s ease-in-out;
  }
  button:hover {
    color: var(--color-bright-crimson);
  }
`;

const FullPageMenu = styled(motion.div)`
  position: absolute;
  z-index: 20;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: var(--color-light-cream);
  align-items: start;
  transition: all 0.3s ease-in-out;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-items: center;
  padding: 4px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  svg {
    transition: all 0.3s ease-in-out;
  }
  svg:hover {
    fill: var(--color-gray-900);
  }
`;
