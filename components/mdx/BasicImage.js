import styled from "styled-components";

export default function BasicImage({ src, alt, width, showalt, imageWidth }) {
    return (
        <Container>
            <StyledBasicImage
                imageWidth={imageWidth}
                src={src}
                alt={alt}
                width={width || "100%"}
            />
            {showalt && <figcaption>{alt}</figcaption>}
        </Container>
    );
}

const Container = styled.figure`
    max-width: 100%;
    grid-column: 1 / 4 !important;
    margin: var(--space-48) auto var(--space-48);
    text-align: center;
    figcaption {
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
        color: var(--color-gray-600);
    }
`;

const StyledBasicImage = styled.img`
    width: ${(props) => props.imageWidth || "1100px"};
    margin-bottom: var(--space-16);
`;
