import {
    getAllPostSlugsForTopic,
    getAllTopics,
    getUniqueTopics,
} from "../../utils/getTopics";
import slugifyTopic from "../../utils/slugifyTopic";
import { getPostdata } from "../../utils/getAllPosts";
import matter from "gray-matter";
import styled from "styled-components";
import Layout from "../../components/Layout";
import DynamicPostsList from "../../components/DynamicPostsList";

// ? Possibly useful for reference: https://github.com/inadeqtfuturs/garden/blob/b8b98f4931e204cbb34fa0bcc11fab75b24c0df1/src/pages/tags/%5Bslug%5D.js

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
    const slugsWithTopic = getAllPostSlugsForTopic(params?.topic);
    const postsWithTopic = await Promise.all(
        slugsWithTopic.map((post) => getPostdata(post.slug))
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
