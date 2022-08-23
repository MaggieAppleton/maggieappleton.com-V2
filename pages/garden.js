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
} from "../utils/mdxUtils";
import TitleWithCount from "../components/TitleWithCount";
import { GardenFiltersAndHits } from "../components/search/GardenFiltersAndHits";

export default function Garden({ allPosts }) {
  return (
    <>
      <Header title="The Garden of Maggie Appleton" />
      <Layout>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <TitleWithCount posts={allPosts}>The Garden</TitleWithCount>
          <Title2>
            A collection of essays, notes, and half-baked explorations I'm
            always tending to.
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

  const completeEssays = essays.filter((essay) => essay.growthStage !== 'draft')
  // Sort essays by date
  const sortedEssays = completeEssays.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  essays = sortedEssays;

  // Get all pattern posts
  let patterns = patternFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx$/, "");
    const { title, description, type, startDate, growthStage, updated } = data;

    return {
      content,
      title,
      description,
      startDate,
      updated,
      growthStage,
      type,
      slug,
      filePath,
    };
  });

  const completePatterns = patterns.filter((pattern) => pattern.growthStage !== 'draft')
  // Sort patterns by date
  const sortedPatterns = completePatterns.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  patterns = sortedPatterns;

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

  

  const completeNotes = notes.filter((note) => note.growthStage !== 'draft')
  // Sort notes by date
  const sortedNotes = completeNotes.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  notes = sortedNotes;

  const allPosts = essays.concat(notes, patterns);

  return { props: { allPosts } };
}
