import { podcastData } from "../posts/data/podcasts";
import { slugifyTopic } from "./slugifyTopic";

export const getPodcastsForTopic = (topic) => {
	return podcastData
		.filter((podcast) => {
			if (!podcast.topics) return false;
			const slugifiedTopics = podcast.topics.map((t) => slugifyTopic(t));
			return slugifiedTopics.includes(topic);
		})
		.map((podcast) => ({
			...podcast,
			type: "podcast",
		}));
};
