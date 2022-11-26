import React from "react";
import { TwitterShareButton } from "react-share";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const TwitterReply = ({ title, url }) => {
    const twitterHandle = "mappletons";

    return (
        <StyledTweetReply>
            <span>Want to share?</span>

            <TwitterShareButton
                url={url}
                quote={title}
                via={twitterHandle.split("@").join("")}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="16"
                    viewBox="0 0 24 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M24,2.96470588 C23.1,3.40941176 22.2,3.55764706 21.15,3.70588235 C22.2,3.11294118 22.95,2.22352941 23.25,1.03764706 C22.35,1.63058824 21.3,1.92705882 20.1,2.22352941 C19.2,1.33411765 17.85,0.741176471 16.5,0.741176471 C13.95,0.741176471 11.7,2.96470588 11.7,5.63294118 C11.7,6.07764706 11.7,6.37411765 11.85,6.67058824 C7.8,6.52235294 4.05,4.59529412 1.65,1.63058824 C1.2,2.37176471 1.05,3.11294118 1.05,4.15058824 C1.05,5.78117647 1.95,7.26352941 3.3,8.15294118 C2.55,8.15294118 1.8,7.85647059 1.05,7.56 C1.05,7.56 1.05,7.56 1.05,7.56 C1.05,9.93176471 2.7,11.8588235 4.95,12.3035294 C4.5,12.4517647 4.05,12.4517647 3.6,12.4517647 C3.3,12.4517647 3,12.4517647 2.7,12.3035294 C3.3,14.2305882 5.1,15.7129412 7.35,15.7129412 C5.7,17.0470588 3.6,17.7882353 1.2,17.7882353 C0.75,17.7882353 0.45,17.7882353 0,17.7882353 C2.25,19.1223529 4.8,20.0117647 7.5,20.0117647 C16.5,20.0117647 21.45,12.6 21.45,6.22588235 C21.45,6.07764706 21.45,5.78117647 21.45,5.63294118 C22.5,4.89176471 23.4,4.00235294 24,2.96470588 Z"
                    />
                </svg>
                Tell Twitter About It
            </TwitterShareButton>
        </StyledTweetReply>
    );
};

const StyledTweetReply = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: var(--font-sans);
    padding: 0 0 var(--space-2xl);
    gap: var(--space-3xs);
    background: white;
    color: var(--color-gray-600);
    @media ${breakpoints.mediaSM} {
        flex-direction: column;
    }
    svg {
        fill: var(--color-gray-600);
        transition: all 0.3s ease-in-out;
        margin-right: var(--space-3xs);
    }
    button {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            color: var(--color-sea-blue) !important;
            svg {
                fill: var(--color-sea-blue);
            }
        }
    }
    span {
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }
`;
