import { Feed } from "feed";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import { MDXRemote } from "next-mdx-remote";

// ? This file is unfinished – no clue if it works, half-implemented
// Source: https://github.com/jpmonette/feed
// https://ashleemboyer.com/how-i-added-an-rss-feed-to-my-nextjs-site
// https://dev.to/sreetamdas/rss-feed-in-a-next-js-site-52d0

export default function generateRSSFeed(posts) {
    const baseUrl = "https://garden.harveyqiu.xyz";
    const author = {
        name: "Harvey Qiu",
        email: "harveyqiu1110@outlook.com",
        link: "https://github.com/harveyqiu",
    };

    // Construct a new Feed object
    const feed = new Feed({
        title: "Harvey Qiu",
        description:
            "A digital garden",
        id: baseUrl,
        link: baseUrl,
        language: "en",
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
        },
        author,
    });

    // Add each article to the feed
    posts.forEach((post) => {
        const url = `${baseUrl}/${post.slug}`;
        feed.addItem({
            title: post.data.title,
            id: url,
            link: url,
            content: post.data.description,
            author: author,
            date: new Date(post.data.updated),
        });
    });

    // Write the RSS output to a public file
    fs.writeFileSync("public/rss.xml", feed.rss2());
}
