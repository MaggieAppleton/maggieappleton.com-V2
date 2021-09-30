import { TwitterTweetEmbed } from "react-twitter-embed";
import styled from "styled-components";

export default function TweetEmbed({ tweetId }) {
    return (
        <TweetContainer>
            <TwitterTweetEmbed tweetId={tweetId} />
        </TweetContainer>
    );
}

const TweetContainer = styled.span.withConfig({
    componentId: "TweetContainer",
})`
    margin: 0 auto var(--space-32);
    width: 550px;
    max-width: 100%;
`;
