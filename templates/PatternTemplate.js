import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import Layout from "../components/Layout";
import { Title1 } from "../components/Typography";
import BackHoverLink from "../components/links/BackHoverLink";
import Header from "../components/Header";

export default function PatternTemplate({
    source,
    frontMatter,
    components,
    slug,
    backlinks
}) {
    function formattedDate(date) {
        return new Date(date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }

    return (
        <>
            <Header
                title={frontMatter.title}
                description={frontMatter.description}
            />
            <Layout>
                <HeaderSection>
                    <div className="above-title">
                        <Link href="/patterns">
                            <BackHoverLink href="/patterns">
                                Patterns
                            </BackHoverLink>
                        </Link>
                    </div>
                    <Title1>{frontMatter.title}</Title1>
                    {frontMatter.description && (
                        <p>{frontMatter.description}</p>
                    )}
                    <Metadata style={{ display: "flex", flexDirection: "row" }}>
                        {frontMatter.topics && (
                            <ul>
                                {frontMatter.topics.map((topic) => (
                                    <li key={topic}>
                                        <Link href={`/topics/${topic}`}>
                                            <a>{topic}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="metadata">
                            {frontMatter.startDate && (
                                <span>
                                    Planted{" "}
                                    {formattedDate(frontMatter.startDate)}
                                </span>
                            )}
                            {frontMatter.updated && (
                                <span>
                                    Last tended{" "}
                                    {formattedDate(frontMatter.updated)}
                                </span>
                            )}
                        </div>
                    </Metadata>
                </HeaderSection>
                <StyledMain>
                    <ProseWrapper>
                        <MDXRemote {...source} components={components} />
                        {/* todo: replace this with a proper component */}
                        {backlinks.length ? <pre style={{ whiteSpace: 'pre-wrap' }}>
                            {JSON.stringify(backlinks, 4, null)}
                        </pre> : null}
                    </ProseWrapper>
                </StyledMain>
            </Layout>
        </>
    );
}

const HeaderSection = styled.header`
    max-width: 1400px;
    margin: 0 auto;
    div.above-title {
        a {
            font-family: var(--font-sans);
            font-size: var(--font-size-xs);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: bold;
        }
    }
    h1 {
        font-size: var(--font-size-3xl);
        line-height: var(--leading-tight);
        border-right: 1px solid black;
    }

    @media ${breakpoints.mediaSM} {
        padding: 0 var(--space-16);
    }
`;

const Metadata = styled.div`
    justify-content: space-between;
    div {
        margin-top: var(--space-16);
        display: flex;
        flex-direction: column;
        text-align: right;
    }
`;

const StyledMain = styled.main`
    margin-top: var(--space-16);
    padding: var(--space-64) 0;
    background: white;
    border-radius: var(--border-radius-sm);
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-80) var(--space-16);
    }
`;
