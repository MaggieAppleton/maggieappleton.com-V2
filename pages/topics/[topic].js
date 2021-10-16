import {
    getAllPostSlugsForTopic,
    getAllTopics,
    getUniqueTopics,
} from "../../utils/getTopics";
import { deslugifyTopic } from "../../utils/slugifyTopic";
import { getPostdata } from "../../utils/getAllPosts";
import matter from "gray-matter";
import { Title1, SmallTitle2 } from "../../components/Typography";
import { Spacer } from "../../components/Spacer";
import Layout from "../../components/Layout";
import DynamicPostsGrid from "../../components/DynamicPostsGrid";

// ? Possibly useful for reference: https://github.com/inadeqtfuturs/garden/blob/b8b98f4931e204cbb34fa0bcc11fab75b24c0df1/src/pages/tags/%5Bslug%5D.js

export default function TopicPage({ topic, topics, postData }) {
    const topicName = deslugifyTopic(topic)
        .split(" ")
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(" ");

    return (
        <Layout>
            <header>
                <ul>
                    {topics.map((topic) => (
                        <div topic={topic} key={topic} />
                    ))}
                </ul>
            </header>

            <Title1>{topicName}</Title1>
            <SmallTitle2>
                All essays, notes, and patterns related to {topicName}
            </SmallTitle2>
            <Spacer size="small" />
            <DynamicPostsGrid postsToShow={postData} />
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
    const postData = frontMatterArr.map((fm, i) => ({
        ...fm,
        slug: slugsWithTopic[i].slug,
    }));

    return {
        props: {
            topic,
            topics,
            postData,
        },
    };
};
