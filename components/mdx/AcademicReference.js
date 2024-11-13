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
			maxWidth={440}
			content={
				<TooltipContent>
					<TitleLink href={href}>
						<span>{title}</span>
						<ArrowTopRightOnSquareIcon
							width="16"
							height="16"
							style={{ position: "relative", top: "8px", right: "8px" }}
						/>
					</TitleLink>
					<AuthorYear>
						{authors}
						<Dot>•</Dot>
						{year}
					</AuthorYear>
					{abstract && (
						<AbstractContainer>
							<span>Abstract</span>
							<FullAbstract>{abstract}</FullAbstract>
						</AbstractContainer>
					)}
				</TooltipContent>
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
	font-family: var(--font-body);
	font-size: calc(var(--font-size-base) / 1.1);
	line-height: var(--leading-snug);
	font-weight: 400;
	display: inline-flex;
	grid-gap: 12px;
	margin-bottom: var(--space-2xs);
	svg {
		margin: 0 !important;
		flex-shrink: 0;
	}
	&:hover {
		color: var(--color-bright-crimson);
	}
`;

const AuthorYear = styled.div`
	color: var(--color-gray-600);
`;

const Dot = styled.span`
	margin: 0 6px;
	color: var(--color-gray-400);
	font-size: calc(var(--font-size-xs) / 1.1);
`;

const AbstractContainer = styled.div`
	margin-top: var(--space-s);
	span {
		color: var(--color-gray-600);
		text-transform: uppercase;
		color: var(--color-bright-crimson);
		font-size: calc(var(--font-size-xs) / 1.1);
		letter-spacing: 0.04rem;
		font-weight: 500;
	}
`;

const FullAbstract = styled.div`
	max-height: 200px;
	overflow-y: auto;
	padding-right: 12px;
	margin-top: var(--space-3xs);
	line-height: var(--leading-base);

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

const TooltipContent = styled.div`
	padding: var(--space-3xs);
	padding-right: 0;
`;
