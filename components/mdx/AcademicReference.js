import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Tooltip from "../Tooltip";
import styled from "styled-components";

export default function AcademicReference({ author, year, title, href }) {
	return (
		<Tooltip
			maxWidth={400}
			content={
				<StyledExternalUrl href={href}>
					<span>{title}</span>
					<ArrowTopRightOnSquareIcon
						width="16"
						height="16"
						style={{ position: "relative", top: "3px" }}
					/>
				</StyledExternalUrl>
			}
		>
			<StyledLink href={href}>
				<AcademicCapIcon width="20" height="20" />
				<span>
					{author} {year}
				</span>
			</StyledLink>
		</Tooltip>
	);
}

const StyledLink = styled.a`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	grid-gap: 6px;
	font-inherit: inherit;
	line-height: inherit;
	margin: 0 4px;
	position: relative;
	white-space: nowrap;
	outline: none;
	word-break: break-all;
	color: var(--color-bright-crimson);
	&:focus {
		outline: 2px solid darkblue;
		border-radius: 2px;
	}
	span {
		display: inline-block;
		white-space: normal;
		transition: all 0.5s cubic-bezier(0.2, 1, 0.8, 1);
		word-break: break-all;
		@media (min-width: 550px) {
			text-decoration: none;
		}
	}
	&:hover span {
		transform: translate3d(0, -1px, 0);
		color: var(--color-bright-crimson);
	}
	svg {
		position: relative;
		top: 2px;
	}
`;

const StyledExternalUrl = styled.a`
	color: var(--color-gray-600);
	transition: color 0.2s ease-in-out;
	display: inline-flex;
	grid-gap: 6px;
	max-width: 420px;
	svg {
		margin: 0 !important;
		flex-shrink: 0;
	}
	&:hover {
		color: var(--color-bright-crimson);
	}
`;
