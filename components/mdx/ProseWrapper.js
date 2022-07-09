import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

const ProseWrapper = styled.article`
  display: grid;
  grid-auto-flow: columns;
  grid-template-columns:
    1fr
    min(72ch, 100%)
    1fr;
  & > * {
    grid-column: 2;
  }
  counter-reset: footnote-counter;
  font-size: var(--font-size-base);
  p {
    font-size: var(--font-size-base);
    line-height: var(--leading-looser);
    margin-bottom: var(--space-m);
    @media (max-width: 767px) {
      line-height: var(--leading-loose);
    }
  }
  p.subtext {
    font-size: calc(var(--font-size-sm) * 1.1);
    line-height: var(--leading-loose);
  }
  h1 {
    font-size: var(--font-size-2xl);
    margin: var(--space-2xl) 0 var(--space-m);
    @media ${breakpoints.mediaSM} {
      margin: var(--space-xl) 0 var(--space-m);
    }
  }
  h2 {
    font-size: var(--font-size-xl);
    margin: var(--space-xl) 0 var(--space-m);
    line-height: var(--leading-base);
    @media ${breakpoints.mediaSM} {
      margin: var(--space-l) 0 var(--space-s);
    }
  }
  h2.micro {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    color: var(--color-bright-crimson);
    margin: 0 0 var(--space-s);
    line-height: var(--leading-base);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.04rem;
  }
  h3 {
    font-size: calc(var(--font-size-lg) / 1.1);
    font-weight: 300;
    line-height: var(--leading-base);
    margin: var(--space-m) 0 var(--space-s);
  }
  h4 {
    font-size: var(--font-size-base);
    font-weight: 700;
    margin: var(--space-s) 0 var(--space-xs);
  }

  // Ordered and unordered list styling
  ul,
  ol {
    padding: 0;
    margin-top: 0;
  }
  ul {
    list-style: none;
  }
  ul > li {
    margin-bottom: var(--space-xs);
    line-height: var(--leading-looser);
    margin-left: 2.5rem;
  }
  ul > li::before {
    content: "";
    display: inline-block;
    width: 24px;
    clear: both;
    height: 24px;
    margin-right: -1.5rem;
    background-image: url("/images/leaf-icon.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    top: 4px;
    right: 2.5rem;
  }
  ol > li {
    margin-bottom: var(--space-xs);
    line-height: var(--leading-looser);
    margin-left: 2.5rem;
  }
  hr {
    margin: var(--space-2xl) auto;
    height: 3px;
    background-color: var(--color-salmon);
    border: none;
    width: 20%;
    @media ${breakpoints.mediaSM} {
      margin: var(--space-l) auto;
    }
  }
  blockquote {
    text-align: center;
    & > p {
      text-align: center;
      max-width: 30ch;
      margin: var(--space-m) auto;
      font-size: var(--font-size-lg);
      line-height: var(--leading-base);
      display: inline-block;
    }
    & ::before,
    & ::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 3rem;
      border-top: 2px solid rgba(0, 0, 0, 0.1);
    }
    padding: var(--space-m) 0rem var(--space-xl);
  }
`;

export default ProseWrapper;
