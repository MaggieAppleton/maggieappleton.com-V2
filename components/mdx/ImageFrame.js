import styled from "styled-components";

export default function ImageFrame({ src, alt, width, showalt }) {
    return (
        <Container>
            <StyledImageFrame src={src} alt={alt} width={width || "100%"} />
            {showalt && <figcaption>{alt}</figcaption>}
        </Container>
    );
}

const Container = styled.figure`
    max-width: 100%;
    grid-column: 1 / 4 !important;
    margin: var(--space-24) auto var(--space-48);
    text-align: center;
    figcaption {
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
        color: var(--color-gray-600);
    }
`;

const StyledImageFrame = styled.img`
    width: ${(props) => props.width || "1100px"};
    border-radius: var(--border-radius-base);
    border: 1px solid var(--color-tinted-cream);
    box-shadow: var(--box-shadow-lg);
    margin-bottom: var(--space-24);
`;
