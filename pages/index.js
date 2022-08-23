import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { breakpoints } from "../utils/breakpoints";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import generateRSSFeed from "../utils/generateRSSFeed";
// Components
import { Spacer } from "../components/Spacer";
import { Title1, Title2, SmallTitle2 } from "../components/Typography";
import EssayCard from "../components/cards/EssayCard";
import ProjectCard from "../components/cards/ProjectCard";
import BookCard from "../components/cards/BookCard";
import PatternCard from "../components/cards/PatternCard";
import { bookData } from "../posts/data/books";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Layout from "../components/Layout";
import UnderlineHoverLink from "../components/links/UnderlineHoverLink";
import GrowthIcon from "../components/icons/GrowthIcon";
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

export default function Index({
  sortedEssays: essays,
  sortedNotes: notes,
  sortedProjects: projects,
  sortedPatterns: patterns,
}) {
  // React intersection observer hook. The 'InView' value is true when the element is in view, and false when it's not. We need to assign the ref property to the element we want to monitor.

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
    // <NextSeo>
    <>
      <Header title="Maggie Appleton" />
      <Layout>
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-m)",
          }}
        >
          <Title1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            style={{
              marginTop: "var(--space-m)",
            }}
          >
            <b>Maggie </b>
            makes visual essays about programming, design, and anthropology.
          </Title1>
          <SmallTitle2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Designer, anthropologist, and mediocre developer
            <br />
            Currently leading design at{" "}
            <UnderlineHoverLink href="https://ought.org">
              <b>Ought</b>
            </UnderlineHoverLink>{" "}
          </SmallTitle2>
        </header>
        <Spacer size="large" />
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <Link href="/garden">
            <a href="/garden">
              <Title2
                style={{
                  fontSize: "var(--font-size-2xl)",
                }}
              >
                The Garden
              </Title2>
            </a>
          </Link>
          <Subheader>
            A digital garden is a collection of imperfect notes, essays, and
            ideas growing slowly over time.{" "}
            <ReadmoreLink href="/garden-history">
              Learn more
              <ArrowRightIcon width="18" height="18" />
            </ReadmoreLink>
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
              Opinionated, longform narrative writing with an agenda
            </Subheader>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gridGap: "var(--space-2xs)",
              }}
            >
              {essays.map((essay, i) => (
                <EssayCard
                  id={essay.slug}
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
              Loose, unopinionated notes on things I don’t entirely understand
              yet.
            </Subheader>
            {notes.slice(0, 12).map((note) => (
              <Link key={note.slug} href={`/${note.slug}`}>
                <a>
                  <IndexNoteCard>
                    {note.data.growthStage && (
                      <GrowthIcon growthStage={note.data.growthStage} />
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
                  Patterns
                  <ArrowRightIcon width="18" height="18" />
                </SectionHeader>
              </a>
            </Link>
            <Subheader>
              Design patterns gathered from my own observations and research.
            </Subheader>
            <div style={{ marginLeft: "-1.4rem" }}>
              {patterns.map((pattern) => (
                <PatternCard
                  key={pattern.slug}
                  slug={pattern.slug}
                  title={pattern.data.title}
                  growthStage={pattern.data.growthStage}
                  date={pattern.data.updated}
                />
              ))}
            </div>
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
              Books I’ve read and books I like the idea of having read.
            </Subheader>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gridGap: "var(--space-2xs)",
              }}
            >
              {bookData.slice(0, 8).map((book, i) => (
                <BookCard
                  small
                  subtitle={book.subtitle}
                  key={i}
                  cover={book.cover}
                  title={book.title}
                  author={book.author}
                  link={book.link}
                />
              ))}
            </div>
          </section>
        </GardenSection>
        {/* <Spacer />
        <section>
          <Link href="/projects">
            <a href="/projects">
              <Title2
                style={{
                  fontSize: "var(--font-size-2xl)",
                }}
              >
                Projects
              </Title2>
            </a>
          </Link>
          <Subheader>In the past I have made things</Subheader>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gridGap: "var(--space-s)",
            }}
          >
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard
                key={i}
                slug={project.slug}
                title={project.data.title}
                cover={project.data.cover}
                date={project.data.updated}
                topics={project.data.topics}
              />
            ))}
          </div>
        </section> */}
      </Layout>
    </>
  );
}

// Styled Components

const ReadmoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  svg {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    position: relative;
    top: 1px;
    margin-left: var(--space-3xs);
  }
  &:hover {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    color: var(--color-bright-crimson);
    cursor: pointer;
    svg {
      margin-left: var(--space-2xs);
      color: var(--color-sea-blue);
    }
  }
`;

const IndexNoteCard = styled.div`
  display: flex;
  padding: var(--space-xs) 0 1.2rem;
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
    margin-left: var(--space-xs);
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
  margin: var(--space-xl) 0 var(--space-s);
  display: grid;
  grid-gap: var(--space-xl);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "essays essays notes"
    "patterns library library";
  @media ${breakpoints.mediaMD} {
    grid-gap: var(--space-s);
  }
  @media ${breakpoints.mediaSM} {
    grid-template-columns: 1fr;
    grid-gap: var(--space-l);
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
  margin-bottom: var(--space-3xs);
  svg {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    position: relative;
    top: 0px;
    margin-left: var(--space-3xs);
  }
  &:hover {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    color: var(--color-bright-crimson);
    cursor: pointer;
    svg {
      margin-left: var(--space-2xs);
      color: var(--color-sea-blue);
    }
  }
`;

const Subheader = styled.p`
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--color-gray-800);
  margin-bottom: var(--space-m);
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

  const completeEssays = essays.filter((essay) => essay.data.growthStage !== 'draft')
  // Filter essays for featured property
  const filteredEssays = completeEssays
    .filter((essay) => essay.data.featured === true)
    .slice(0, 4);
  // Sort filtered essays by date
  const sortedEssays = filteredEssays.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });

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

  const completeNotes = notes.filter((note) => note.data.growthStage !== 'draft')
  // Sort notes in reverse order by date
  const sortedNotes = completeNotes.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
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

  // Get all pattern posts
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

  const completePatterns = patterns.filter((pattern) => pattern.data.growthStage !== 'draft')
  // Sort patterns by date
  const sortedPatterns = completePatterns.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });

  // Filter projects for featured property
  // const filteredProjects = projects
  //     .filter((project) => project.data.featured === true)
  //     .slice(0, 4);
  // Sort filtered essays by date
  const sortedProjects = projects.slice(0, 4).sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });

  const allPosts = [...completeEssays, ...completeNotes, ...projects, ...completePatterns];

  // Generate RSS Feed
  generateRSSFeed(allPosts);

  return {
    props: { sortedEssays, sortedNotes, sortedProjects, sortedPatterns },
  };
}
