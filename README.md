# Maggie's Internet Muck

### The Stack

- Next.js
- Reach UI
- [Next SEO](https://github.com/garmeeh/next-seo)

## Components


`<ProseWrapper />` wraps around all mdx longform copy.

### Images

I'm using Josh Comeau's full bleed image trick with CSS grid.
* All images in mdx files are passed into `<BasicImage />`. It declares a default width of 1000px and accepts an optional `width` prop
* `<FullBleedImage />` will stretch the image across the full canvas, optionally accepts a declared width prop.