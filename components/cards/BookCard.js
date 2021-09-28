import styled from "styled-components";

export default function BookCard({ cover, title, author, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <StyledBookCard>
                <img src={cover} alt={title} />
                <p>{title}</p>
                <span className="metadata">{author}</span>
            </StyledBookCard>
        </a>
    );
}

const StyledBookCard = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    img {
        border-radius: var(--border-radius-sm);
    }
    p {
        transition: all 0.4s ease-in-out;
        margin: var(--space-8) 0 var(--space-4);
        line-height: var(--leading-snug);
        color: var(--color-black);
    }
    &:hover {
        transform: scale3d(1.02, 1.02, 1.02);
        p {
            color: var(--color-dark-crimson);
        }
    }
`;
