import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import styled from "styled-components";
import NoteCard from "../components/cards/NoteCard";
import { DIARIES_PATH, diaryFilePaths } from "../utils/mdxUtils";
import Header from "../components/Header";
import TitleWithCount from "../components/TitleWithCount";

export default function Diaries({ diaries }) {
  return (
    <>
      <Header title="Notes by Maggie Appleton" />
      <Layout>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <TitleWithCount posts={diaries}>Notes</TitleWithCount>
          <Title2>
            Loose, unopinionated notes on things I don’t entirely understand
            yet.
          </Title2>
        </header>
        <NotesGrid>
          {diaries.map((note) => (
            <NoteCard
              id={note.slug}
              slug={note.slug}
              title={note.data.title}
              growthStage={note.data.growthStage}
              date={note.data.updated}
            />
          ))}
        </NotesGrid>
      </Layout>
    </>
  );
}

const NotesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;

// Fetches the data for the page.

export function getStaticProps() {
  // Get all note posts
  let diaries = diaryFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(DIARIES_PATH, filePath));
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
  const sortedDiaries = diaries.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });
  diaries = sortedDiaries;

  return { props: { diaries } };
}
