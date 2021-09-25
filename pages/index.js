import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Image from "next/image";
import { breakpoints } from "../utils/breakpoints";
import styled from "styled-components";
import { H1, H2, H3 } from "../components/Typography";
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
    console.log(essays);
    return (
        <Layout>
            <Header>
                <H1 style={{ maxWidth: "1200px" }}>
                    <b>Maggie </b>
                    makes visual essays about programming, design, and
                    anthropology.
                </H1>
                <h2
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--font-size-md)",
                        color: "var(--color-gray-800)",
                        fontWeight: "300",
                    }}
                >
                    UX designer, illustrator, anthropologist, and mediocre
                    developer.
                    <br />
                    Currently leading design at{" "}
                    <a href="https://hash.ai">HASH.</a>{" "}
                </h2>
            </Header>
            <Spacer />
            <section>
                <H2>The Garden</H2>
                <Subheader>
                    A digital garden is a llalalalla nonsense, nonsense,
                    lalalalalala. Read more about it.
                </Subheader>
            </section>
            <GardenSection>
                <section style={{ gridArea: "essays" }}>
                    <SectionHeader>
                        Essays
                        <ArrowRightIcon width="28" height="28" />
                    </SectionHeader>
                    <Subheader>
                        Opinionated, narrative writing with an agenda
                    </Subheader>
                    {essays.slice(0, 6).map((essay) => (
                        <div key={essay.slug}>
                            <Link href={`/${essay.slug}`}>
                                <a>
                                    <h3>{essay.data.title}</h3>
                                </a>
                            </Link>
                        </div>
                    ))}
                </section>
                <section style={{ gridArea: "notes" }}>
                    <SectionHeader>
                        Notes
                        <ArrowRightIcon width="28" height="28" />
                    </SectionHeader>
                    <Subheader>
                        Loose, unopinionated notes on things I don’t entirely
                        understand yet.
                    </Subheader>
                    {notes.slice(0, 12).map((note) => (
                        <div key={note.slug}>
                            <Link href={`/${note.slug}`}>
                                <a>
                                    <h3>{note.data.title}</h3>
                                </a>
                            </Link>
                        </div>
                    ))}
                </section>
                <section style={{ gridArea: "patterns" }}>
                    <SectionHeader>
                        Patterns
                        <ArrowRightIcon width="28" height="28" />
                    </SectionHeader>
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
                    <SectionHeader>
                        Library
                        <ArrowRightIcon width="28" height="28" />
                    </SectionHeader>
                    <Subheader>
                        Books I’ve read and books I like the idea of having read
                    </Subheader>
                </section>
            </GardenSection>
            <Spacer />
            <section>
                <H2>Projects</H2>
                <Subheader>In the past I have made things</Subheader>
            </section>
        </Layout>
    );
}

// Styled Components

const GardenSection = styled.section`
    margin: var(--space-32) 0;
    display: grid;
    grid-gap: var(--space-16);
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
    font-size: var(--font-size-lg);
    font-weight: 100;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    svg {
        transition: all 0.3s ease-in-out;
        position: relative;
        top: 3px;
        margin-left: var(--space-8);
    }
    &:hover {
        color: var(--color-salmon);
        cursor: pointer;
        svg {
            position: relative;
            top: 3px;
            margin-left: var(--space-16);
            color: var(--color-salmon);
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
`;

// Fetches the data for the page.

export function getStaticProps() {
    const essays = essayFilePaths.map((filePath) => {
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

    return { props: { essays, notes, patterns, projects } };
}
