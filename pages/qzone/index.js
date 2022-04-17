import Layout from "../../components/Layout";
import { Title1, Title2 } from "../../components/Typography";
import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../../components/mdx/ProseWrapper";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { components } from "../[slug].js";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export default function Qzone({ source }) {
  return (
    <Layout>
      <HeaderContainer>
        <Title1>My Qzone Memory</Title1>
        <Title2>
            过去那么多年我在QQ空间发了哪些段子？
        </Title2>
      </HeaderContainer>
      <MainSection>
        <ProseWrapper>
          <MDXRemote {...source} components={components} />
        </ProseWrapper>
      </MainSection>
    </Layout>
  );
}

const HeaderContainer = styled.div`
  margin: var(--space-xl) auto;
  max-width: 800px;
  @media (max-width: 768px) {
    margin: var(--space-m) 0;
    max-width: 100%;
  }
`;

const MainSection = styled.section`
  margin: var(--space-xl) auto;
  max-width: 800px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const getStaticProps = async () => {
  //get the source code of the index.mdx file
  const nowFilePath = path.join(process.cwd(), "pages", "qzone", "qzone.mdx");
  const source = fs.readFileSync(nowFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });
  //return the props
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
