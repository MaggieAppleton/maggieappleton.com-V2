import { useState, useRef } from "react";
import useOnClickOutside from "../../utils/onclickOutside";
import styled from "styled-components";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import UnderlineHoverLink from "../links/UnderlineHoverLink";
import { Popover } from "@headlessui/react";

function GardenPopoverLinks() {
  return (
    <Popover style={{ position: "relative" }}>
      <Link href="/garden">
        <HoverLink>
          <span>The Garden</span>
        </HoverLink>
      </Link>
      <StyledPopoverButton>
        <StyledChevronDownIcon width="24" height="24" />
      </StyledPopoverButton>

      <Popover.Panel>
        <Dropdown
          initial={{
            opacity: 0,
            rotateX: "90deg",
            transformOrigin: "top",
          }}
          animate={{ opacity: 1, rotateX: "0deg" }}
          exit={{ opacity: 0, rotateX: "90deg" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ position: "absolute", zIndex: "10" }}
          key="dropdown"
        >
          <Link href="/essays">
            <DropdownLink>Essays</DropdownLink>
          </Link>
          <Link href="/notes">
            <DropdownLink>Notes</DropdownLink>
          </Link>
          <Link href="/patterns">
            <DropdownLink>Patterns</DropdownLink>
          </Link>
          <Link href="/library">
            <DropdownLink>Library</DropdownLink>
          </Link>
          <Link href="/antilibrary">
            <DropdownLink>Antilibrary</DropdownLink>
          </Link>
        </Dropdown>
      </Popover.Panel>
    </Popover>
  );
}

export default function MainNavLinks() {
  return (
    <Main>
      <AnimatePresence>
        <GardenPopoverLinks />
      </AnimatePresence>
      <div className="outside-dropdown">
        <UnderlineHoverLink href="/now">Now</UnderlineHoverLink>
        <UnderlineHoverLink href="/about">About</UnderlineHoverLink>
      </div>
    </Main>
  );
}

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  vertical-align: middle;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    transform 0.8s ease-in-out;
  color: var(--color-gray-600);
  margin-left: var(--space-3xs);
  position: relative;
  top: 0;
`;

const StyledPopoverButton = styled(Popover.Button)`
  padding: 0;
  &:hover {
    ${StyledChevronDownIcon} {
      color: var(--color-bright-crimson);
      transform: rotateY(180deg);
      cursor: pointer;
      background-color: var(--color-gray-100);
      border-radius: 4px;
    }
  }
`;

const DropdownLink = styled.span`
  margin: 0 !important;
  color: var(--color-gray-800);
  text-decoration: none;
  font-size: var(--font-size-xs);
  font-family: var(--font-sans);
  border-bottom: 1px solid var(--color-tinted-cream);
  border-left: 2px solid var(--color-cream);
  padding: var(--space-2xs) var(--space-l) var(--space-2xs) var(--space-xs);
  transition: all 0.3s ease-in-out;
  margin-left: var(--space-s);
  text-decoration: none;
  font-size: var(--font-size-xs);
  font-family: var(--font-sans);
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  span {
    color: var(--color-gray-800);
  }
  :hover {
    span {
      color: var(--color-crimson);
    }
  }
  &:hover {
    background: var(--color-light-cream);
    color: var(--color-crimson);
  }
`;

const Dropdown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 0.6rem;
  background: var(--color-cream);
  margin-left: 0.4rem;
  border: 1px solid var(--color-tinted-cream);
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-lg);
  z-index: 1;
`;

const HoverLink = styled.span`
  margin-left: var(--space-s);
  text-decoration: none;
  font-size: var(--font-size-xs);
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
  cursor: pointer;
  position: relative;
  top: 1px;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  padding-bottom: 0.25rem;
  &:focus {
    outline: 2px solid darkblue;
    border-radius: 2px;
  }
  &::before {
    content: "";
    transform-origin: 50% 100%;
    background: var(--color-sea-blue);
    transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    position: absolute;
    width: 100%;
    height: 1px;
    top: 95%;
    left: 0;
    pointer-events: none;
    clip-path: polygon(
      0% 0%,
      0% 100%,
      0 100%,
      0 0,
      100% 0,
      100% 100%,
      0 100%,
      0 100%,
      100% 100%,
      100% 0%
    );
  }
  &:hover::before {
    transform: translate3d(0, 2px, 0) scale3d(1, 2, 1);
    clip-path: polygon(
      0% 0%,
      0% 100%,
      100% 100%,
      50% 0,
      50% 0,
      50% 100%,
      50% 100%,
      0 100%,
      100% 100%,
      100% 0%
    );
  }
`;

const Main = styled.div`
  display: flex;
  flex-shrink: 0;
  div.outside-dropdown div {
    margin-left: var(--space-s);
    text-decoration: none;
    font-size: var(--font-size-xs);
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
  @media screen and (max-width: 550px) {
    display: none;
  } ;
`;
