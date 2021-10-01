import styled from "styled-components";

export default function BookCard({
    small,
    cover,
    title,
    subtitle,
    author,
    link,
    key,
}) {
    return (
        <a
            key={key}
            style={{ cursor: "pointer" }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <StyledBookCard small={small}>
                <img src={cover} alt={title} />
                <div>
                    <p>
                        {title}
                        {!small && subtitle && `: ${subtitle}`}
                    </p>
                    <span className="metadata">{author}</span>
                </div>
            </StyledBookCard>
        </a>
    );
}

const StyledBookCard = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    padding: ${(props) =>
        props.small
            ? "0 0 var(--space-16) 0"
            : "0 var(--space-4) var(--space-48) var(--space-4)"};
    img {
        transition: all 0.4s ease-in-out;
        border-radius: var(--border-radius-base);
        box-shadow: var(--box-shadow-sm);
        border: 1px solid var(--color-tinted-cream);
    }
    div {
        transition: all 0.4s ease-in-out;
    }
    div p {
        transition: all 0.4s ease-in-out;
        margin: var(--space-12) 0 var(--space-8) 0;
        line-height: var(--leading-base);
        color: var(--color-black);
    }
    &:hover {
        img {
            box-shadow: var(--box-shadow-lg);
            transform: scale3d(1.02, 1.02, 1.02);
        }
        p {
            color: var(--color-crimson);
        }
        div {
            transform: translateY(4px);
        }
    }
`;
