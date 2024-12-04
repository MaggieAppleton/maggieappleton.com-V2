import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Title2 } from "../components/Typography";
import {
	essayFilePaths,
	ESSAYS_PATH,
	noteFilePaths,
	NOTES_PATH,
	patternFilePaths,
	PATTERNS_PATH,
	talksFilePaths,
	TALKS_PATH,
} from "../utils/mdxUtils";
import TitleWithCount from "../components/TitleWithCount";
import { GardenFiltersAndHits } from "../components/search/GardenFiltersAndHits";
import { podcastData } from "../posts/data/podcasts.js";
import { useEffect } from 'react';

export default function Garden({ allPosts }) {
	useEffect(() => {
		const t0 = performance.now();
		
		return () => {
			const t1 = performance.now();
			console.log(`Garden page unmount took ${t1 - t0} milliseconds`);
		}
	}, []);

	const postsAndPodcasts = allPosts.concat(podcastData);

	return (
		<>
			<Header title="The Garden of Maggie Appleton" />
			<Layout>
				<header style={{ marginBottom: "var(--space-xl)" }}>
					<TitleWithCount posts={postsAndPodcasts}>The Garden</TitleWithCount>
					<Title2>
						A collection of essays, notes, talks, podcasts, and half-baked
						explorations I'm always tending to.
					</Title2>
				</header>
				<GardenFiltersAndHits allPostData={postsAndPodcasts} />
			</Layout>
		</>
	);
}
// Fetches the data for the page.

export function getStaticProps() {
	// Get all essay posts
	let essays = essayFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(ESSAYS_PATH, filePath));
		const { content, data } = matter(source);
		const slug = filePath.replace(/\.mdx$/, "");
		const {
			title,
			description,
			growthStage,
			startDate,
			topics,
			type,
			cover,
			updated,
		} = data;

		return {
			content,
			title,
			cover,
			description,
			growthStage,
			startDate,
			topics,
			type,
			updated,
			slug,
			filePath,
		};
	});

	// Get all pattern posts
	let patterns = patternFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
		const { content, data } = matter(source);
		const slug = filePath.replace(/\.mdx$/, "");
		const {
			title,
			description,
			type,
			startDate,
			updated,
			topics,
			growthStage,
		} = data;

		return {
			content,
			title,
			description,
			startDate,
			growthStage,
			updated,
			topics,
			type,
			slug,
			filePath,
		};
	});

	// Get all note posts
	let notes = noteFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
		const { content, data } = matter(source);
		const slug = filePath.replace(/\.mdx$/, "");
		const {
			title,
			description,
			growthStage,
			startDate,
			topics,
			type,
			updated,
		} = data;

		return {
			content,
			title,
			description,
			growthStage,
			startDate,
			topics,
			type,
			updated,
			slug,
			filePath,
		};
	});

	// Get all talks
	let talks = talksFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(TALKS_PATH, filePath));
		const { content, data } = matter(source);
		const slug = filePath.replace(/\.mdx$/, "");
		const { title, description, type, topics, updated, conferences, cover } =
			data;

		return {
			content,
			title,
			description,
			topics,
			updated,
			cover,
			conferences,
			type,
			slug,
			filePath,
		};
	});

	const allPosts = essays.concat(notes, patterns, talks);

	return { props: { allPosts } };
}
