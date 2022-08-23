import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import EssayCard from "../components/cards/EssayCard";
import { essayFilePaths, ESSAYS_PATH } from "../utils/mdxUtils";
import Header from "../components/Header";
import TitleWithCount from "../components/TitleWithCount";

export default function Essays({ essays }) {
  return (
    <>
      <Header title="Essays by Maggie Appleton" />
      <Layout>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <TitleWithCount posts={essays}>Essays</TitleWithCount>
          <Title2>
            Opinionated, longform narrative writing with an agenda.
          </Title2>
        </header>
        <MasonryGrid>
          {essays.map((essay, i) => (
            <EssayCard
              key={i}
              id={essay.slug}
              slug={essay.slug}
              cover={essay.data.cover}
              title={essay.data.title}
              growthStage={essay.data.growthStage}
              date={essay.data.updated}
            />
          ))}
        </MasonryGrid>
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

    return {
      content,
      data,
      slug,
      filePath,
    };
  });

  const completeEssays = essays.filter((essay) => essay.data.growthStage !== 'draft')
  // Sort essays by date
  const sortedEssays = completeEssays.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });
  essays = sortedEssays;

  return { props: { essays } };
}
