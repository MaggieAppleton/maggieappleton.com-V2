import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import EssayCard from "../components/cards/EssayCard";
// import BookCard from "../components/cards/BookCard";
import NoteCard from "../components/cards/NoteCard";
import PatternCard from "../components/cards/PatternCard";
import {
    essayFilePaths,
    ESSAYS_PATH,
    noteFilePaths,
    NOTES_PATH,
    patternFilePaths,
    PATTERNS_PATH,
} from "../utils/mdxUtils";
import { bookData } from "../posts/books";
import TitleWithCount from "../components/TitleWithCount";
import { concat } from "lodash";

export default function Garden({ essays, notes }) {
    const allPosts = essays.concat(notes);
    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.data.updated) - new Date(a.data.updated);
    });

    return (
        <>
            <Header title="The Garden of Maggie Appleton" />
            <Layout>
                <header style={{ marginBottom: "var(--space-80)" }}>
                    <TitleWithCount posts={concat(essays, notes)}>
                        The Garden
                    </TitleWithCount>
                    <Title2>
                        A collection of essays, notes, and half-baked
                        explorations I'm always tending to.
                    </Title2>
                </header>
                <MasonryGrid>
                    {sortedPosts.map((post, i) => {
                        if (post.data.type === "essay") {
                            return (
                                <EssayCard
                                    key={i}
                                    slug={post.slug}
                                    cover={post.data.cover}
                                    title={post.data.title}
                                    growthStage={post.data.growthStage}
                                    date={post.data.updated}
                                />
                            );
                        } else if (post.data.type === "note") {
                            return (
                                <NoteCard
                                    key={i}
                                    slug={post.slug}
                                    title={post.data.title}
                                    growthStage={post.data.growthStage}
                                    date={post.data.updated}
                                />
                            );
                        }
                    })}
                </MasonryGrid>
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

    // Get all note posts
    let notes = noteFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
        const { content, data } = matter(source);
        const slug = filePath.replace(/\.mdx$/, "");

        return {
            content,
            data,
            slug,
            filePath,
        };
    });

    // Sort notes by date
    const sortedNotes = notes.sort((a, b) => {
        return new Date(b.data.updated) - new Date(a.data.updated);
    });
    notes = sortedNotes;

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

    return { props: { essays, notes, patterns } };
}
