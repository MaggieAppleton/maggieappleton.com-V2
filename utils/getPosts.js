import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), "posts", "essays");

export const getSortedPosts = (options) => {
    // Reads all the files in the post directory
    const fileNames = fs.readdirSync(postDirectory);
    const published = [];
    fileNames.forEach((filename) => {
        const slug = filename.replace(".mdx", "");
        const fullPath = path.join(postDirectory, filename);

        // Extracts contents of the MDX file
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        if (shouldNotPublish(data)) {
            return;
        }
        const dateOptions = { month: "long", day: "numeric", year: "numeric" };
        const formattedDate = new Date(data.date).toLocaleDateString(
            "en-US",
            dateOptions
        );
        const frontmatter = {
            ...data,
            date: formattedDate,
        };
        published.push({
            slug,
            ...(options.getContent && { content }),
            ...frontmatter,
        });
    });

    return published.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) {
            return 1;
        } else {
            return -1;
        }
    });
};

// Get Slugs
export const getAllPostSlugs = () => {
    const fileNames = fs.readdirSync(postDirectory);
    const published = [];
    fileNames.forEach((filename) => {
        const slug = filename.replace(".mdx", "");
        const fullPath = path.join(postDirectory, filename);

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
            params: {
                slug: filename.replace(".mdx", ""),
            },
        };
    });
};

// Get Post based on Slug
export const getPostdata = async (slug) => {
    const fullPath = path.join(postDirectory, `${slug}.mdx`);
    const postContent = fs.readFileSync(fullPath, "utf8");
    return postContent;
};
