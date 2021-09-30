import { TwitterTweetEmbed } from "react-twitter-embed";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function TweetEmbed({ tweetId }) {
    return (
        <Container>
            <TwitterTweetEmbed tweetId={tweetId} />
        </Container>
    );
}

const Container = styled.div`
    margin: 0 auto var(--space-32);
    width: 550px;
    max-width: 100%;
`;
