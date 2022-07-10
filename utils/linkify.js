import linkMaps from "../links.json";
import { getBracketPairs } from "./bracketPairs";

/**
 * This replaces double bracketed links [[like this one]] in the markdown for
 * JSX elements that link to the referenced blog post. It also adds a tooltip
 * to the links in order to preview the title and an excerpt from the post
 * @param content : markdown string for a blog post
 * @param title
 * @returns transformed markdown string for blog post
 */
export function linkify(content, title) {
  if (!content) return content;

  const matchingBracketPairs = getBracketPairs(content);
  if (matchingBracketPairs.length < 1) return content;

  // Get all outbound links for this post
  const outboundLinks = linkMaps.find(
    (map) => map.ids[0] === title
  )?.outboundLinks;

  let result = "";
  let previousIndex = 0; // Starts from first character of the content string

  // For each pair of brackets (link) found, append the content found before to the result,
  // then append the link itself with JSX replacing the brackets, then append the rest of
  // the markdown string until the next pair of brackets
  matchingBracketPairs.forEach((pair) => {
    const opening = pair[0];
    const closing = pair[1];
    const foundLinkText = content.substring(opening + 1, closing - 1);
    const matchedOutboundLink =
      outboundLinks &&
      outboundLinks.find(
        (ol) => ol.matchedId.toLowerCase() === foundLinkText.toLowerCase()
      );

    if (matchedOutboundLink) {
      // todo: destructure title, excerpt and growthStage for your tooltip
      const {
        slug,
        title: matchedTitle,
        description: matchedDescription,
        // excerpt,
      } = matchedOutboundLink;

      //   console.log(`Excerpt: ${excerpt}`);

      //   const regEx = /<|>|\/|<.*>|SimpleCard|IntroParagraph|\*\*|_/g;
      //   const filteredExcerpt = excerpt.replace(regEx, "");

      //   console.log(`Filtered excerpt: ${filteredExcerpt}`);

      // todo: replace ordinary anchor tag for customised tooltip and internal next Link combo
      result += content.substring(previousIndex, opening - 1); // append content up to link
      result += `<InternalTooltipLink title={"${matchedTitle}"} description={"${matchedDescription}"}  href={"/${slug}"}>`; // append JSX opening tags
      result += foundLinkText; // skip opening brackets, then append link content (referenced post title or alias)
      result += "</InternalTooltipLink>"; // append JSX closing tags
    } else {
      result += content.substring(previousIndex, closing);
    }
    previousIndex = closing + 1; // skip closing brackets and start new loop until reaching end of the bracket pairs
  });

  const numPairs = matchingBracketPairs.length;
  const lastClosingBracket = matchingBracketPairs[numPairs - 1][1];

  // Append content from last bracket pair to end of content
  result += content.substring(lastClosingBracket + 1, content.length - 1);

  return result;
}
