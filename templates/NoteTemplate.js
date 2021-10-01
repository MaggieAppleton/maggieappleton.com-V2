import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import GrowthIcon from "../components/Icons/GrowthIcon";
import BackHoverLink from "../components/links/BackHoverLink";
import RelativeDate from "../components/templates/RelativeDate";
import Header from "../components/Header";

export default function NoteTemplate({ source, frontMatter, components }) {
    return (
        <>
        <Header
                title={frontMatter.title}
                description={frontMatter.description}
                keywords={...frontMatter.topics}
            />
            <HeaderSection>
                <div>
                    <Link href="/notes">
                        <BackHoverLink href="/notes">notes</BackHoverLink>
                    </Link>
                    <GrowthIcon
                        size="16"
                        growthStage={frontMatter.growthStage}
                    />
                    <p>{frontMatter.growthStage}</p>
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
                                Planted{" "}
                                <RelativeDate
                                    postDate={frontMatter.startDate}
                                />
                            </span>
                        )}
                        {frontMatter.updated && (
                            <span>
                                Last tended{" "}
                                <RelativeDate postDate={frontMatter.updated} />
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
    width: 780px;
    margin: var(--space-24) auto 0;
    div:first-child {
        a,
        p {
            display: inline-block;
            font-family: var(--font-sans);
            font-size: var(--font-size-xs);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: bold;
            padding-right: var(--space-16);
        }
        p {
            padding-left: var(--space-12);
        }
        svg {
            position: relative;
            top: 3px;
        }
    }
    h1 {
        font-size: var(--font-size-2xl);
        line-height: var(--leading-tight);
        padding: var(--space-24) 0 var(--space-48);
        border-bottom: 1px solid var(--color-gray-300);
        @media ${breakpoints.mediaSM} {
            font-size: var(--font-size-xl);
        }
    }

    @media ${breakpoints.mediaSM} {
        padding: 0 var(--space-16);
    }
`;

const Metadata = styled.section`
    justify-content: space-between;
    div {
        margin-top: var(--space-16);
        display: flex;
        flex-direction: column;
        text-align: right;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 70%;
        padding: 0;
        margin-top: var(--space-16);
        li {
            margin-right: var(--space-16);
            margin-bottom: var(--space-4);
            font-family: var(--font-sans);
            font-size: var(--font-size-sm);
        }
    }
`;

const StyledMain = styled.main`
    margin-top: var(--space-16);
    padding: var(--space-80) 0 var(--space-128);
    background: linear-gradient(var(--color-cream) 0, white 110px);
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-80) var(--space-16);
    }
`;
