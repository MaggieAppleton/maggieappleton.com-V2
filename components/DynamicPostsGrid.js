import styled from "styled-components";
import MasonryGrid from "./MasonryGrid";
import NoteCard from "../components/cards/NoteCard";
import EssayCard from "../components/cards/EssayCard";
import PatternCard from "../components/cards/PatternCard";
import TalkCard from "../components/cards/TalkCard";
import PodcastCard from "../components/cards/PodcastCard";

export default function DynamicPostsGrid({ postsToShow }) {
	return (
		<MasonryGrid>
			{postsToShow.map(
				(
					{
						slug,
						title,
						type,
						growthStage,
						cover,
						updated,
						podcastName,
						episodeName,
						coverImage,
						url,
						conferences,
					},
					i
				) => {
					switch (type) {
						case "essay":
							return (
								<EssayCard
									key={i}
									slug={slug}
									cover={cover}
									title={title}
									growthStage={growthStage}
									date={updated}
								/>
							);
						case "note":
							return (
								<NoteCard
									key={i}
									slug={slug}
									title={title}
									growthStage={growthStage}
									date={updated}
								/>
							);
						case "pattern":
							return (
								<PatternCard
									key={i}
									slug={slug}
									title={title}
									growthStage={growthStage}
									date={updated}
								/>
							);
						case "talk":
							return (
								<TalkCard
									key={i}
									slug={slug}
									title={title}
									date={updated}
									cover={cover}
									conferences={conferences}
								/>
							);
						case "podcast":
							return (
								<PodcastCard
									key={i}
									podcastName={podcastName}
									episodeName={episodeName}
									url={url}
									date={updated}
									podcastCover={coverImage}
								/>
							);
						default:
							console.warn(`Unknown content type: ${type}`);
							return null;
					}
				}
			)}
		</MasonryGrid>
	);
}

const TopicGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
`;
