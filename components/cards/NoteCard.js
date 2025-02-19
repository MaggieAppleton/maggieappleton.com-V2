import Link from "next/link";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";
import { RelativeDate } from "../templates/Dates";

export default function NoteCard({
	slug,
	title,
	growthStage,
	date,
	id,
	description,
}) {
	return (
		<Link key={id} as={`/${slug}`} href={`/${slug}`}>
			<a>
				<StyledNoteCard>
					{growthStage && <GrowthIcon size="24" growthStage={growthStage} />}
					<div>
						<h3>{title}</h3>
						<Description>{description}</Description>
						<MetadataContainer>
							<span>Note</span>
							<svg width="4px" height="10px">
								<circle r="2" cx="2" cy="2" fill="var(--color-gray-400)" />
							</svg>
							<RelativeDate postDate={date} />
						</MetadataContainer>
					</div>
				</StyledNoteCard>
			</a>
		</Link>
	);
}

const MetadataContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	margin-left: var(--space-xs);
	margin-top: 4px;
	font-family: var(--font-sans);
	font-size: var(--font-size-xs);
	color: var(--color-gray-500);
	text-transform: capitalize;
	font-weight: 400;
	svg {
		margin: 0 0.4rem;
	}
`;

const Description = styled.p`
	font-size: var(--font-size-xs);
	color: var(--color-gray-500);
	font-family: var(--font-sans);
	font-weight: 400;
	margin-left: var(--space-xs);
	margin-top: var(--space-2xs);
`;

const StyledNoteCard = styled(motion.div)`
	display: flex;
	flex-direction: row;
	padding: var(--space-xs);
	margin: 0 var(--space-xs) var(--space-xs) 0;
	border-radius: var(--border-radius-base);
	border: 1px solid var(--color-cream);
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	h3 {
		color: var(--color-gray-800);
		transition: all 0.3s ease-in-out;
		font-family: var(--font-body);
		font-size: var(--font-size-base);
		font-weight: 400;
		line-height: var(--leading-snug);
		margin-left: var(--space-xs);
		transition: all 0.3s ease-in-out;
	}
	svg {
		position: relative;
		top: 4px;
		flex-shrink: 0;
	}
	&:hover {
		transform: scale3d(1.02, 1.02, 1.02);
		background: var(--color-light-cream);
		box-shadow: var(--box-shadow-sm);
		border: 1px solid var(--color-tinted-cream);
		h3 {
			color: var(--color-crimson);
		}
	}
`;
