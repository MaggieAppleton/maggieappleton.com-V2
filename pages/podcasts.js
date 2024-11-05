import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import styled from "styled-components";
import Header from "../components/Header";
import PodcastCard from "../components/cards/PodcastCard";
import TitleWithCount from "../components/TitleWithCount";
import MasonryGrid from "../components/MasonryGrid";

const { podcastData } = require("../posts/data/podcasts");

export default function Podcasts() {
	return (
		<>
			<Header title="Podcasts with Maggie Appleton" />
			<Layout>
				<header style={{ marginBottom: "var(--space-xl)" }}>
					<TitleWithCount posts={podcastData}>Podcasts</TitleWithCount>
					<Title2>
						Interviews and casual chats on various podcasts. Inevitably about
						digital gardening, artifical intelligence, or metaphors.
					</Title2>
				</header>
				<MasonryGrid columnGapBottom="0.5rem">
					{[...podcastData]
						.sort((a, b) => new Date(b.updated) - new Date(a.updated))
						.map(
							({ podcastName, episodeName, coverImage, updated, url }, i) => (
								<PodcastCard
									id={i}
									key={i}
									url={url}
									episodeName={episodeName}
									podcastName={podcastName}
									date={updated}
									podcastCover={coverImage}
								/>
							)
						)}
				</MasonryGrid>
			</Layout>
		</>
	);
}
