import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { ESSAYS_PATH, NOTES_PATH, PATTERNS_PATH } from "./mdxUtils";
import { slugifyTopic } from "./slugifyTopic";

// Get the slug links for each post that matches a given topic
export const getAllPostSlugsForTopic = (topic) => {
  // For each directory, get the slug links for each post that matches the topic
  const getSlugsForTopic = (dir) => {
    const files = fs.readdirSync(dir);
    const slugs = files
      .map((file) => {
        const filePath = path.join(dir, file);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        if (data.topics) {
          const slugifiedTopics = data.topics.map((topic) =>
            slugifyTopic(topic)
          );
          if (slugifiedTopics.includes(topic)) {
            return {
              slug: file.replace(".mdx", ""),
              topic: topic,
            };
          }
        }
        return null;
      })
      .filter((slug) => slug !== null);
    return slugs;
  };

  const essaySlugs = getSlugsForTopic(ESSAYS_PATH);
  const noteSlugs = getSlugsForTopic(NOTES_PATH);
  const patternSlugs = getSlugsForTopic(PATTERNS_PATH);
  return [...essaySlugs, ...noteSlugs, ...patternSlugs];
};

//     const postDirectory = ESSAYS_PATH;
//     const fileNames = fs.readdirSync(postDirectory);

//     let result = [];

//     fileNames.forEach((filename) => {
//         const fullPath = path.join(postDirectory, filename);
//         const slug = filename.replace(".mdx", "");

//         // Extracts contents of the MDX file
//         const fileContents = fs.readFileSync(fullPath, "utf8");
//         const { data } = matter(fileContents);
//         // Filter for posts that include the topic in their array
//         if (data.topics && data.topics.includes(topic)) {
//             result.push(slug);
//         }
//     });

//     // Return those posts'
//     return result;
// };

/**
 * returns {Array} - An array of objects containing the slugs for all topics in notes, patterns, and essays
 */
export const getAllTopics = () => {
  let result = [];
  [ESSAYS_PATH, NOTES_PATH, PATTERNS_PATH].forEach((dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      if (data.topics) {
        data.topics.forEach((topic) => {
          const slugifiedTopic = slugifyTopic(topic);
          if (!result.includes({ params: { topic: slugifiedTopic } }))
            result.push({ params: { topic: slugifiedTopic } });
        });
      }
    });
  });

  return result;
};

// todo: this could be a blog post?
export const getUniqueTopics = () => {
  const topics = getAllTopics().map((obj) => obj.params.topic);
  return Array.from(new Set(topics));
};
