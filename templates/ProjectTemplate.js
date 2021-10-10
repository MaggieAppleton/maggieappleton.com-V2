import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import Header from "../components/Header";

export default function ProjectTemplate({
    source,
    frontMatter,
    components,
    slug,
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
            <HeaderSection>
                <div className="above-title">
                    <Link href="/projects">
                        <a href="/projects">
                            <p>Projects</p>
                        </a>
                    </Link>
                </div>
                <h1>{frontMatter.title}</h1>
                {frontMatter.description && <p>{frontMatter.description}</p>}
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
                                Planted {formattedDate(frontMatter.startDate)}
                            </span>
                        )}
                        {frontMatter.updated && (
                            <span>
                                Last tended {formattedDate(frontMatter.updated)}
                            </span>
                        )}
                    </div>
                </Metadata>
            </HeaderSection>
            <StyledMain>
                <ProseWrapper>
                    <MDXRemote {...source} components={components} />
                </ProseWrapper>
            </StyledMain>
        </>
    );
}

const HeaderSection = styled.header`
    max-width: 780px;
    margin: 0 auto;
    div.above-title {
        display: flex;
        flex-direction: row;
        p {
            margin: 0 var(--space-12);
            font-family: var(--font-sans);
            font-size: var(--font-size-xs);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: bold;
        }
        svg {
            position: relative;
            top: 1px;
        }
    }
    h1 {
        font-size: var(--font-size-2xl);
        line-height: var(--leading-tight);
        padding: var(--space-24) 0 var(--space-48);
        border-bottom: 1px solid var(--color-gray-300);
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
    background: linear-gradient(var(--color-cream) 0, white 110px);
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-80) var(--space-16);
    }
`;
