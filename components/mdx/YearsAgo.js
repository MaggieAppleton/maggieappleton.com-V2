import styled from "styled-components";

const StyledSup = styled.sub`
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

	if (!year) return children; // Return original content if no valid year found

	const currentYear = new Date().getFullYear();
	const yearsAgo = currentYear - year;

	// If the original text had parentheses, preserve them
	const hasParens = children.toString().startsWith("(");

	return (
		<span title={`${year} was ${yearsAgo} years ago`}>
			{hasParens ? (
				<>
					({year})<StyledSup>{yearsAgo}ya</StyledSup>
				</>
			) : (
				<>
					{year}
					<StyledSup>{yearsAgo}ya</StyledSup>
				</>
			)}
		</span>
	);
}
