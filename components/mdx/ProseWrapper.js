import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

const ProseWrapper = styled.article`
    display: grid;
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
        margin-bottom: var(--space-32);
    }
    h1 {
        font-size: var(--font-size-2xl);
        margin: var(--space-80) 0 var(--space-32);
        @media ${breakpoints.mediaSM} {
            margin: var(--space-64) 0 var(--space-32);
        }
    }
    h2 {
        font-size: var(--font-size-xl);
        margin: var(--space-64) 0 var(--space-32);
        line-height: var(--leading-base);
        @media ${breakpoints.mediaSM} {
            margin: var(--space-48) 0 var(--space-24);
        }
    }
    h3 {
        font-size: var(--font-size-lg);
        font-weight: 300;
        margin: var(--space-32) 0 var(--space-24);
    }
    h4 {
        font-size: var(--font-size-md);
        font-weight: 400;
        margin: var(--space-24) 0 var(--space-16);
    }
    ul {
        padding: 0;
        list-style: none;
        margin-top: 0;
    }
    li {
        margin-bottom: var(--space-16);
        line-height: var(--leading-looser);
        margin-left: 2.5rem;
    }
    li::before {
        content: "";
        display: inline-block;
        width: 25px;
        clear: both;
        height: 20px;
        margin-right: -1.5rem;
        background-image: url(http://placehold.it/20x20);
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
        top: 0;
        right: 2.5rem;
    }
    hr {
        margin: var(--space-128) auto;
        height: 0;
        color: transparent;
        border: 1px solid var(--color-salmon);
        border-radius: 100%;
        width: 40%;
        @media ${breakpoints.mediaSM} {
            margin: var(--space-48) 0;
        }
    }
`;

export default ProseWrapper;
