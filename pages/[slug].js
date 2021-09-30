import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import BasicImage from "../components/mdx/BasicImage";
import TooltipLink from "../components/links/TooltipLink";
import EssayTemplate from "../templates/EssayTemplate";
import NoteTemplate from "../templates/NoteTemplate";
import ProjectTemplate from "../templates/ProjectTemplate";
import PatternTemplate from "../templates/PatternTemplate";
import { Title1, Title2, Title3, Title4 } from "../components/Typography";
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
    h1: Title1,
    h2: Title2,
    h3: Title3,
    h4: Title4,
    img: BasicImage,
    a: TooltipLink,
    TwoColumn: dynamic(() => import("../components/mdx/TwoColumn")),
    IntroParagraph: dynamic(() => import("../components/mdx/IntroParagraph")),
    FullWidthImage: dynamic(() => import("../components/mdx/FullWidthImage")),
    TweetEmbed: dynamic(() => import("../components/mdx/TweetEmbed")),
    Head,
};

export default function NotePage({ source, frontMatter }) {
    if (frontMatter.type === "note") {
        return (
            <NoteTemplate
                source={source}
                frontMatter={frontMatter}
                components={components}
            />
        );
    } else if (frontMatter.type === "essay") {
        return (
            <EssayTemplate
                source={source}
                frontMatter={frontMatter}
                components={components}
            />
        );
    } else if (frontMatter.type === "project") {
        return (
            <ProjectTemplate
                source={source}
                frontMatter={frontMatter}
                components={components}
            />
        );
    } else if (frontMatter.type === "pattern") {
        return (
            <PatternTemplate
                source={source}
                frontMatter={frontMatter}
                components={components}
            />
        );
    }
    // } else if (frontMatter.type === "pattern") {
    //     return (
    //         <PatternTemplate
    //             source={source}
    //             frontMatter={frontMatter}
    //             components={components}
    //         />
    //     );
    // } else if (frontMatter.type === "project") {
    //     return (
    //         <ProjectTemplate
    //             source={source}
    //             frontMatter={frontMatter}
    //             components={components}
    //         />
    //     );
    // }
}

export const getStaticProps = async ({ params }) => {
    const essays = fs.readdirSync(ESSAYS_PATH);
    const notes = fs.readdirSync(NOTES_PATH);
    const patterns = fs.readdirSync(PATTERNS_PATH);
    const projects = fs.readdirSync(PROJECTS_PATH);

    // const type = essays.find((e) => e.includes(params.slug)) ? "post" : "note";

    let type;

    if (projects.find((file) => file.includes(params.slug))) {
        type = "project";
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
        case "project":
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
