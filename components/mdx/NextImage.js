import styled from "styled-components";
import Image from "next/image";

export default function NextImage({
    width, height, src, alt, margin, props, showalt, sourceUrl, sourceTitle}) {
    return (
        <Container width={width} margin={margin} 
        {...props}>
            <StyledImage
                width={width}
                height={height}
                alt={alt}
                src={src}
            />
            {showalt ? (
                sourceUrl ? (
                <figcaption>
                    {alt} – Source: <a href={sourceUrl}>{sourceTitle}</a>
                </figcaption>
                ) : (
                <figcaption>{alt}</figcaption>
                )
            ) : null}
    </Container>
            
    )
}

const Container = styled.div`
    margin: ${(props) => props.margin || "1rem 0 2.5rem"};
    width: ${(props) => props.width};
    max-width: 100%;
    text-align: center;
    figcaption {
        font-family: var(--font-sans);
        max-width: 100%;
        font-size: var(--font-size-sm);
        color: var(--color-gray-600);
        line-height: 1.5;
        width: ${(props) => props.width || "100%"};
        margin-top: var(--space-xs);
      }
`

const StyledImage = styled(Image)`
  border-radius: var(--border-radius-sm);
  margin: 1rem auto 2rem;
  max-width: 100%;
`;