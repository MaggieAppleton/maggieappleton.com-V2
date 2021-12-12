import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Menu,
  CurrentRefinements,
  Configure,
} from "react-instantsearch-dom";
import GardenHits from "./GardenHits";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export const GardenFiltersAndHits = ({ allPostData }) => {
  // const sortedPosts = allPostData.sort((a, b) => {
  //   return new Date(b.updated) - new Date(a.updated);
  // });

  return (
    <InstantSearch searchClient={searchClient} indexName="garden-posts">
      <Configure hitsPerPage={200} />
      <Menu attribute="topics" limit={7} showMore />
      <Menu attribute="growthStage" />
      <Menu attribute="type" />
      <CurrentRefinements clearsQuery />
      <GardenHits allPostData={allPostData} />
    </InstantSearch>
  );
};
