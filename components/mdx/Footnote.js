import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

// TODO
// - Make the Footnote appear on hover.
// - Add smooth hover animations

export default function Footnote({ children, idName }) {
    return (
        <FootnoteContainer>
            <label
                for={idName}
                className="margin-toggle footnote-number"
            ></label>
            <input type="checkbox" id={idName} className="margin-toggle" />
            <span className="footnote">{children}</span>
        </FootnoteContainer>
    );
}

const FootnoteContainer = styled.aside`
    position: relative;
    transition: all 0.3s ease-in-out;
    .footnote {
        width: 280px;
        max-width: 100%;
        line-height: var(--leading-base);
        font-size: var(--font-size-sm);
        position: absolute;
        top: 0;
        left: 0;
        border-left: 2px solid var(--color-gray-300);
        padding-left: var(--space-16);
        background: white;
        transition: all 0.3s ease-in-out;
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
        font-size: 0.9em;
        top: -0.5rem;
        left: 0em;
        padding-right: 3px;
        color: var(--color-gray-600);
    }

    .footnote:before {
        content: counter(footnote-counter) " ";
        font-size: 0.9em;
        top: -0.3rem;
        padding-right: 8px;
    }

    label.footnote-number {
        display: inline-block;
    }

    label.margin-toggle:not(.footnote-number) {
        display: none;
    }

    input.margin-toggle {
        display: none;
    }

    label.margin-toggle:not(.footnote-number) {
        display: inline;
    }

    .footnote {
        display: none;
    }

    .margin-toggle:hover + .footnote,
    .margin-toggle:hover + .marginnote {
        display: inline-block;
        width: 280px;
        vertical-align: baseline;
        position: absolute;
        top: 0;
        left: 0;
    }
`;
