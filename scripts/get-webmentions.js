const fs = require("fs");
const fetch = require("node-fetch");
const unionBy = require("lodash/unionBy");
require("dotenv").config();

// Define Cache Location and API Endpoint
const CACHE_DIR = "posts/data";
const TOKEN = process.env.WEBMENTION_API_KEY;

async function fetchWebmentions(since, perPage = 20000) {
  let url = `https://webmention.io/api/mentions.jf2?domain=maggieappleton.com&token=${TOKEN}&per-page=${perPage}`;
  if (since) url += `&since=${since}`;

  const response = await fetch(url);
  if (response.ok) {
    const feed = await response.json();
    console.log(`>>> ${feed.children.length} new webmentions fetched`);
    return feed;
  }

  return null;
}

// Merge fresh webmentions with cached entries, unique per id
function mergeWebmentions(a, b) {
  return unionBy(a.children, b.children, "wm-id");
}

// save combined webmentions in cache file
function writeToCache(data) {
  const filePath = `${CACHE_DIR}/webmentions.json`;
  const fileContent = JSON.stringify(data, null, 2);
  // create cache folder if it doesnt exist already
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }
  // write data to cache json file
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log(`>>> webmentions saved to ${filePath}`);
  });
}

// get cache contents from json file
function readFromCache() {
  const filePath = `${CACHE_DIR}/webmentions.json`;

  if (fs.existsSync(filePath)) {
    const cacheFile = fs.readFileSync(filePath);
    return JSON.parse(cacheFile);
  }

  // no cache found.
  return {
    lastFetched: null,
    children: [],
  };
}

async function ReadCacheAndFetch() {
  const cache = readFromCache();
  if (cache.children.length) {
    console.log(`>>> ${cache.children.length} webmentions loaded from cache`);
  }

  const feed = await fetchWebmentions(cache.lastFetched);
  if (feed) {
    const webmentions = {
      lastFetched: new Date().toISOString(),
      children: mergeWebmentions(cache, feed),
    };

    writeToCache(webmentions);
    return webmentions;
  }

  return cache;
}

ReadCacheAndFetch();
