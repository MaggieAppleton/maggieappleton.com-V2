import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import sortBy from "lodash/sortBy";
import reverse from "lodash/reverse";
import Image from "next/image";
import { breakpoints } from "../utils/breakpoints";
import styled from "styled-components";
import { Title1, Title2, Title3 } from "../components/Typography";
import Header from "../components/Header";
import Layout from "../components/Layout";
import {
    essayFilePaths,
    ESSAYS_PATH,
    noteFilePaths,
    NOTES_PATH,
    patternFilePaths,
    PATTERNS_PATH,
    projectFilePaths,
    PROJECTS_PATH,
} from "../utils/mdxUtils";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Index({ essays, notes, patterns, projects }) {
    return (
        <Layout>
            <Header>
                <Title1
                    style={{ maxWidth: "1200px", marginTop: "var(--space-32)" }}
                >
                    <b>Maggie </b>
                    makes visual essays about programming, design, and
                    anthropology.
                </Title1>
                <h2
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--font-size-md)",
                        color: "var(--color-gray-800)",
                        fontWeight: "300",
                        lineHeight: "var(--leading-loose)",
                    }}
                >
                    UX designer, illustrator, anthropologist, and mediocre
                    developer
                    <br />
                    Currently leading design at{" "}
                    <a href="https://hash.ai">
                        <b>HASH</b>
                    </a>{" "}
                </h2>
            </Header>
            <Spacer />
            <section>
                <Title2>The Garden</Title2>
                <Subheader>
                    A digital garden is a llalalalla nonsense, nonsense,
                    lalalalalala. Read more about it.
                </Subheader>
            </section>
            <GardenSection>
                <section style={{ gridArea: "essays" }}>
                    <Link href="/essays">
                        <a href="/essays">
                            <SectionHeader>
                                Essays
                                <ArrowRightIcon width="18" height="18" />
                            </SectionHeader>
                        </a>
                    </Link>
                    <Subheader>
                        Opinionated, narrative writing with an agenda
                    </Subheader>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(300px, 1fr))",
                            gridGap: "var(--space-16)",
                        }}
                    >
                        {essays.map((essay) => (
                            <Link key={essay.slug} href={`/${essay.slug}`}>
                                <a>
                                    <EssayCard>
                                        {essay.data.cover ? (
                                            <Image
                                                src={essay.data.cover}
                                                alt=""
                                                width={300}
                                                height={300}
                                                layout="responsive"
                                            />
                                        ) : (
                                            <img
                                                src="https://via.placeholder.com/300x300"
                                                alt=""
                                            />
                                        )}
                                        <h3>{essay.data.title}</h3>
                                        <p>{essay.data.growthStage}</p>
                                    </EssayCard>
                                </a>
                            </Link>
                        ))}
                    </div>
                </section>
                <section style={{ gridArea: "notes" }}>
                    <Link href="/notes">
                        <a href="/notes">
                            <SectionHeader>
                                Notes
                                <ArrowRightIcon width="18" height="18" />
                            </SectionHeader>
                        </a>
                    </Link>
                    <Subheader>
                        Loose, unopinionated notes on things I don’t entirely
                        understand yet.
                    </Subheader>
                    {notes.slice(0, 12).map((note) => (
                        <Link key={note.slug} href={`/${note.slug}`}>
                            <a>
                                <NoteCard>
                                    <h3>{note.data.title}</h3>
                                </NoteCard>
                            </a>
                        </Link>
                    ))}
                </section>
                <section style={{ gridArea: "patterns" }}>
                    <Link href="/patterns">
                        <a href="/patterns">
                            <SectionHeader>
                                Pattern Catalogue
                                <ArrowRightIcon width="18" height="18" />
                            </SectionHeader>
                        </a>
                    </Link>
                    <Subheader>
                        A catalogue of design patterns based on my own
                        observations and research
                    </Subheader>
                    {patterns.map((pattern) => (
                        <div key={pattern.slug}>
                            <Link href={`/${pattern.slug}`}>
                                <a>
                                    <h3>{pattern.data.title}</h3>
                                </a>
                            </Link>
                        </div>
                    ))}
                </section>
                <section style={{ gridArea: "library" }}>
                    <Link href="/library">
                        <a href="/library">
                            <SectionHeader>
                                Library
                                <ArrowRightIcon width="18" height="18" />
                            </SectionHeader>
                        </a>
                    </Link>
                    <Subheader>
                        Books I’ve read and books I like the idea of having read
                    </Subheader>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(180px, 1fr))",
                            gridGap: "var(--space-24)",
                        }}
                    >
                        {bookData.slice(0, 4).map((book) => (
                            <BookCard key={book.title}>
                                <img src={book.cover} alt="" />
                                <p>{book.title}</p>
                                <h4>{book.author}</h4>
                            </BookCard>
                        ))}
                    </div>
                </section>
            </GardenSection>
            <Spacer />
            <section>
                <Title2>Projects</Title2>
                <Subheader>In the past I have made things</Subheader>
            </section>
        </Layout>
    );
}

