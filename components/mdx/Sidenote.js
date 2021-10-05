import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

// TODO
// - Make the sidenote appear on hover.
// - Add smooth hover animations

export default function Sidenote({ children, idName }) {
    return (
        <SidenoteContainer>
            <label
                for={idName}
                className="margin-toggle sidenote-number"
            ></label>
            <input type="checkbox" id={idName} className="margin-toggle" />
            <span className="sidenote">{children}</span>
        </SidenoteContainer>
    );
}

const SidenoteContainer = styled.aside`
    position: relative;
    transition: all 0.3s ease-in-out;
    .sidenote {
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

    .sidenote-number {
        counter-increment: sidenote-counter;
    }

    .sidenote-number:after,
    .sidenote:before {
        position: relative;
        vertical-align: baseline;
    }

    .sidenote-number:after {
        content: counter(sidenote-counter);
        font-size: 0.9em;
        top: -0.5rem;
        left: 0em;
        padding-right: 3px;
        color: var(--color-gray-600);
    }

    .sidenote:before {
        content: counter(sidenote-counter) " ";
        font-size: 0.9em;
        top: -0.3rem;
        padding-right: 8px;
    }

    label.sidenote-number {
        display: inline-block;
    }

    label.margin-toggle:not(.sidenote-number) {
        display: none;
    }

    input.margin-toggle {
        display: none;
    }

    label.margin-toggle:not(.sidenote-number) {
        display: inline;
    }

    .sidenote {
        display: none;
    }

    .margin-toggle:hover + .sidenote,
    .margin-toggle:hover + .marginnote {
        display: inline-block;
        width: 280px;
        vertical-align: baseline;
        position: absolute;
        top: 0;
        left: 0;
    }
`;
