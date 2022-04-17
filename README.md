# Harvey Qiu's Digital Garden

This is the source code for [garden.harveyqiu.xyz](https://garden.harveyqiu.xyz), a digital garden filled with growing notes, essays.

Original Codes are from [Maggie Appleton](https://github.com/MaggieAppleton/maggieappleton.com-V2).

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

## Design System

- Global variables declared in components/GlobalStyles.js
- Set on an 8-pixel grid; 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160. This is definitely too many size options. Should review and cut it down in the future.
- Fonts are Canela Deck for headings, Canela Text for longform body, and Lato as a sans-serif workhorse font for practical UI components.
- Type set on a fluid scale using fancy calculations from the [Utopia](https://utopia.fyi/type/calculator) system

## MDX Components

- `<ProseWrapper />` wraps around all MDX longform copy. Limits it to 72ch and places it in `grid-column: 2`.
- Layout elements
  - `<TwoColumn />`
  - `<ThreeColumn />`
- Image elements
  - `<Img />` escapes the `grid-column: 2` placement and sets a max-width of 1000px. Optional override with `width` prop. Minimal styles, replaces the default img element.
  - `<BasicImage />` is more fully features - includes an optional caption from the alt text.
  - `<ImageFrame/>` adds a slight frame and drop-shadow. Useful for screenshots.
  - 

### Images

I'm using Josh Comeau's full bleed image trick with CSS grid.
* All images in mdx files are passed into `<img />`. It declares a default width of 1000px and accepts an optional `width` prop
* `<BasicImage />` will stretch the image across the full canvas, optionally accepts a declared width prop.
