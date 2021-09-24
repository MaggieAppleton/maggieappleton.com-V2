import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Image from "next/image";
import styled from "styled-components";
import { H1, H2, H3 } from "../components/Typography";
import Header from "../components/Header";
import Layout from "../components/Layout";
import {
    essayFilePaths,
    ESSAYS_PATH,
    noteFilePaths,
    NOTES_PATH,
    patternFilePaths,
    PATTERNS_PATH,
    projectFilePaths,
    PROJECTS_PATH,
} from "../utils/mdxUtils";

export default function Index({ essays, notes, patterns, projects }) {
    return (
        <Layout>
            <Header>
                <H1 style={{ maxWidth: "1200px" }}>
                    <b>Maggie </b>
                    makes visual essays about programming, design, and
                    anthropology.
                </H1>
                <h2
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--font-size-md)",
                        color: "var(--colour-gray-800)",
                        fontWeight: "100",
                    }}
                >
                    Currently leading design at{" "}
                    <a href="">
                        <b>HASH</b>
                    </a>
                </h2>
            </Header>

            <GardenSection>
                {[essays, notes, patterns, projects].map((content, i) => (
                    <div key={i}>
                        {content.map((item, i) => (
                            <div key={i}>
                                <Link
                                    as={`/${item.filePath.replace(
                                        /\.mdx?$/,
                                        ""
                                    )}`}
                                    href={`/[slug]`}
                                >
                                    <a>{item.data.title}</a>
                                </Link>
                                {item.data.cover && (
                                    <Image
                                        quality="80"
                                        src={item.data.cover}
                                        width="300"
                                        height="300"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </GardenSection>
        </Layout>
    );
}

// Styled Components

const GardenSection = styled.section`
    margin: var(--space-128) 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: var(--space-16);
`;

// Fetches the data for the page.

export function getStaticProps() {
    const essays = essayFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(ESSAYS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const notes = noteFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const patterns = patternFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const projects = projectFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    return { props: { essays, notes, patterns, projects } };
}
