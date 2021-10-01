import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { breakpoints } from "../utils/breakpoints";
import styled from "styled-components";
import { Spacer } from "../components/Spacer";
import { Title1, Title2, Title3 } from "../components/Typography";
import EssayCard from "../components/cards/EssayCard";
import ProjectCard from "../components/cards/ProjectCard";
import BookCard from "../components/cards/BookCard";
import { bookData } from "../posts/books";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Layout from "../components/Layout";
import UnderlineHoverLink from "../components/links/UnderlineHoverLink";
import GrowthIcon from "../components/Icons/GrowthIcon";
import { useInView } from "react-intersection-observer";
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
    // React intersection observer hook. The 'InView' value is true when the element is in view, and false when it's not. We need to assign the ref property to the element we want to monitor.
    const { ref, inView } = useInView();

    const collectionAnimation = {
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const itemAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };

    return (
        <Layout>
            <Header>
                <Title1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    style={{ maxWidth: "1200px", marginTop: "var(--space-32)" }}
                >
                    <b>Maggie </b>
                    makes visual essays about programming, design, and
                    anthropology.
                </Title1>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
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
                    <UnderlineHoverLink href="https://hash.ai">
                        <b>HASH</b>
                    </UnderlineHoverLink>{" "}
                </motion.h2>
            </Header>
            <Spacer large />
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
            >
                <Link href="/garden">
                    <a href="/garden">
                        <Title2>The Garden</Title2>
                    </a>
                </Link>
                <Subheader>
                    A digital garden is a llalalalla nonsense, nonsense,
                    lalalalalala. Read more about it.
                </Subheader>
            </motion.section>
            <GardenSection
                variants={collectionAnimation}
                initial="hidden"
                animate="visible"
            >
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
                        {essays.map((essay, i) => (
                            <EssayCard
                                key={i}
                                variants={itemAnimation}
                                slug={essay.slug}
                                cover={essay.data.cover}
                                title={essay.data.title}
                                growthStage={essay.data.growthStage}
                                date={essay.data.updated}
                            />
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
                                <IndexNoteCard>
                                    {note.data.growthStage && (
                                        <GrowthIcon
                                            growthStage={note.data.growthStage}
                                        />
                                    )}
                                    <h3>{note.data.title}</h3>
                                </IndexNoteCard>
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
                        <Link key={pattern.slug} href={`/${pattern.slug}`}>
                            <a>
                                <IndexPatternCard>
                                    <h3>{pattern.data.title}</h3>
                                </IndexPatternCard>
                            </a>
                        </Link>
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
                            <BookCard
                                small
                                subtitle={book.subtitle}
                                key={book.title}
                                cover={book.cover}
                                title={book.title}
                                author={book.author}
                                link={book.link}
                            />
                        ))}
                    </div>
                </section>
            </GardenSection>
            <Spacer />
            <section>
                <Link href="/projects">
                    <a href="/projects">
                        <Title2>Projects</Title2>
                    </a>
                </Link>
                <Subheader>In the past I have made things</Subheader>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gridGap: "var(--space-24)",
                    }}
                >
                    {projects.slice(0, 3).map((project, i) => (
                        <ProjectCard
                            key={i}
                            slug={project.slug}
                            title={project.data.title}
                            cover={project.data.cover}
                            date={project.data.updated}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    );
}

// Styled Components

const IndexPatternCard = styled.div`
    margin: var(--space-16) 0;
    h3 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        transition: all 0.3s ease-in-out;
    }
    h3::before {
        content: "";
        display: inline-block;
        width: 2px;
        height: 1.2rem;
        position: relative;
        top: 2px;
        background: var(--color-sea-blue);
        margin-right: var(--space-12);
        transition: all 0.3s ease-in-out;
    }
    h3:hover {
        color: var(--color-crimson);
        transform: scale3d(1, 1.03, 1.03);
        ::before {
            width: var(--space-12);
        }
    }
    &:hover {
    }
`;

const IndexNoteCard = styled.div`
    display: flex;
    padding: var(--space-16) 0 1.2rem;
    border-bottom: 1px solid var(--color-tinted-cream);
    transition: all 0.3s ease-in-out;
    svg {
        position: relative;
        top: 5px;
        flex-shrink: 0;
    }
    h3 {
        color: var(--color-gray-800);
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin-left: var(--space-16);
        transition: all 0.3s ease-in-out;
    }
    &:hover {
        border-bottom: 1px solid var(--color-sea-blue);
        h3 {
            color: var(--color-crimson);
        }
        transform: scale3d(1.02, 1.02, 1.02);
    }
`;

const GardenSection = styled(motion.section)`
    margin: var(--space-64) 0 var(--space-24);
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
        transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
        position: relative;
        top: 0px;
        margin-left: var(--space-8);
    }
    &:hover {
        transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
        color: var(--color-crimson);
        cursor: pointer;
        svg {
            margin-left: var(--space-12);
            color: var(--color-sea-blue);
        }
    }
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

    // Filter essays for featured property
    const filteredEssays = essays
        .filter((essay) => essay.data.featured === true)
        .slice(0, 4);
    // Sort filtered essays by date
    const sortedEssays = filteredEssays.sort((a, b) => {
        return new Date(b.data.updated) - new Date(a.data.updated);
    });
    essays = filteredEssays;

    // Get all note posts
    let notes = noteFilePaths.map((filePath) => {
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

    // Sort notes in reverse order by date
    const sortedNotes = notes.sort((a, b) => {
        return new Date(b.data.updated) - new Date(a.data.updated);
    });
    notes = sortedNotes;

    let patterns = patternFilePaths.map((filePath) => {
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

    let projects = projectFilePaths.map((filePath) => {
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

    // Filter projects for featured property
    const filteredProjects = projects
        .filter((project) => project.data.featured === true)
        .slice(0, 4);
    // Sort filtered essays by date
    const sortedProjects = filteredProjects.sort((a, b) => {
        return new Date(b.data.updated) - new Date(a.data.updated);
    });
    projects = sortedProjects;

    return { props: { essays, notes, patterns, projects } };
}
