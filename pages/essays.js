import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import EssayCard from "../components/EssayCard";
import { essayFilePaths, ESSAYS_PATH } from "../utils/mdxUtils";

export default function Essays({ essays }) {
    return (
        <Layout>
            <Title1>Essays</Title1>
            <p>Stuff</p>
            <MasonryGrid>
                {essays.map((essay) => (
                    <EssayCard
                        slug={essay.slug}
                        cover={essay.data.cover}
                        title={essay.data.title}
                        growthStage={essay.data.growthStage}
                        date={essay.data.updated}
                    />
                ))}
            </MasonryGrid>
        </Layout>
    );
}

// Fetches the data for the page.

export function getStaticProps() {
    // Get all essay posts
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

    // Sort essays by date
    const sortedEssays = essays.sort((a, b) => {
        return new Date(b.data.updated) - new Date(a.data.updated);
    });
    essays = sortedEssays;

    return { props: { essays } };
}
