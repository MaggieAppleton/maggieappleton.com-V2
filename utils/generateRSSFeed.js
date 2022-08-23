import { Feed } from "feed";
import fs from "fs";

// ? This file is unfinished – no clue if it works, half-implemented
// Source: https://github.com/jpmonette/feed
// https://ashleemboyer.com/how-i-added-an-rss-feed-to-my-nextjs-site
// https://dev.to/sreetamdas/rss-feed-in-a-next-js-site-52d0

export default function generateRSSFeed(posts) {
    const baseUrl = "https://maggieappleton.com";
    const author = {
        name: "Maggie Appleton",
        email: "hello@maggieappleton.com",
        link: "https://twitter.com/mappletons",
    };

    // Construct a new Feed object
    const feed = new Feed({
        title: "Maggie Appleton",
        description:
            "A digital garden filled with visual essays, research notes, and experiments at the intersection of design, development, and anthropology.",
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
