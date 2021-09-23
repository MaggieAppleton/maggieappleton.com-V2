import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "posts", "essays");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

// POSTS_PATH is useful when you want to get the path to a specific file
export const NOTES_PATH = path.join(process.cwd(), "posts", "notes");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const noteFilePaths = fs
    .readdirSync(NOTES_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));
