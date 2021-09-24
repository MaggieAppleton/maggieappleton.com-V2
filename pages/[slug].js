import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";

import Layout from "../components/Layout";
import BasicImage from "../components/mdx/BasicImage";
import ProseWrapper from "../components/mdx/ProseWrapper";
import {
    projectFilePaths,
    noteFilePaths,
    essayFilePaths,
    patternFilePaths,
    ESSAYS_PATH,
    NOTES_PATH,
    PATTERNS_PATH,
    PROJECTS_PATH,
} from "../utils/mdxUtils";
// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    // a: CustomLink,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    img: BasicImage,
    FullBleedImage: dynamic(() => import("../components/mdx/FullBleedImage")),

    Head,
};

export default function NotePage({ source, frontMatter }) {
    return (
        <Layout type={frontMatter.type}>
            <header>
                <nav>
                    <Link href="/">
                        <a>👈 Go back home</a>
                    </Link>
                </nav>
            </header>
            <div className="post-header">
                <h1>{frontMatter.title}</h1>
                {frontMatter.description && (
                    <p className="description">{frontMatter.description}</p>
                )}
                {frontMatter.topics && (
                    <ul className="topics">
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
            <main>
                <ProseWrapper>
                    <MDXRemote {...source} components={components} />
                </ProseWrapper>
            </main>
        </Layout>
    );
}

export const getStaticProps = async ({ params }) => {
    const essays = fs.readdirSync(ESSAYS_PATH);
    const notes = fs.readdirSync(NOTES_PATH);
    const patterns = fs.readdirSync(PATTERNS_PATH);
    const projects = fs.readdirSync(PROJECTS_PATH);

    // const type = essays.find((e) => e.includes(params.slug)) ? "post" : "note";

    let type;

    if (projects.find((file) => file.includes(params.slug))) {
        type = "case-study";
    } else if (essays.find((file) => file.includes(params.slug))) {
        type = "essay";
    } else if (notes.find((file) => file.includes(params.slug))) {
        type = "note";
    } else if (patterns.find((file) => file.includes(params.slug))) {
        type = "pattern";
    }

    // switch case statement to determine which file to load
    let filePath;
    switch (type) {
        case "essay":
            filePath = path.join(ESSAYS_PATH, `${params.slug}.mdx`);
            break;
        case "note":
            filePath = path.join(NOTES_PATH, `${params.slug}.mdx`);
            break;
        case "pattern":
            filePath = path.join(PATTERNS_PATH, `${params.slug}.mdx`);
            break;
        case "case-study":
            filePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
            break;
    }

    // const filePath =
    //     type === "note"
    //         ? path.join(NOTES_PATH, `${params.slug}.mdx`)
    //         : path.join(ESSAYS_PATH, `${params.slug}.mdx`);

    const source = fs.readFileSync(filePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

export const getStaticPaths = async () => {
    // Get slugs for all file paths passed in
    const getSlugParams = (filePaths) =>
        filePaths
            // Remove the .mdx extension
            .map((path) => path.replace(/\.mdx?$/, ""))
            .map((slug) => ({ params: { slug } }));

    const notePaths = getSlugParams(noteFilePaths);
    const essayPaths = getSlugParams(essayFilePaths);
    const patternPaths = getSlugParams(patternFilePaths);
    const projectPaths = getSlugParams(projectFilePaths);

    // Combine all paths into one array
    const paths = notePaths.concat(essayPaths, patternPaths, projectPaths);

    return {
        paths,
        fallback: false,
    };
};
