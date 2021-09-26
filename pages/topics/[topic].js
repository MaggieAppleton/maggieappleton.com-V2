import {
    getPostSlugsForTopic,
    getAllTopics,
    getUniqueTopics,
} from "../../utils/getTopics";
import { getPostdata } from "../../utils/getPosts";
import matter from "gray-matter";
import styled from "styled-components";
import Layout from "../../components/Layout";
import DynamicPostsList from "../../components/DynamicPostsList";

export default function TopicPage({ topic, topics, frontMatterAndSlug }) {
    const topicName = topic[0].toUpperCase() + topic.slice(1);
    return (
        <Layout>
            <header>
                <ul>
                    {topics.map((topic) => (
                        <div topic={topic} key={topic} />
                    ))}
                </ul>
            </header>

            <h1>Posts related to {topicName}</h1>

            <DynamicPostsList postsToShow={frontMatterAndSlug} />
        </Layout>
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
    const topics = getUniqueTopics().filter((t) => t !== topic); // Get all OTHER unique topics
    const slugsWithTopic = getPostSlugsForTopic(params?.topic);
    const postsWithTopic = await Promise.all(
        slugsWithTopic.map((slug) => getPostdata(slug))
    );
    const frontMatterArr = postsWithTopic.map((post) => matter(post).data);
    const frontMatterAndSlug = frontMatterArr.map((fm, i) => ({
        ...fm,
    }));

    return {
        props: {
            topic,
            topics,
            frontMatterAndSlug,
        },
    };
};
