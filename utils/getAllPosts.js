import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
    NOTES_PATH,
    ESSAYS_PATH,
    PATTERNS_PATH,
    PROJECTS_PATH,
} from "./mdxUtils";

// Get Slugs
export const getAllPostSlugs = () => {
    const fileNames = fs.readdirSync(ESSAYS_PATH);
    const published = [];
    fileNames.forEach((filename) => {
        const slug = filename.replace(".mdx", "");
        const fullPath = path.join(ESSAYS_PATH, filename);

        // Extracts contents of the MDX file
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        if (shouldNotPublish(data)) {
            return;
        }

        published.push(filename);
    });

    return published.map((filename) => {
        return {
            params: {},
        };
    });
};

// Get Post based on Slug
export const getPostdata = async (slug) => {
    // Get full path and content from each post
    function getFilePathsandContents(dir) {
        const fullPath = path.join(dir, `${slug}.mdx`);
        const postContents = fs.readFileSync(fullPath, "utf8");
        return postContents;
    }

    let allPostContent = [
        getFilePathsandContents(ESSAYS_PATH),
        getFilePathsandContents(NOTES_PATH),
        getFilePathsandContents(PATTERNS_PATH),
    ];

    return allPostContent.flat();
};
