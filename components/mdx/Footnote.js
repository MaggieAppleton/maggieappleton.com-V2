import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

// TODO
// - Make the Footnote appear on hover.
// - Add smooth hover animations

const Footnote = ({ idName, children, isClosed }) => {
  return (
    <FootnoteContainer>
      <label htmlFor={idName} className="margin-toggle footnote-number"></label>
      <input type="checkbox" id={idName} className="margin-toggle" />
      <span className="footnote">{children}</span>
    </FootnoteContainer>
  );
};

// todo: clean this up
const FootnoteContainer = styled.aside`
  display: inline;
  .footnote {
    float: right;
    margin-right: -37%;
    width: 36%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: var(--font-size-sm);
    opacity: 90%;
    line-height: var(--leading-base);
    vertical-align: baseline;
    position: relative;
    border-left: 1px solid var(--color-gray-300);
    padding-left: 1em;
    overflow: auto;
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
    font-size: 0.8em;
    top: -0.5rem;
    left: 0.1em;
    padding-right: 0px;
  }
  .footnote:before {
    content: counter(footnote-counter);
    font-size: 0.9em;
    top: -0.3rem;
    padding-right: var(--space-3xs);
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
    display: none;
  }
  input.margin-toggle {
    display: none;
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
      width: 95%;
      margin: 1rem 0;
      position: relative;
    }
  }
`;

export default Footnote;
