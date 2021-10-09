import fs from 'fs'
import { getAllPostData } from '../utils/getAllPosts.js'

// Extract all instances of substrings between double brackets [[]] from a long string
const bracketsExtractor = (str) => {
    const matcher = /((?!\])(?!\[).)+/gs
    return str.match(matcher)
}

const matchCodeBlocks = new RegExp('```[\\d\\D]*?```', 'g')

/**
 * I need to work out rendering the html previews for excerpts. Until then, this function
 * is for stripping out JSX tags, newline characters, extra spaces, double brackets and code
 * blocks so that an excerpt can be shown as a string of content.
 * @param str raw markdown string
 * @returns stripped string
 */
const stripExcerpt = (str) =>
    str
        .substring(0, 700) // Work on a smaller substring for efficiency
        .replace(/(<([^>]+)>)/gi, '') // Remove all JSX tags
        .replace(/\r?\n|\r/g, ' ') // Replace all line breaks
        .replace(/{' '}/g, '') // Replace spaces in braces that occur in JSX components
        .replace(/\s+/g, ' ') // Replaces all whitespace exceeding one space character
        .replace(/\[\[/g, '') // Remove brackets from excerpt
        .replace(/\]\]/g, '')
        .replace(matchCodeBlocks, '') // Remove code blocks
        .trim()

const getExcerpt = (str) => {
    if (!str) return ''
    const stripped = stripExcerpt(str)
    return `${stripped.substring(0, 280).trimEnd()}...`
}

;(function () {
    // Get content and frontmatter for each post
    const totalPostData = getAllPostData()

    // Create initial objects. Identify each by a combined title and aliases identifier
    // Initialise empty outbound and inbound link arrays
    const posts = totalPostData.map(({ title, aliases, slug, growthStage }) => ({
        ids: [title, ...(aliases ? aliases : [])],
        slug,
        growthStage,
        outboundLinks: [],
        inboundLinks: []
    }))

    // Get all outbound links
    totalPostData.forEach((postData, index) => {
        const { content } = postData
        // Get all substrings between brackets from post body
        const bracketContents = bracketsExtractor(content)
        bracketContents?.forEach((alias) => {
            // If matched text is an alias of another post
            const match = posts.find((p) => {
                // If an alias was found between JSX tags in the markdown string, it may contain undesirable substrings
                const normalisedAlias = alias
                    .replace(/\n/g, '')
                    .replace(/\s+/g, ' ') // Replaces all whitespace exceeding one space character
                    .replace(`{' '}`, ' ')
                    .replace(`{" "}`, ' ')
                return p.ids.includes(normalisedAlias)
            })

            if (match) {
                // Get data for post that was referenced in the link
                const matchedPostData = totalPostData.find((p) => p.title === match.ids[0])
                const excerpt = getExcerpt(matchedPostData?.content)
                // Add it to the outbound links
                posts[index].outboundLinks.push({
                    matchedId: alias,
                    title: match.ids[0],
                    slug: match.slug,
                    growthStage: match.growthStage,
                    excerpt
                })
            }
        })
    })

    // Get inbound links for all posts. For each post (first loop), compare with all other posts (second loop)
    for (const outerPost of posts) {
        const outerPostTitle = outerPost.ids[0]

        for (const innerPost of posts) {
            const innerPostTitle = innerPost.ids[0]

            // If inner post's outboundLinks contains a reference to the outer post,
            // then the outer post must have the inner post as an inbound link
            if (innerPost.outboundLinks.some((link) => link.title === outerPostTitle)) {
                const matchedPostData = totalPostData.find((p) => p.title === innerPostTitle)
                const excerpt = getExcerpt(matchedPostData?.content)

                outerPost.inboundLinks.push({
                    title: innerPostTitle,
                    excerpt,
                    slug: innerPost.slug,
                    growthStage: innerPost.growthStage
                })
            }
        }
    }

    fs.writeFile('links.json', JSON.stringify(posts), () => console.log('links recorded'))
})()
