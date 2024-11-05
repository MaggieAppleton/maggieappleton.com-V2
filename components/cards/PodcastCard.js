import styled from "styled-components";
import { motion } from "framer-motion";
import { DateToNow } from "../templates/Dates";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function PodcastCard({
	podcastName,
	episodeName,
	url,
	date,
	id,
	podcastCover,
}) {
	return (
		<a key={id} href={url}>
			<StyledPodcastCard initial="initial" whileHover="hover">
				{podcastCover && (
					<ImageWrapper initial="initial" whileHover="hover">
						<ExternalLinkContainer>
							<ArrowTopRightOnSquareIcon width="36" height="36" />
							<span>View episode</span>
						</ExternalLinkContainer>
						<Image
							src={podcastCover}
							alt={episodeName}
							width={120}
							height={120}
						/>
					</ImageWrapper>
				)}
				<InnerText>
					<h3>{episodeName}</h3>
					<PodcastName>{podcastName}</PodcastName>
					<MetadataContainer>
						<span>Podcast</span>
						<svg width="4px" height="4px">
							<circle r="2" cx="2" cy="2" fill="var(--color-gray-400)" />
						</svg>
						{date && <DateToNow postDate={date} />}
					</MetadataContainer>
				</InnerText>
			</StyledPodcastCard>
		</a>
	);
}

const InnerText = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.25rem 0.25rem 0.5rem 0.25rem;
	h3 {
		color: var(--color-gray-800);
		transition: all 0.3s ease-in-out;
		font-family: var(--font-body);
		font-size: var(--font-size-base);
		font-weight: 400;
		line-height: var(--leading-snug);
		transition: all 0.3s ease-in-out;
		margin-bottom: 0.5rem;
	}
`;

const PodcastName = styled.p`
	font-family: var(--font-sans);
	font-size: var(--font-size-xs);
	color: var(--color-gray-600);
	letter-spacing: 0.015rem;
	font-weight: 400;
`;

const MetadataContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-family: var(--font-sans);
	font-size: var(--font-size-xs);
	color: var(--color-gray-500);
	text-transform: capitalize;
	font-weight: 400;
	svg {
		margin: 0 0.4rem !important;
		position: relative;
		top: 1px;
	}
`;

const StyledPodcastCard = styled(motion.div)`
	display: flex;
	flex-direction: row;
	grid-gap: 1.25rem;
	padding: var(--space-s);
	border: 1px solid var(--color-tinted-cream);
	margin: 0 var(--space-2xs) var(--space-2xs) 0;
	border-radius: var(--border-radius-base);
	box-shadow: var(--box-shadow-sm);
	background: var(--color-light-cream);
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	img {
		border-radius: 4px;
		transition: all 0.3s ease-in-out;
	}
	&:hover {
		transform: scale3d(1.01, 1.01, 1.01);
		h3 {
			color: var(--color-crimson);
		}
		img {
			opacity: 0.05;
		}
	}
`;

const ImageWrapper = styled(motion.div)`
	display: grid;
	position: relative;
	top: 0;
	place-items: start;
	min-width: 120px;
	max-height: 120px;
	border-radius: 4px;
	box-shadow: var(--box-shadow-sm);
	margin-bottom: 0 !important;
	transition: all 0.3s ease-in-out;
`;

const ExternalLinkContainer = styled.div`
	position: absolute;
	top: 30%;
	left: 30%;
	margin-top: -3%;
	margin-left: -28%;
	color: var(--color-crimson);
	display: flex;
	flex-direction: column;
	width: 120px;
	align-items: center;
	grid-gap: 0.25rem;
	span {
		font-size: var(--font-size-xs);
		font-weight: 500;
		font-family: var(--font-sans);
		line-height: var(--leading-snug);
	}
`;
