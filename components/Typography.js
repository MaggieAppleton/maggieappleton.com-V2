import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const H1 = styled.h1`
    font-size: var(--font-size-3xl);
    font-family: var(--font-serif);
    line-height: var(--leading-tight);
    font-weight: ${(props) => props.fontWeight || "normal"};
    @media ${breakpoints.mediaMD} {
        font-size: var(--font-size-2xl);
    }
    @media ${breakpoints.mediaSM} {
        font-size: var(--font-size-xl);
    }
`;

export const H2 = styled.h2`
    font-size: var(--font-size-2xl);
    font-family: var(--font-serif);
    color: var(--color-gray-800);
    font-weight: 100;
    line-height: var(--leading-tight);
    margin-bottom: var(--space-12);
    @media ${breakpoints.mediaSM} {
        font-size: var(--font-size-xl);
    }
`;

export const H3 = styled.h3`
    font-size: var(--font-size-lg);
    font-family: var(--font-sans);
    color: var(--color-gray-800);
    line-height: var(--leading-tight);
    @media ${breakpoints.mediaSM} {
        font-size: var(--font-size-md);
    }
`;

export const SmallCaps = styled.p`
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
    font-weight: 700;
    color: var(--color-black);
    text-transform: uppercase;
    letter-spacing: 0.06rem;
`;
