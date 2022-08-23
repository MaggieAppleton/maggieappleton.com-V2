import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title2 } from "../components/Typography";
import styled from "styled-components";
import PatternCard from "../components/cards/PatternCard";
import { patternFilePaths, PATTERNS_PATH } from "../utils/mdxUtils";
import Header from "../components/Header";
import TitleWithCount from "../components/TitleWithCount";

export default function Patterns({ patterns }) {
  return (
    <>
      <Header title="Patterns by Maggie Appleton" />
      <Layout>
        <header style={{ marginBottom: "var(--space-xl)" }}>
          <TitleWithCount posts={patterns}>Pattern Catalogue</TitleWithCount>
          <Title2>
            A catalogue of design patterns gathered from my own observations and
            research.
          </Title2>
        </header>
        <PatternGrid>
          {patterns.map((pattern) => (
            <PatternCard
              id={pattern.slug}
              slug={pattern.slug}
              title={pattern.data.title}
              growthStage={pattern.data.growthStage}
              date={pattern.data.updated}
            />
          ))}
        </PatternGrid>
      </Layout>
    </>
  );
}

const PatternGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;

// Fetches the data for the page.

export function getStaticProps() {
  // Get all note posts
  let patterns = patternFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.replace(/\.mdx$/, "");

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
  patterns = sortedPatterns


  return { props: { patterns } };
}
