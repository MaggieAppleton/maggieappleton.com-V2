import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import TalkCard from "../components/cards/TalkCard";
import { talksFilePaths, TALKS_PATH } from "../utils/mdxUtils";
import Header from "../components/Header";
import TitleWithCount from "../components/TitleWithCount";
import MasonryGrid from "../components/MasonryGrid";

export default function Talks({ talks }) {
  return (
    <>
      <Header title="Talks by Maggie Appleton" />
      <Layout>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <TitleWithCount posts={talks}>Talks</TitleWithCount>
          <Title2>Talks presented at various conferences and meetups</Title2>
        </header>
        <MasonryGrid columnGapBottom="2rem">
          {talks.map((talk) => (
            <TalkCard
              title={talk.data.title}
              conferences={talk.data.conferences}
              date={talk.data.updated}
              id={talk.slug}
              slug={talk.slug}
              cover={talk.data.cover}
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
  let talks = talksFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(TALKS_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx$/, "");

    return {
      content,
      data,
      slug,
      filePath,
    };
  });

  // Sort talks by date
  const sortedTalks = talks.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });
  talks = sortedTalks;

  return { props: { talks } };
}
