import styled from "styled-components";

const FullWidthImage = styled.img`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.width || "1400px"};
    margin: var(--space-24) auto var(--space-48);
`;

export default FullWidthImage;
