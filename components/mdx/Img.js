import styled from "styled-components";

const Img = styled.img`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.width || "1000px"};
    margin: var(--space-s) auto var(--space-l);
`;

export default Img;
