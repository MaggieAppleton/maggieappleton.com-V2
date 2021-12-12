import { connectSearchBox } from "react-instantsearch-dom";
import styled from "styled-components";

const SearchBar = ({ refine }) => {
  return (
    <SearchBarWrapper role="search">
      <label htmlFor="algolia_search">Search</label>
      <input
        id="algolia_search"
        type="search"
        placeholder="Search the garden"
        onChange={(e) => refine(e.currentTarget.value)}
      />
    </SearchBarWrapper>
  );
};

export default connectSearchBox(SearchBar);

const SearchBarWrapper = styled.form`
  label {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  input {
    border: 1px solid #ccc;
    padding: var(--space-3xs) var(--space-xs);
    border-radius: 3rem;
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
    width: 40px;
    height: 40px;
    background-color: var(--color-cream);
    transition: all 0.3s ease;
    :focus {
      width: 400px;
    }
  }
`;
