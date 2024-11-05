import styled from "styled-components";

const Container = styled.span`
	display: inline-block;
	line-height: 1.5;
`;

const StyledSub = styled.sub`
	font-family: var(--font-sans);
	font-weight: 600;
	font-size: var(--font-size-xs);
	color: var(--color-sea-blue);
	margin-left: 4px;
	margin-right: 4px;
`;

export default function YearsAgo({ children }) {
	// Extract the year from the string, removing any parentheses
	const yearMatch = children.toString().match(/\d{4}/);
	const year = yearMatch ? parseInt(yearMatch[0]) : null;

	if (!year) return children;
	const currentYear = new Date().getFullYear();
	const yearsAgo = currentYear - year;

	// If the original text had parentheses, preserve them
	const hasParens = children.toString().startsWith("(");

	return (
		<Container title={`${year} was ${yearsAgo} years ago`}>
			{hasParens ? (
				<>
					({year})<StyledSub>{yearsAgo}ya</StyledSub>
				</>
			) : (
				<>
					{year}
					<StyledSub>{yearsAgo}ya</StyledSub>
				</>
			)}
		</Container>
	);
}
