import styled from "styled-components";
import { motion } from "framer-motion";

export default function TitleWithCount({ posts, children }) {
	const count = getPostCount(posts);
	const digits = count.toString().length;

	return (
		<StyledContainer $digits={digits}>
			<span>{getPostCount(posts)}</span>
			<h1>{children}</h1>
		</StyledContainer>
	);
}

const StyledContainer = styled(motion.div)`
	margin-top: 0;
	span {
		position: relative;
		top: 3.4rem;
		left: calc(-1.2rem - ${(props) => props.$digits}ch);
		font-size: var(--font-size-md);
		color: var(--color-sea-blue);
		font-weight: 400;
		@media (max-width: 1440px) {
			top: 0;
			left: 0;
			display: block;
		}
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
