import styled from "styled-components";

const Img = styled.img`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.width || "1000px"};
    margin: var(--space-24) auto var(--space-48);
`;

export default Img;
