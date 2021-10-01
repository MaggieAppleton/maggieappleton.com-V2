import React, { forwardRef } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

const Tooltip = forwardRef(({ content, children }, ref) => {
    return (
        <StyledTippy
            duration="500"
            arrow={true}
            interactive={true}
            animation="shift-away"
            content={content}
        >
            <span ref={ref}>{children}</span>
        </StyledTippy>
    );
});

const StyledTippy = styled(Tippy)`
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    word-break: break-word;
    white-space: pre-wrap;
    padding: var(--space-4);
    margin-bottom: var(--space-4);
    background-color: var(--color-light-cream);
    color: var(--color-gray-800);
    box-shadow: var(--box-shadow-md);
    .tippy-arrow {
        color: var(--color-light-cream);
    }
`;

export default Tooltip;
