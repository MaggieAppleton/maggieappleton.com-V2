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
        <Wrapper>
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
                    {frontMatter.updated && (
                        <p>
                            <small>{formattedDate(frontMatter.updated)}</small>
                        </p>
                    )}
                    {frontMatter.startDate && (
                        <p>
                            <small>
                                {formattedDate(frontMatter.startDate)}
                            </small>
                        </p>
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
                </div>
            </Container>
            <StyledMain>
                <ProseWrapper>
                    <MDXRemote {...source} components={components} />
                </ProseWrapper>
            </StyledMain>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Container = styled.div`
    max-width: 20%;
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
        font-size: var(--font-size-lg);
        line-height: var(--leading-tight);
        font-weight: 400;
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
