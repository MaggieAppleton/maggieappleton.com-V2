import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "GQGHO7AEBK",
  "42beb410181f9e6c30d76646a3904a5d"
);

export const SearchFilters = () => (
  <InstantSearch searchClient={searchClient} indexName="garden-posts">
    <SearchBox />
    <Hits />
  </InstantSearch>
);
