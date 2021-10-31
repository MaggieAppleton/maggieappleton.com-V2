import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import PatternCard from "../components/cards/PatternCard";
import { patternFilePaths, PATTERNS_PATH } from "../utils/mdxUtils";
import TitleWithCount from "../components/TitleWithCount";
import Header from "../components/Header";

export default function Patterns({ patterns }) {
    return (
        <>
            <Header title="Pattern Library of Maggie Appleton" />
            <Layout>
                <TitleWithCount posts={patterns}>
                    Pattern Catalogue
                </TitleWithCount>
                <Title2>
                    A catalogue of design patterns gathered from my own
                    observations and research.
                </Title2>

                <MasonryGrid largeGap>
                    {patterns.map((essay, i) => (
                        <PatternCard
                            key={i}
                            slug={essay.slug}
                            title={essay.data.title}
                            growthStage={essay.data.growthStage}
                            date={essay.data.updated}
                        />
                    ))}
                </MasonryGrid>
            </Layout>
        </>
    );
}

// Fetches the data for the page.

export function getStaticProps() {
    // Get all pattern posts
    let patterns = patternFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
        const { content, data } = matter(source);
        const slug = filePath.replace(/\.mdx$/, "");

        return {
            content,
            data,
            slug,
            filePath,
        };
    });

    // Sort patterns by date
    const sortedPatterns = patterns.sort((a, b) => {
        return new Date(b.data.updated) - new Date(a.data.updated);
    });
    patterns = sortedPatterns;

    return { props: { patterns } };
}
