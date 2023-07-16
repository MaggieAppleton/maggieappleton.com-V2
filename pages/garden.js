import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Title2 } from "../components/Typography";
import {
  essayFilePaths,
  ESSAYS_PATH,
  noteFilePaths,
  NOTES_PATH,
  patternFilePaths,
  PATTERNS_PATH,
  talksFilePaths,
  TALKS_PATH,
} from "../utils/mdxUtils";
import TitleWithCount from "../components/TitleWithCount";
import { GardenFiltersAndHits } from "../components/search/GardenFiltersAndHits";
import { podcastData } from "../posts/data/podcasts";

export default function Garden({ allPosts }) {
  allPosts = allPosts.concat(podcastData);
  return (
    <>
      <Header title="The Garden of Maggie Appleton" />
      <Layout>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <TitleWithCount posts={allPosts}>The Garden</TitleWithCount>
          <Title2>
            A collection of essays, notes, talks, podcasts, and half-baked
            explorations I'm always tending to.
          </Title2>
        </header>
        <GardenFiltersAndHits allPostData={allPosts} />
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
    const {
      title,
      description,
      growthStage,
      startDate,
      topics,
      type,
      cover,
      updated,
    } = data;

    return {
      content,
      title,
      cover,
      description,
      growthStage,
      startDate,
      topics,
      type,
      updated,
      slug,
      filePath,
    };
  });

  // Sort essays by date
  const sortedEssays = essays.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  essays = sortedEssays;

  // Get all pattern posts
  let patterns = patternFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx$/, "");
    const {
      title,
      description,
      type,
      startDate,
      updated,
      topics,
      growthStage,
    } = data;

    return {
      content,
      title,
      description,
      startDate,
      growthStage,
      updated,
      topics,
      type,
      slug,
      filePath,
    };
  });

  // Get all note posts
  let notes = noteFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx$/, "");
    const {
      title,
      description,
      growthStage,
      startDate,
      topics,
      type,
      updated,
    } = data;

    return {
      content,
      title,
      description,
      growthStage,
      startDate,
      topics,
      type,
      updated,
      slug,
      filePath,
    };
  });

  // Sort notes by date
  const sortedNotes = notes.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  notes = sortedNotes;

  // Get all talks
  let talks = talksFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(TALKS_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx$/, "");
    const { title, description, type, topics, updated, conferences, cover } =
      data;

    return {
      content,
      title,
      description,
      topics,
      updated,
      cover,
      conferences,
      type,
      slug,
      filePath,
    };
  });

  // Sort talks by date
  const sortedTalks = talks.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  talks = sortedTalks;

  const allPosts = essays.concat(notes, patterns, talks);

  return { props: { allPosts } };
}
