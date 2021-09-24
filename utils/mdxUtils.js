import fs from "fs";
import path from "path";

// ESSAYS_PATH is useful when you want to get the path to a specific file
export const ESSAYS_PATH = path.join(process.cwd(), "posts", "essays");

// essayFilePaths is the list of all mdx files inside the ESSAYS_PATH directory
export const essayFilePaths = fs
    .readdirSync(ESSAYS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

export const NOTES_PATH = path.join(process.cwd(), "posts", "notes");

export const noteFilePaths = fs
    .readdirSync(NOTES_PATH)
    .filter((path) => /\.mdx?$/.test(path));

export const PATTERNS_PATH = path.join(process.cwd(), "posts", "patterns");

export const patternFilePaths = fs
    .readdirSync(PATTERNS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

export const PROJECTS_PATH = path.join(process.cwd(), "posts", "projects");

export const projectFilePaths = fs
    .readdirSync(PROJECTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));
