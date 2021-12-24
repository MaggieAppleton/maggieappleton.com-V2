import Masonry from "react-masonry-css";
import styled from "styled-components";
import { motion } from "framer-motion";

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
    <motion.section>
      <StyledMasonry
        breakpointCols={breakpointColumnsObj}
        columnClassName="masonry_grid_column"
        {...props}
      >
        {children}
      </StyledMasonry>
    </motion.section>
  );
}

const StyledMasonry = styled(Masonry)`
  display: flex;
  width: auto;
  margin-top: var(--space-m);
  & .masonry_grid_column + .masonry_grid_column {
    margin-left: ${(props) =>
      props.columnGapLeft ? props.columnGapLeft : "0"};
    background-clip: padding-box;
  }
  & .masonry_grid_column div:first-child {
    margin-bottom: ${(props) =>
      props.columnGapBottom ? props.columnGapBottom : "var(--space-2xs)"};
  }
`;

// Docs
// https://github.com/paulcollett/react-masonry-css
