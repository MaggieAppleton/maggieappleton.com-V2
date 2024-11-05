import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import { motion } from "framer-motion";

export const Title1 = styled(motion.h1)`
  font-size: var(--font-size-3xl);
  font-family: var(--font-serif);
  line-height: var(--leading-tighter);
  font-weight: ${(props) => props.fontWeight || "normal"};
  margin-bottom: var(--space-s);
  max-width: 1200px;
  @media ${breakpoints.mediaSM} {
    font-size: var(--font-size-2xl);
    max-width: 100%;
    margin-bottom: var(--space-xs);
  }
`;

export const Title2 = styled(motion.h2)`
  font-size: calc(var(--font-size-xl) / 1.2);
  font-family: var(--font-serif);
  color: var(--color-gray-800);
  font-weight: 100;
  line-height: var(--leading-tight);
  margin: var(--space-xs) 0 var(--space-2xs);
  transition: all 0.3s ease-in-out;
  @media ${breakpoints.mediaSM} {
    font-size: var(--font-size-lg);
  }
`;

export const SmallTitle2 = styled(motion.h2)`
  font-family: var(--font-sans);
  font-size: var(--font-size-md);
  color: var(--color-gray-800);
  font-weight: 300;
  line-height: var(--leading-loose);
`;

export const Title3 = styled(motion.h3)`
  font-size: var(--font-size-lg);
  font-family: var(--font-sans);
  color: var(--color-gray-800);
  line-height: var(--leading-tight);
`;

export const Title4 = styled(motion.h4)`
  font-size: var(--font-size-md);
  font-family: var(--font-sans);
  color: var(--color-gray-800);
  font-weight: 300;
  line-height: var(--leading-tight);
`;

export const SmallCaps = styled.p`
  font-size: var(--font-size-xs);
  font-family: var(--font-sans);
  font-weight: 700;
  color: var(--color-black);
  text-transform: uppercase;
  letter-spacing: 0.06rem;
`;

export const Subtext = styled.aside`
  font-size: var(--font-size-sm);
  font-family: var(--font-sans);
  text-align: center;
  color: var(--color-gray-600);
  margin-bottom: var(--space-m);
`;

export const Highlight = styled.span`
  color: var(--color-crimson);
  background: var(--color-light-salmon);
  padding: 0 8px 4px;
  border-radius: 4px;
`;
