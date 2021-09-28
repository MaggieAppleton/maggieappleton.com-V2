import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { ESSAYS_PATH, NOTES_PATH, PATTERNS_PATH } from "./mdxUtils";

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
                if (data.topics && data.topics.includes(topic)) {
                    return {
                        slug: file.replace(".mdx", ""),
                        title: data.title,
                    };
                }
                return null;
            })
            .filter((slug) => slug !== null);
        return slugs;
    };

    const allSlugs = [
        getSlugsForTopic(ESSAYS_PATH),
        getSlugsForTopic(NOTES_PATH),
        getSlugsForTopic(PATTERNS_PATH),
    ];
    return allSlugs.flat();
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

export const getAllTopics = () => {
    const postDirectory = ESSAYS_PATH;

    const fileNames = fs.readdirSync(postDirectory);

    let result = [];

    fileNames.forEach((filename) => {
        const fullPath = path.join(postDirectory, filename);

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        if (data.topics) {
            data.topics.forEach((topic) => {
                if (!result.includes({ params: { topic } }))
                    result.push({ params: { topic } });
            });
        }
    });
    // Return those topics
    return result;
};

// todo: this could be a blog post?
export const getUniqueTopics = () => {
    const topics = getAllTopics().map((obj) => obj.params.topic);
    return Array.from(new Set(topics));
};
