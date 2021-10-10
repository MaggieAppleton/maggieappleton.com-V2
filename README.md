# Maggie's Internet Muck

### The Stack

- Next.js
- React
- MDX
- MDX Remote
- Hero Icons – used for minor icons (crosses, arrows, etc.)
- Algolia Search
- Styled Components
- Framer Motion
- Reach UI
- [Tippy.js](https://atomiks.github.io/tippyjs/)
- [React Masonry CSS](https://github.com/paulcollett/react-masonry-css)
- [Next SEO](https://github.com/garmeeh/next-seo)
- [Lodash](https://lodash.com/)


## Components

`<ProseWrapper />` wraps around all MDX longform copy. Limits it to 72ch and places it in grid-column 2.

### Images

I'm using Josh Comeau's full bleed image trick with CSS grid.
* All images in mdx files are passed into `<img />`. It declares a default width of 1000px and accepts an optional `width` prop
* `<FullWidthImage />` will stretch the image across the full canvas, optionally accepts a declared width prop.
