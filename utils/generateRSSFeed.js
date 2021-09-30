import { Feed } from "feed";

// ! This file is unfinished – no clue if it works, half-implemented
// Source: https://github.com/jpmonette/feed
// https://ashleemboyer.com/how-i-added-an-rss-feed-to-my-nextjs-site
// https://dev.to/sreetamdas/rss-feed-in-a-next-js-site-52d0

const generateRSSFeed = (articles) => {
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
            "Maggie's digital garden filled with visual essays, loose research notes, and design patterns.",
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
        feed.addItem({
            title: post.title,
            id: url,
            link: url,
            content,
            author: [author],
            date: new Date(date),
        });
    });

    // Write the RSS output to a public file
    fs.writeFileSync("public/rss.xml", feed.rss2());
};
