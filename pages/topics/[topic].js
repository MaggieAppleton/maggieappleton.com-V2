import {
	getAllPostSlugsForTopic,
	getAllTopics,
	getUniqueTopics,
} from "../../utils/getTopics";
import { deslugifyTopic } from "../../utils/slugifyTopic";
import { getPostdata } from "../../utils/getAllPosts";
import matter from "gray-matter";
import { Title2 } from "../../components/Typography";
import TitleWithCount from "../../components/TitleWithCount";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import DynamicPostsGrid from "../../components/DynamicPostsGrid";
import { getPodcastsForTopic } from "../../utils/getPodcasts";

// ? Possibly useful for reference: https://github.com/inadeqtfuturs/garden/blob/b8b98f4931e204cbb34fa0bcc11fab75b24c0df1/src/pages/tags/%5Bslug%5D.js

export default function TopicPage({ topic, postData }) {
	const topicName = deslugifyTopic(topic)
		.split(" ")
		.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
		.join(" ");

	return (
		<>
			<Header title={`${topicName} posts by Maggie Appleton`} />
			<Layout>
				<header style={{ marginBottom: "var(--space-2xl)" }}>
					<TitleWithCount posts={postData}>{topicName}</TitleWithCount>
					<Title2>Essays, notes, and patterns related to {topicName}</Title2>
				</header>
				<DynamicPostsGrid postsToShow={postData} />
			</Layout>
		</>
	);
}

export async function getStaticPaths() {
	const paths = getAllTopics();
	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps = async ({ params }) => {
	const topic = params?.topic;
	const topics = getUniqueTopics().filter((t) => t !== topic);

	// Get posts data (including patterns)
	const slugsWithTopic = getAllPostSlugsForTopic(params?.topic);
	console.log('Slugs found for topic:', slugsWithTopic);

	const postsWithTopic = await Promise.all(
		slugsWithTopic.map((post) => getPostdata(post.slug))
	);
	console.log('Posts found:', postsWithTopic.length);

	const frontMatterArr = postsWithTopic.map((post) => matter(post).data);
	const postData = frontMatterArr.map((fm, i) => {
		// Determine the type based on the file path
		let type = "note"; // default
		const slug = slugsWithTopic[i].slug;
		if (fm.type) {
			type = fm.type;
		} else {
			// Fallback to determining type from the path
			const filePath = getPostdata.getFilePath(slug);
			if (filePath.includes("/essays/")) type = "essay";
			if (filePath.includes("/notes/")) type = "note";
			if (filePath.includes("/patterns/")) type = "pattern";
			if (filePath.includes("/talks/")) type = "talk";
		}

		return {
			...fm,
			slug: slug,
			type: type,
		};
	});

	// Get podcasts data
	const podcastsWithTopic = getPodcastsForTopic(topic);
	const allContent = [...postData, ...podcastsWithTopic];
	console.log('Content by type:', allContent.map(item => item.type));

	return {
		props: {
			topic,
			topics,
			postData: allContent,
		},
	};
};
