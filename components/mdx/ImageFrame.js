import styled from "styled-components";

const ImageFrame = styled.img`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.width || "1000px"};
    margin: 0 auto;
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-md);
`;

export default ImageFrame;
