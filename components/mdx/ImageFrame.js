import styled from "styled-components";

export default function ImageFrame({ src, alt, width, showalt }) {
    return (
        <div>
            <StyledImageFrame src={src} alt={alt} width={width || "100%"} />
            {showalt && <span>{alt}</span>}
        </div>
    );
}

const StyledImageFrame = styled.img`
    width: 100%;
    grid-column: 1 / 4 !important;
    max-width: ${(props) => props.width || "1000px"};
    margin: 0 auto;
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-md);
`;
