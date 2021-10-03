import styled from "styled-components";

const FullWidthBackground = styled.section`
    width: 100%;
    max-width: 100vw;
    z-index: -1;
    grid-column: 1 / 4 !important;
    margin: var(--space-24) auto var(--space-48);
    background: ${(props) => props.background || "inherit"};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default FullWidthBackground;
