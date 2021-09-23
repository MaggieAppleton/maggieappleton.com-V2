import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "../components/CustomLink";
import Layout from "../components/Layout";
import { noteFilePaths, NOTES_PATH } from "../utils/mdxUtils";
import { essayFilePaths, ESSAYS_PATH } from "../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    a: CustomLink,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    TestComponent: dynamic(() => import("../components/TestComponent")),
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
            </div>
            <main>
                <MDXRemote {...source} components={components} />
            </main>
        </Layout>
    );
}

export const getStaticProps = async ({ params }) => {
    const essays = fs.readdirSync(ESSAYS_PATH);
    const type = essays.find((e) => e.includes(params.slug)) ? "post" : "note";

    const filePath =
        type === "note"
            ? path.join(NOTES_PATH, `${params.slug}.mdx`)
            : path.join(ESSAYS_PATH, `${params.slug}.mdx`);

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
    const notePaths = noteFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ""))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    const postPaths = essayFilePaths
        .map((path) => path.replace(/\.mdx?$/, ""))
        .map((slug) => ({ params: { slug } }));
    const paths = notePaths.concat(postPaths);

    return {
        paths,
        fallback: false,
    };
};
