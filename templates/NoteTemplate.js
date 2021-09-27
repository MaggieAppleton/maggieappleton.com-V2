import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/posts/ProseWrapper";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import GrowthIcon from "../components/Icons/GrowthIcon";

export default function NoteTemplate({ source, frontMatter, components }) {
    function formattedDate(date) {
        return new Date(date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }

    return (
        <>
            <Container>
                <div>
                    <Link href="/notes">
                        <a href="/notes">
                            <p>notes</p>
                        </a>
                    </Link>
                    <GrowthIcon
                        size="16"
                        growthStage={frontMatter.growthStage}
                    />
                    <p>{frontMatter.growthStage}</p>
                </div>
                <div>
                    <h1>{frontMatter.title}</h1>
                    {frontMatter.description && (
                        <p>{frontMatter.description}</p>
                    )}
                    <Metadata className="metadata">
                        {frontMatter.updated && (
                            <span>{formattedDate(frontMatter.updated)}</span>
                        )}
                        {frontMatter.startDate && (
                            <span>{formattedDate(frontMatter.startDate)}</span>
                        )}
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
                    </Metadata>
                </div>
            </Container>
            <StyledMain>
                <ProseWrapper>
                    <MDXRemote {...source} components={components} />
                </ProseWrapper>
            </StyledMain>
        </>
    );
}

const Metadata = styled.section`
    display: flex;
    flex-direction: column;
    ul {
        display: inline-block;
        list-style: none;
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
    }
`;

const Container = styled.div`
    width: 780px;
    margin: 0 auto;
    div:first-child {
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
    div:nth-child(2) {
        display: flex;
        flex-direction: row;
    }
    h1 {
        font-size: var(--font-size-xl);
        line-height: var(--leading-tight);
        font-weight: 400;
        padding: var(--space-24) 0 var(--space-24);
        border-right: 1px solid var(--color-gray-300);
        @media ${breakpoints.mediaSM} {
            font-size: var(--font-size-xl);
        }
    }

    @media ${breakpoints.mediaSM} {
        padding: 0 var(--space-16);
    }
`;

const StyledMain = styled.main`
    margin-top: var(--space-80);
    padding: var(--space-80) 0 var(--space-128);
    background: white;
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-80) var(--space-16);
    }
`;
