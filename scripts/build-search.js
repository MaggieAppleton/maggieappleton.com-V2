const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch");
const mdxUtils = require("../utils/mdxUtils");
const { podcastData } = require("../posts/data/podcasts");

const {
	essayFilePaths,
	ESSAYS_PATH,
	noteFilePaths,
	NOTES_PATH,
	patternFilePaths,
	PATTERNS_PATH,
	talksFilePaths,
	TALKS_PATH,
} = mdxUtils;

let podcasts = podcastData;

let essays = essayFilePaths.map((filePath) => {
	const source = fs.readFileSync(path.join(ESSAYS_PATH, filePath));
	const { content, data } = matter(source);
	const slug = filePath.replace(/\.mdx$/, "");

	return {
		content,
		data,
		slug,
		filePath,
	};
});

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

let notes = noteFilePaths.map((filePath) => {
	const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
	const { content, data } = matter(source);
	const slug = filePath.replace(/\.mdx?$/, "");

	return {
		content,
		data,
		slug,
		filePath,
	};
});

let patterns = patternFilePaths.map((filePath) => {
	const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
	const { content, data } = matter(source);
	const slug = filePath.replace(/\.mdx?$/, "");

	return {
		content,
		data,
		slug,
		filePath,
	};
});

const posts = [...essays, ...notes, ...patterns, ...talks, ...podcasts];

function transformPostsToSearchObjects(posts) {
	const nonPodcastPosts = posts.filter(
		(post) => post.data && post.data.type !== "podcast"
	);

	const transformed = nonPodcastPosts.map((post) => {
		const postId = post.data.title.toLowerCase().replace(/\s/g, "-");

		return {
			objectID: postId,
			slug: post.slug,
			title: post.data.title,
			description: post.data.description,
			startDate: post.data.startDate,
			updated: post.data.updated,
			cover: post.data.cover,
			topics: post.data.topics,
			growthStage: post.data.growthStage,
			type: post.data.type,
			content: post.content,
		};
	});

	return transformed;
}

function transformPodcastsToSearchObjects(podcasts) {
	const transformed = podcasts.map((podcast) => {
		const podcastId = podcast.episodeName.toLowerCase().replace(/\s/g, "-");

		return {
			objectID: podcastId,
			podcastName: podcast.podcastName,
			episodeName: podcast.episodeName,
			type: podcast.type,
			url: podcast.url,
			coverImage: podcast.coverImage,
			updated: podcast.updated,
			topics: podcast.topics || [],
		};
	});

	return transformed;
}

(async function () {
	dotenv.config();

	try {
		const searchObjects = transformPostsToSearchObjects(
			posts.filter((post) => post.data)
		);
		const podcastObjects = transformPodcastsToSearchObjects(podcastData);

		const allObjects = [...searchObjects, ...podcastObjects];

		const appID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
		const adminKey = process.env.ALGOLIA_SEARCH_ADMIN_KEY;

		const client = algoliasearch(appID, adminKey);
		const index = client.initIndex("garden-posts");

		const algoliaResponse = await index.saveObjects(allObjects);

		console.log(
			`🎉 Sucessfully added ${
				algoliaResponse.objectIDs.length
			} records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
				"\n"
			)}`
		);
	} catch (error) {
		console.error("Failed to upload to Algolia:", error);
		console.error("Error details:", error.message);
		if (error.debugData) {
			console.error("Debug data:", error.debugData);
		}
	}

	console.log("Search data request has fired!");
})();
