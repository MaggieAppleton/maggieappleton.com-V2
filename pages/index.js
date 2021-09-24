import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Image from "next/image";

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
            <h1>Home Page</h1>

            {[essays, notes, patterns, projects].map((content, i) => (
                <div key={i}>
                    <ul>
                        {content.map((item, i) => (
                            <li key={i}>
                                <Link
                                    as={`/${item.filePath.replace(
                                        /\.mdx?$/,
                                        ""
                                    )}`}
                                    href={`/[slug]`}
                                >
                                    <a>{item.data.title}</a>
                                </Link>
                                {console.log(item.data.cover)}
                                {item.data.cover && (
                                    <Image
                                        quality="80"
                                        src={item.data.cover}
                                        width="300"
                                        height="300"
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Layout>
    );
}

// Styled Components

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
