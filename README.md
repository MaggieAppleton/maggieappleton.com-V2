# Maggie's Digital Garden

This is the source code for [maggieappleton.com](https://maggieappleton.com), a digital garden filled with growing notes, essays, and design patterns.

It's open source to let people poke around and get ideas for their own garden. However, I'd rather you didn't fork it wholesale in order to build your own garden. First because my code is a hot mess (I am a developer by necessity, not by profession or choice), and second because I designed it according to my own aesthetic preferences, and functional needs / desires. Yours won't be the same.

It's also awkward when I stumble on someone else's website that is an exact expression of my own design taste and identity. Like walking in on someone wearing your clothing. That said, you can do what you like on the web and I'm not going to make a huge fuss about it.

I strongly encourage you to build your own garden! I keep a [curated list of tools and resources](https://github.com/MaggieAppleton/digital-gardeners) that can help you do so.

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
