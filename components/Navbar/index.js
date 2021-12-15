import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../visuals/Logo";
import MainNavLinks from "./MainNavLinks";
import MobileMenu from "./MobileMenu";
// import SearchBarAndResults from "../search/SearchBarAndResults";

export default function Navbar() {
  return (
    <StyledNavbar
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <Link href="/">
        <a aria-label="home" href="/">
          <span className="visually-hidden">Home</span>
          <Logo />
        </a>
      </Link>
      <RightHandSide>
        {/* <SearchBarAndResults /> */}
        <MainNavLinks />
      </RightHandSide>
      <MobileMenu />
    </StyledNavbar>
  );
}

const RightHandSide = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavbar = styled(motion.nav)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--space-s) var(--space-m) var(--space-s) 1.3rem;
`;
