import styled from "styled-components";
import { motion } from "framer-motion";

export default function TitleWithCount({ posts, children }) {
    return (
        <StyledContainer>
            <span>{getPostCount(posts)}</span>
            <h1>{children}</h1>
        </StyledContainer>
    );
}

const StyledContainer = styled(motion.div)`
    margin-top: -2.8rem;
    span {
        position: relative;
        top: 3.6rem;
        left: -2.8rem;
        font-size: var(--font-size-md);
        color: var(--color-sea-blue);
        font-weight: 400;
    }
    h1 {
        font-size: var(--font-size-3xl);
        font-family: var(--font-serif);
        line-height: var(--leading-tighter);
        font-weight: normal;
        margin-bottom: var(--space-s);
    }
`;

// For an array of posts, return the number of posts
const getPostCount = (posts) => {
    return posts.length;
};
