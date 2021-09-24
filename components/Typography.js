import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const H1 = styled.h1`
    font-size: var(--font-size-3xl);
    font-family: var(--font-serif);
    line-height: var(--leading-tight);
    font-weight: ${(props) => props.fontWeight || "normal"};
    @media ${breakpoints.mediaSM} {
        font-size: var(--font-size-2xl);
    }
`;

export const H2 = styled.h2`
    font-size: var(--font-size-xl);
    font-family: var(--font-serif);
    color: var(--colour-gray-800);
    font-weight: light;
    line-height: var(--leading-tight);
    @media ${breakpoints.mediaSM} {
        font-size: var(--font-size-lg);
    }
`;

export const H3 = styled.h3`
    font-size: var(--font-size-lg);
    font-family: var(--font-sans);
    color: var(--colour-gray-800);
    line-height: var(--leading-tight);
    @media ${breakpoints.mediaSM} {
        font-size: var(--font-size-md);
    }
`;
