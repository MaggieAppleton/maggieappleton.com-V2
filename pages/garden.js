import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Title1, Title2 } from "../components/typography";
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

export default function Garden({ essays, notes, patterns }) {
    return (
        <Layout>
            <Header>
                <Title1>Garden</Title1>
            </Header>
            <Title2>Stuff</Title2>
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
                {notes.map((note) => (
                    <NoteCard
                        slug={note.slug}
                        title={note.data.title}
                        growthStage={note.data.growthStage}
                        date={note.data.updated}
                    />
                ))}
                {patterns.map((essay) => (
                    <PatternCard
                        slug={essay.slug}
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
