import styled from "styled-components";

const BasicImage = styled.img`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.width || "1000px"};
    margin: var(--space-48) auto;
`;

export default BasicImage;
