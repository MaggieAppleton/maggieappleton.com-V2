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

export const getAllPostData = () => {
    // get all note files
    const noteFiles = fs.readdirSync(NOTES_PATH);
    // read note files
    const notesData = noteFiles.map(file => {
        console.log('file', file);

        const note = fs.readFileSync(path.join(NOTES_PATH, file), "utf8");
        const { content, data } = matter(note);
        const slug = file.replace(/\.mdx?$/, "");
        
        console.log('data', data);
        console.log('slug', slug)

        const { title, aliases, growthStage } = data;

        return {
            content,
            slug,
            title,
            aliases,
            growthStage
        }
    })

    return notesData;
}