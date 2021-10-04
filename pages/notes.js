import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import NoteCard from "../components/cards/NoteCard";
import { noteFilePaths, NOTES_PATH } from "../utils/mdxUtils";
import Header from "../components/Header";
import PostCount from "../components/PostCount";

export default function Notes({ notes }) {
    return (
        <>
            <Header title="Notes by Maggie Appleton" />
            <Layout>
                <Title1>Notes</Title1>
                <Title2>
                    Loose, unopinionated notes on things I don’t entirely
                    understand yet.
                </Title2>
                <PostCount postType="notes" posts={notes} />
                <MasonryGrid
                    columnGapLeft="var(--space-12)"
                    columnGapBottom="var(--space-12)"
                >
                    {notes.map((note) => (
                        <NoteCard
                            slug={note.slug}
                            title={note.data.title}
                            growthStage={note.data.growthStage}
                            date={note.data.updated}
                        />
                    ))}
                </MasonryGrid>
            </Layout>
        </>
    );
}

// Fetches the data for the page.

export function getStaticProps() {
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

    return { props: { notes } };
}
