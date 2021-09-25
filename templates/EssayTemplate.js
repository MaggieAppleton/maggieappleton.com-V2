import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import GrowthIcon from "../components/Icons/GrowthIcon";

export default function EssayTemplate({ source, frontMatter, components }) {
    return (
        <>
            <Container>
                <div>
                    <Link href="/essays">
                        <a href="/essays">
                            <p>Essays</p>
                        </a>
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
                    <div>
                        <span>Planted {frontMatter.startDate}</span>
                        <span>Last tended {frontMatter.updated}</span>
                    </div>
                </Metadata>
            </Container>
            <StyledMain>
                <ProseWrapper>
                    <MDXRemote {...source} components={components} />
                </ProseWrapper>
            </StyledMain>
        </>
    );
}

const Container = styled.div`
    max-width: 780px;
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

const Metadata = styled.div`
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
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
    margin-top: var(--space-80);
    padding: var(--space-80) 0 var(--space-128);
    background: white;
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-80) var(--space-16);
    }
`;