const bookData = [
    {
        title: "The Design of Nonsense Things",
        author: "Don Norman",
        cover: "https://via.placeholder.com/200x300",
    },
    {
        title: "Thinking Bad and Slow",
        author: "Daniel Kahneman",
        cover: "https://via.placeholder.com/200x300",
    },
    {
        title: "The Design of Boring Things",
        author: "Don Norman",
        cover: "https://via.placeholder.com/200x300",
    },
    {
        title: "Thinking Fast and Slow",
        author: "Daniel Kahneman",
        cover: "https://via.placeholder.com/200x300",
    },
    {
        title: "Thinking Fast and Dumb",
        author: "Daniel Kahneman",
        cover: "https://via.placeholder.com/200x300",
    },
];

// Styled Components

const EssayCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--color-gray-100);
    padding: var(--space-24);
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-sm);
    background: var(--color-cream);
    transition: all 0.3s ease-in-out;
    color: var(--color-gray-800);
    h3 {
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin: var(--space-12) 0;
    }
    p {
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
        color: var(--color-gray-600);
    }
    &:hover {
        box-shadow: var(--box-shadow-lg);
        transform: translateY(-2px);
        h3 {
            color: var(--color-sea-blue);
        }
    }
`;

const BookCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const NoteCard = styled.div`
    h3 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin: var(--space-24) 0;
    }
    h3::before {
        content: "";
        display: inline-block;
        width: var(--space-16);
        height: var(--space-16);
        background: var(--color-gray-300);
    }
`;

const GardenSection = styled.section`
    margin: var(--space-64) 0;
    display: grid;
    grid-gap: var(--space-80);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "essays essays notes"
        "patterns library library";
    @media ${breakpoints.mediaSM} {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: "essays" "notes" "patterns" "library";
    }
`;

const SectionHeader = styled.h3`
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-gray-800);
    display: flex;
    align-items: center;
    margin-bottom: var(--space-4);
    svg {
        transition: all 0.3s ease-in-out;
        position: relative;
        top: 0px;
        margin-left: var(--space-8);
    }
    &:hover {
        transition: all 0.3s ease-in-out;
        color: var(--color-sea-blue);
        cursor: pointer;
        svg {
            margin-left: var(--space-12);
            color: var(--color-sea-blue);
        }
    }
`;

const Spacer = styled.div`
    height: var(--space-128);
`;

const Subheader = styled.p`
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    font-weight: 300;
    color: var(--color-gray-800);
    margin-bottom: var(--space-32);
`;

// Fetches the data for the page.

export function getStaticProps() {
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

    const notes = noteFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
        const { content, data } = matter(source);
        const slug = filePath.replace(/\.mdx?$/, "");

        return {
            content,
            data,
            slug,
            filePath,
        };
    });

    const patterns = patternFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
        const { content, data } = matter(source);
        const slug = filePath.replace(/\.mdx?$/, "");

        return {
            content,
            data,
            slug,
            filePath,
        };
    });

    const projects = projectFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
        const { content, data } = matter(source);
        const slug = filePath.replace(/\.mdx?$/, "");

        return {
            content,
            data,
            slug,
            filePath,
        };
    });

    const filteredEssays = essays
        .filter((essay) => essay.data.featured === true)
        .slice(0, 4);
    const sortedEssays = reverse(sortBy(filteredEssays, "updated"));
    essays = sortedEssays;

    return { props: { essays, notes, patterns, projects } };
}
