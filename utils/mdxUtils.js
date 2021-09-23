import fs from "fs";
import path from "path";

// ESSAYS_PATH is useful when you want to get the path to a specific file
export const ESSAYS_PATH = path.join(process.cwd(), "posts", "essays");

// essayFilePaths is the list of all mdx files inside the ESSAYS_PATH directory
export const essayFilePaths = fs
    .readdirSync(ESSAYS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

// ESSAYS_PATH is useful when you want to get the path to a specific file
export const NOTES_PATH = path.join(process.cwd(), "posts", "notes");

// essayFilePaths is the list of all mdx files inside the ESSAYS_PATH directory
export const noteFilePaths = fs
    .readdirSync(NOTES_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));
