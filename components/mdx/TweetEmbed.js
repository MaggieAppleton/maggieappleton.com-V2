import { TwitterTweetEmbed } from "react-twitter-embed";

export default function TweetEmbed({ tweetId }) {
    return (
        <div style={{ marginBottom: "var(--space-24)" }}>
            <TwitterTweetEmbed tweetId={tweetId} />
        </div>
    );
}
