const fs = require("fs");
const path = require("path");

// // Recursive function that calls itself to fetches all the files, including those in subdirectories
// const getAllDirectoryFiles = function (dirPath, arrayOfFiles) {
//     let files = fs.readdirSync(dirPath);

//     arrayOfFiles = arrayOfFiles || [];

//     files.forEach(function (file) {
//         if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//             arrayOfFiles = getAllDirectoryFiles(
//                 dirPath + "/" + file,
//                 arrayOfFiles
//             );
//         } else {
//             arrayOfFiles.push(file);
//         }
//     });

//     return arrayOfFiles;
// };

// ESSAYS_PATH is useful when you want to get the path to a specific file
const ESSAYS_PATH = path.join(process.cwd(), "posts", "essays");

const essayFilePaths = fs
  .readdirSync(ESSAYS_PATH)
  // Only include MDX files
  .filter((path) => /\.mdx?$/.test(path));

const NOTES_PATH = path.join(process.cwd(), "posts", "notes");

const noteFilePaths = fs
  .readdirSync(NOTES_PATH)
  .filter((path) => /\.mdx?$/.test(path));

const PATTERNS_PATH = path.join(process.cwd(), "posts", "patterns");

const patternFilePaths = fs
  .readdirSync(PATTERNS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

const PROJECTS_PATH = path.join(process.cwd(), "posts", "projects");

const projectFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

module.exports = {
  essayFilePaths,
  noteFilePaths,
  projectFilePaths,
  patternFilePaths,
  PATTERNS_PATH,
  ESSAYS_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
};
