import fs from "fs";
import matter from "gray-matter";
import path from "path";

import {
    NOTES_PATH,
    ESSAYS_PATH,
    PATTERNS_PATH,
} from "./mdxUtils.js";

// Get Post based on Slug
export const getPostdata = async (slug) => {
    const essays = fs.readdirSync(ESSAYS_PATH);
    const notes = fs.readdirSync(NOTES_PATH);

    let post;
    if (essays.includes(slug + ".mdx")) {
        post = fs.readFileSync(path.join(ESSAYS_PATH, slug + ".mdx"), "utf8");
    } else if (notes.includes(slug + ".mdx")) {
        post = fs.readFileSync(path.join(NOTES_PATH, slug + ".mdx"), "utf8");
    } else {
        post = fs.readFileSync(path.join(PATTERNS_PATH, slug + ".mdx"), "utf8");
    }

    return post;
};

const getDataForBacklinks = (fileNames, filePath) => fileNames.map(fileName => {
    const file = fs.readFileSync(path.join(filePath, fileName), "utf8");
    const { content, data } = matter(file);
    const slug = fileName.replace(/\.mdx?$/, "");
    const { title, aliases, growthStage } = data;

    return {
        content,
        slug,
        title,
        aliases,
        growthStage
    }
})

export const getAllPostData = () => {
    // get all note files
    const essayFiles = fs.readdirSync(ESSAYS_PATH);
    const noteFiles = fs.readdirSync(NOTES_PATH);
    const patternFiles = fs.readdirSync(PATTERNS_PATH);

    const essaysData = getDataForBacklinks(essayFiles, ESSAYS_PATH);
    const notesData = getDataForBacklinks(noteFiles, NOTES_PATH);
    const patternsData = getDataForBacklinks(patternFiles, PATTERNS_PATH);
    
    return [...essaysData, ...notesData, ...patternsData];
}