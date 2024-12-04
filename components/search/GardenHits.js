import { connectInfiniteHits } from "react-instantsearch-dom";
import MasonryGrid from "../MasonryGrid";
import EssayCard from "../cards/EssayCard";
import NoteCard from "../cards/NoteCard";
import PatternCard from "../cards/PatternCard";
import PodcastCard from "../cards/PodcastCard";
import TalkCard from "../cards/TalkCard";
import { useMemo } from 'react';

function GardenHits({ hits, allPostData }) {
	const hitLength = hits?.length;
	const sortedPosts = useMemo(() => {
		return allPostData.sort((a, b) => {
			return new Date(b.updated) - new Date(a.updated);
		});
	}, [allPostData]);
	const filteredGardenHits = hitLength > 0 ? hits : sortedPosts;

	return (
		<MasonryGrid columnGapLeft="0.8rem" columnGapBottom="0.8rem">
			{filteredGardenHits.map((post, i) => {
				if (!post || !post.type) return null;

				if (post.type === "essay") {
					return (
						<EssayCard
							key={i}
							id={post.slug}
							slug={post.slug}
							cover={post.cover}
							title={post.title}
							growthStage={post.growthStage}
							date={post.updated}
							description={post.description}
						/>
					);
				} else if (post.type === "note") {
					return (
						<NoteCard
							key={i}
							id={post.slug}
							slug={post.slug}
							title={post.title}
							growthStage={post.growthStage}
							date={post.updated}
							description={post.description}
						/>
					);
				} else if (post.type === "pattern") {
					return (
						<PatternCard
							key={i}
							id={post.slug}
							slug={post.slug}
							title={post.title}
							growthStage={post.growthStage}
							date={post.updated}
							description={post.description}
						/>
					);
				} else if (post.type === "talk") {
					return (
						<TalkCard
							key={i}
							id={post.slug}
							slug={post.slug}
							title={post.title}
							date={post.updated}
							cover={post.cover}
							conferences={post.conferences}
						/>
					);
				} else if (post.type === "podcast") {
					return (
						<PodcastCard
							key={i}
							id={i}
							url={post.url}
							episodeName={post.episodeName}
							podcastName={post.podcastName}
							date={post.updated}
							podcastCover={post.coverImage}
						/>
					);
				}
			})}
		</MasonryGrid>
	);
}

export default connectInfiniteHits(GardenHits);
