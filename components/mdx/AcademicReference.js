import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Tooltip from "../Tooltip";
import styled from "styled-components";

export default function AcademicReference({
	authors,
	year,
	abstract,
	title,
	href,
	children,
}) {
	return (
		<Tooltip
			maxWidth={400}
			content={
				<div>
					<TitleLink href={href}>
						<span>{title}</span>
						<ArrowTopRightOnSquareIcon
							width="16"
							height="16"
							style={{ position: "relative", top: "3px" }}
						/>
					</TitleLink>
					<span>
						{authors}, {year}
					</span>
					{abstract && (
						<AbstractContainer>
							<FullAbstract>{abstract}</FullAbstract>
						</AbstractContainer>
					)}
				</div>
			}
		>
			<StyledLink href={href}>
				<AcademicCapIcon width="20" height="20" />
				<span>{children}</span>
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

const TitleLink = styled.a`
	color: var(--color-dark-crimson);
	transition: color 0.2s ease-in-out;
	font-family: var(--font-serif);
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

const AbstractContainer = styled.div`
	position: relative;
`;

const FullAbstract = styled.div`
	max-height: 160px;
	overflow-y: auto;
	margin-top: 8px;
	padding-right: 8px;

	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-track {
		background: var(--color-gray-100);
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background: var(--color-gray-300);
		border-radius: 3px;
	}
`;
