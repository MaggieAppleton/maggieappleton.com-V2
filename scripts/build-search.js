const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch");
const mdxUtils = require("../utils/mdxUtils");

const {
  essayFilePaths,
  ESSAYS_PATH,
  noteFilePaths,
  NOTES_PATH,
  patternFilePaths,
  PATTERNS_PATH,
} = mdxUtils;

let essays = essayFilePaths.map((filePath) => {
  const source = fs.readFileSync(path.join(ESSAYS_PATH, filePath));
  const { content, data } = matter(source);
  const slug = filePath.replace(/\.mdx$/, "");

  return {
    content,
    data,
    slug,
    filePath,
  };
});

let notes = noteFilePaths.map((filePath) => {
  const source = fs.readFileSync(path.join(NOTES_PATH, filePath));
  const { content, data } = matter(source);
  const slug = filePath.replace(/\.mdx?$/, "");

  return {
    content,
    data,
    slug,
    filePath,
  };
});

let patterns = patternFilePaths.map((filePath) => {
  const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
  const { content, data } = matter(source);
  const slug = filePath.replace(/\.mdx?$/, "");

  return {
    content,
    data,
    slug,
    filePath,
  };
});

const posts = [...essays, ...notes, ...patterns];

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((post) => {
    const postId = post.data.title.toLowerCase().replace(/\s/g, "-");

    return {
      objectID: postId,
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      startDate: post.data.startDate,
      updated: post.data.updated,
      cover: post.data.cover,
      topics: post.data.topics,
      growthStage: post.data.growthStage,
      type: post.data.type,
      content: post.content,
    };
  });

  return transformed;
}

(async function () {
  // initialize environment variables
  dotenv.config();

  try {
    // const posts = await getPostdata();
    const searchObjects = transformPostsToSearchObjects(posts);
    const appID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
    const adminKey = process.env.ALGOLIA_SEARCH_ADMIN_KEY;

    const client = algoliasearch(appID, adminKey);

    const index = client.initIndex("garden-posts");

    const algoliaResponse = await index.saveObjects(searchObjects);

    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n"
      )}`
    );
  } catch (error) {
    console.error(error);
  }

  console.log("Search data request has fired!");
})();
