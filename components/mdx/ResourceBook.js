import styled from "styled-components";
import Image from "next/image";

export default function ResourceBook({ url, title, author, image, children }) {
    return (
        <StyledBookCard>
            <div style={{ height: "290px", width: "200px", flexShrink: 0 }}>
                <Image
                    width={200}
                    height={290}
                    alt={title}
                    layout="responsive"
                    src={image}
                />
            </div>
            <Metadata>
                <a href={url}>
                    <h3>{title}</h3>
                </a>
                <span>{author}</span>
                {children && (
                    <>
                        <svg width="40" height="3">
                            <rect
                                width="40"
                                height="3"
                                fill="var(--color-gray-300)"
                            />
                        </svg>
                        <p>{children}</p>
                    </>
                )}
            </Metadata>
        </StyledBookCard>
    );
}

const StyledBookCard = styled.div`
    margin: var(--space-l) auto var(--space-l);
    border-radius: var(--border-radius-lg);
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: var(--space-m);
    height: content-min;
    img {
        border-radius: var(--border-radius-sm);
    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-m);
        height: content-min;
        text-align: center;
    }
`;

const Metadata = styled.div`
    display: flex;
    flex-direction: column;
    h3,
    p,
    span {
        margin: 0;
        font-family: var(--font-body);
    }
    h3 {
        font-family: var(--font-body);
        font-size: var(--font-size-md);
        margin-bottom: var(--space-3xs);
        max-width: 26ch;
    }
    p {
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
        line-height: var(--leading-loose);
        max-width: 45ch;
        color: var(--color-gray-900);
    }
    svg {
        margin: var(--space-s) 0;
        @media (max-width: 768px) {
            margin: var(--space-s) auto;
        }
    }
`;
