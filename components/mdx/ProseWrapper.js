import styled from "styled-components";

const ProseWrapper = styled.article`
    display: grid;
    grid-template-columns:
        1fr
        min(72ch, 100%)
        1fr;
    & > * {
        grid-column: 2;
    }
    font-size: var(--font-size-base);
    p {
        line-height: var(--leading-looser);
        margin-bottom: var(--space-32);
    }
`;

export default ProseWrapper;
