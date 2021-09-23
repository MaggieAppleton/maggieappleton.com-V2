import Head from "next/head";
import {
    getPostSlugsForTag,
    getAllTags,
    getUniqueTags,
} from "../../utils/getTags";
import { getPostdata } from "../../utils/getPosts";
import matter from "gray-matter";
import styled from "styled-components";
import DynamicPostsList from "../../components/DynamicPostsList";
// import TagPill from '../../components/TagPill'

export default function TagPage({ tag, tags, frontMatterAndSlug }) {
    const tagName = tag[0].toUpperCase() + tag.slice(1);

    return (
        <>
            <Head></Head>

            <header>
                Other topics:{" "}
                <ul>
                    {tags.map((tag) => (
                        <div tag={tag} key={tag} />
                    ))}
                </ul>
            </header>

            <h1>{tagName} posts</h1>

            <DynamicPostsList postsToShow={frontMatterAndSlug} />
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllTags();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({ params }) => {
    const tag = params?.tag;
    const tags = getUniqueTags().filter((t) => t !== tag); // Get all OTHER unique tags
    const slugsWithTag = getPostSlugsForTag(params?.tag);
    const postsWithTag = await Promise.all(
        slugsWithTag.map((slug) => getPostdata(slug))
    );
    const frontMatterArr = postsWithTag.map((post) => matter(post).data);
    const frontMatterAndSlug = frontMatterArr.map((fm, i) => ({
        ...fm,
        slug: slugsWithTag[i],
    }));

    return {
        props: {
            tag,
            tags,
            frontMatterAndSlug,
        },
    };
};
