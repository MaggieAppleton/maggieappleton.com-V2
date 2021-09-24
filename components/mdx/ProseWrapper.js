import styled from "styled-components";

const ProseWrapper = styled.article`
    display: grid;
    grid-template-columns:
        1fr
        min(65ch, 100%)
        1fr;
    & > * {
        grid-column: 2;
    }
    font-size: var(--font-size-base);
`;

export default ProseWrapper;
