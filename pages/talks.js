import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import TalkCard from "../components/cards/TalkCard";
import { Spacer } from "../components/Spacer";
import { talksFilePaths, TALKS_PATH } from "../utils/mdxUtils";
import Header from "../components/Header";
import TitleWithCount from "../components/TitleWithCount";
import MasonryGrid from "../components/MasonryGrid";
import styled from "styled-components";

export default function Talks({ talks }) {
	return (
		<>
			<Header title="Talks by Maggie Appleton" />
			<Layout>
				<header style={{ marginBottom: "var(--space-xl)" }}>
					<TitleWithCount posts={talks}>Talks</TitleWithCount>
					<Title2>
						I occassionally give talks. Subjects range from visual programming
						to cultural anthropology to design tactics to the narratives we tell
						about software to the repercussions of jetspraying the web with
						thoughtless AI slop.
					</Title2>
					<p></p>
				</header>
				<ImageGrid>
					<Image
						src="/images/talks_1.jpg"
						alt="a photo of maggie speaking on stage"
						width={1600 / 3}
						height={1104 / 3}
						layout="responsive"
					/>
					<Image
						src="/images/talks_2.jpg"
						alt="a photo of maggie answering questions after a talk"
						width={1600 / 3}
						height={1104 / 3}
						layout="responsive"
					/>
					<Image
						src="/images/talks_3.jpg"
						alt="a photo of maggie in front of a large presentation slide"
						width={1600 / 3}
						height={1104 / 3}
						layout="responsive"
					/>
					<Image
						src="/images/talks_5.jpg"
						alt="a photo of maggie in front of a large presentation slide"
						width={1600 / 3}
						height={1104 / 3}
						layout="responsive"
					/>
				</ImageGrid>
				<Spacer size="large" />
				<MasonryGrid columnGapBottom="2rem">
					{talks.map((talk) => (
						<TalkCard
							title={talk.data.title}
							conferences={talk.data.conferences}
							date={talk.data.updated}
							id={talk.slug}
							slug={talk.slug}
							cover={talk.data.cover}
						/>
					))}
				</MasonryGrid>
			</Layout>
		</>
	);
}

const ImageGrid = styled.div`
	margin-top: var(--space-l);
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, auto));
	gap: 0.5rem;
`;

// Fetches the data for the page.

export function getStaticProps() {
	// Get all note posts
	let talks = talksFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(TALKS_PATH, filePath));
		const { content, data } = matter(source);
		const slug = filePath.replace(/\.mdx$/, "");

		return {
			content,
			data,
			slug,
			filePath,
		};
	});

	// Sort talks by date
	const sortedTalks = talks.sort((a, b) => {
		return new Date(b.data.updated) - new Date(a.data.updated);
	});
	talks = sortedTalks;

	return { props: { talks } };
}
