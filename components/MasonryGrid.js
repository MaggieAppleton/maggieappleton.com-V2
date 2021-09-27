import Masonry from "react-masonry-css";
import styled from "styled-components";

export default function MasonryGrid({
    children,
    breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    },
    ...props
}) {
    return (
        <StyledMasonry
            breakpointCols={breakpointColumnsObj}
            columnClassName="masonry_grid_column"
            {...props}
        >
            {children}
        </StyledMasonry>
    );
}

const StyledMasonry = styled(Masonry)`
    display: flex;
    width: auto;
    margin-top: var(--space-64);
    & .masonry_grid_column + .masonry_grid_column {
        margin-left: ${(props) =>
            props.largeGap ? "var(--space-32)" : "var(--space-16)"};
        background-clip: padding-box;
    }
    & .masonry_grid_column div:first-child {
        margin-bottom: ${(props) =>
            props.largeGap ? "var(--space-32)" : "var(--space-16)"};
    }
`;

// Docs
// https://github.com/paulcollett/react-masonry-css
