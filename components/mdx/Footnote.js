import styled, { css } from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

// TODO
// - Make the Footnote appear on hover.
// - Add smooth hover animations

const Footnote = ({ idName, children, isClosed }) => {
  return (
    <FootnoteContainer isClosed={isClosed}>
      <label htmlFor={idName} className="margin-toggle footnote-number"></label>
      <input type="checkbox" id={idName} className="margin-toggle" />
      <span className="footnote">{children}</span>
    </FootnoteContainer>
  );
};

const FootnoteContainer = styled.aside`
  display: inline;
  .footnote {
    float: right;
    height: 1rem;
    overflow: visible;
    clear: right;
    margin-right: -38%;
    width: 33%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: var(--font-size-sm);
    opacity: 90%;
    line-height: var(--leading-base);
    vertical-align: baseline;
    position: relative;
    border-left: 1px solid var(--color-gray-300);
    padding-left: 1em;
    a::before,
    a:hover::before,
    a {
      background: none;
      transform: none;
    }
    a span {
      font-size: var(--font-size-sm);
    }
  }
  label {
    cursor: pointer;
  }
  .footnote-number {
    counter-increment: footnote-counter;
  }
  .footnote-number:after,
  .footnote:before {
    position: relative;
    vertical-align: baseline;
  }
  .footnote-number:after {
    content: counter(footnote-counter);
    padding: 0.15rem;
    font-family: var(--font-sans);
    font-size: 1rem;
    color: var(--color-sea-blue);
    font-weight: 600;
    line-height: 0;
    position: relative;
    top: -6px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: transparent;
    transition: all 0.25s ease-in-out;
  }
  .footnote:before {
    content: counter(footnote-counter);
    font-size: 1rem;
    top: -0.1rem;
    font-weight: 600;
    padding-right: var(--space-2xs);
    color: var(--color-sea-blue);
    font-family: var(--font-sans);
  }
  blockquote .footnote {
    margin-right: -82%;
    min-width: 59%;
    text-align: left;
  }
  label.footnote-number {
    display: inline;
    padding-right: var(--space-3xs);
  }
  label.margin-toggle:not(.footnote-number) {
    display: ${({ isClosed }) => (isClosed ? "inline" : "none")};
  }
  input.margin-toggle {
    display: none;
  }
  .footnote,
  .marginnote {
    display: ${({ isClosed }) => (isClosed ? "none" : "unset")};
  }
  .margin-toggle:checked + .footnote {
    display: ${({ isClosed }) => (isClosed ? "block" : "unset")};
    float: ${({ isClosed }) => (isClosed ? "left" : "unset")};
    left: ${({ isClosed }) => (isClosed ? "0" : "unset")};
    clear: ${({ isClosed }) => (isClosed ? "both" : "unset")};
    width: ${({ isClosed }) => (isClosed ? "99%" : "unset")};
    margin: ${({ isClosed }) => (isClosed ? "1rem 0" : "unset")};
    height: ${({ isClosed }) => (isClosed ? "auto" : "unset")};
    position: ${({ isClosed }) => (isClosed ? "relative" : "unset")};
  }

  @media (max-width: 1420px) {
    label.margin-toggle:not(.footnote-number) {
      display: inline;
    }
    .footnote,
    .marginnote {
      display: none;
    }
    .margin-toggle:checked + .footnote {
      display: block;
      float: left;
      left: 0;
      clear: both;
      width: 99%;
      margin: 1rem;
      height: auto;
      position: relative;
    }
  }
`;

export default Footnote;
