import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import path from "path";
import { getHeadings } from "../utils/getHeadings";
import { linkify } from "../utils/linkify";
import PostLinks from "../links.json";
// import getOgImage from "../utils/getOgImage";
import { Spacer } from "../components/Spacer";
import AssumedAudience from "../components/mdx/AssumedAudience";
import Disclaimer from "../components/mdx/Disclaimer";
import InternalTooltipLink from "../components/links/InternalTooltipLink";
import EditRed from "../components/mdx/EditRed";
import { Tween, Timeline, PlayState, Controls } from "react-gsap";
import EssayTemplate from "../templates/EssayTemplate";
import NoteTemplate from "../templates/NoteTemplate";
import ProjectTemplate from "../templates/ProjectTemplate";
import PatternTemplate from "../templates/PatternTemplate";
import LinkWithIcon from "../components/mdx/LinkWithIcon";
import Icon from "../components/mdx/Icon";
import {
  Title1,
  Title2,
  Title3,
  Title4,
  Subtext,
  SmallCaps,
  Highlight,
} from "../components/Typography";
import {
  projectFilePaths,
  noteFilePaths,
  essayFilePaths,
  patternFilePaths,
  ESSAYS_PATH,
  PATTERNS_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
} from "../utils/mdxUtils";
// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally components for certain routes.
  // See the notes in README.md for more details.
  h1: (props) => (
    <a href={`#${props.id}`}>
      <Title1 {...props} />
    </a>
  ),
  h2: (props) => (
    <a href={`#${props.id}`}>
      <Title2 {...props} />
    </a>
  ),
  h3: Title3,
  h4: Title4,
  SmallCaps: SmallCaps,
  Subtext: Subtext,
  Highlight: Highlight,
  InternalTooltipLink: InternalTooltipLink,
  Tween: Tween,
  Timeline: Timeline,
  AssumedAudience: AssumedAudience,
  Disclaimer: Disclaimer,
  PlayState: PlayState,
  Spacer: Spacer,
  Controls: Controls,
  EditRed: EditRed,
  LinkWithIcon: LinkWithIcon,
  Icon: Icon,
  // AnimatedImage: dynamic(() => import("../components/mdx/AnimatedImage"), {
  //   ssr: false,
  // }),
  ButtonLink: dynamic(() => import("../components/links/ButtonLink")),
  Podcastiframe: dynamic(() => import("../components/mdx/Podcastiframe"), {
    ssr: false,
  }),
  BlockquoteCitation: dynamic(() =>
    import("../components/mdx/BlockquoteCitation")
  ),
  Accordion: dynamic(() => import("../components/mdx/Accordion")),
  Footnote: dynamic(() => import("../components/mdx/Footnote"), {
    ssr: false,
  }),
  img: dynamic(() => import("../components/mdx/Img"), {
    ssr: false,
  }),
  NextImage: dynamic(() => import("../components/mdx/NextImage"), {
    ssr: false,
  }),
  Alert: dynamic(() => import("../components/mdx/Alert"), {
    ssr: false,
  }),
  ResourceBook: dynamic(() => import("../components/mdx/ResourceBook"), {
    ssr: false,
  }),
  Video: dynamic(() => import("../components/mdx/Video"), {
    ssr: false,
  }),
  ReferencesLink: dynamic(() => import("../components/mdx/ReferencesLink"), {
    ssr: false,
  }),
  a: dynamic(() => import("../components/links/TooltipLink"), {
    ssr: false,
  }),
  pre: dynamic(() => import("../components/mdx/CodeBlock"), {
    ssr: false,
  }),
  Center: dynamic(() => import("../components/mdx/Center"), {
    ssr: false,
  }),
  BasicImage: dynamic(() => import("../components/mdx/BasicImage"), {
    ssr: false,
  }),
  ResponsiveImage: dynamic(() => import("../components/mdx/ResponsiveImage"), {
    ssr: false,
  }),
  ImageFrame: dynamic(() => import("../components/mdx/ImageFrame"), {
    ssr: false,
  }),
  ComingSoon: dynamic(() => import("../components/mdx/ComingSoon"), {
    ssr: false,
  }),
  References: dynamic(() => import("../components/mdx/References"), {
    ssr: false,
  }),
  Draft: dynamic(() => import("../components/mdx/Draft"), {
    ssr: false,
  }),
  TwoColumn: dynamic(() => import("../components/mdx/TwoColumn"), {
    ssr: false,
  }),
  ThreeColumn: dynamic(() => import("../components/mdx/ThreeColumn"), {
    ssr: false,
  }),
  TweetEmbed: dynamic(() => import("../components/mdx/TweetEmbed"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }),
  IntroParagraph: dynamic(() => import("../components/mdx/IntroParagraph"), {
    ssr: false,
  }),
  SimpleCard: dynamic(() => import("../components/mdx/SimpleCard"), {
    ssr: false,
  }),
  LinkCard: dynamic(() => import("../components/mdx/LinkCard"), {
    ssr: false,
  }),
  QuoteCard: dynamic(() => import("../components/mdx/QuoteCard"), {
    ssr: false,
  }),
  ImageLink: dynamic(() => import("../components/links/ImageLink"), {
    ssr: false,
  }),
  FullWidthBackground: dynamic(
    () => import("../components/mdx/FullWidthBackground"),
    {
      ssr: false,
    }
  ),
  FullWidthSection: dynamic(
    () => import("../components/mdx/FullWidthSection"),
    {
      ssr: false,
    }
  ),
  NowSection: dynamic(() => import("../components/mdx/NowSection"), {
    ssr: false,
  }),
  TalkSlide: dynamic(() => import("../components/mdx/TalkSlide"), {
    ssr: false,
  }),
  ListNumber: dynamic(() => import("../components/mdx/ListNumber"), {
    ssr: false,
  }),
  // AudioPlayer: dynamic(() => import("../components/mdx/AudioPlayer"), {
  //   ssr: false,
  // }),

  // Unique components – used in specific essays or notes
  StickyPosition: dynamic(
    () => import("../components/unique/css-position/StickyPosition"),
    {
      ssr: false,
    }
  ),
  RelativeCSSPosition: dynamic(
    () => import("../components/unique/css-position/RelativeCSSPosition"),
    {
      ssr: false,
    }
  ),
  AbsoluteCSSPosition: dynamic(
    () => import("../components/unique/css-position/AbsoluteCSSPosition"),
    {
      ssr: false,
    }
  ),
  FixedCSSPosition: dynamic(
    () => import("../components/unique/css-position/FixedCSSPosition"),
    {
      ssr: false,
    }
  ),
  StaticCSSPosition: dynamic(
    () => import("../components/unique/css-position/StaticCSSPosition"),
    {
      ssr: false,
    }
  ),
  MysteriousVoid: dynamic(() => import("../components/unique/MysteriousVoid"), {
    ssr: false,
  }),
  ScrollingImages: dynamic(
    () => import("../components/unique/ScrollingImages"),
    {
      ssr: false,
    }
  ),
  GsapScroller: dynamic(
    () => import("../components/unique/gsap-basics/GsapScroller"),
    {
      ssr: false,
    }
  ),
  TweenRedBigBox: dynamic(
    () => import("../components/unique/gsap-basics/TweenRedBigBox"),
    {
      ssr: false,
    }
  ),
  TweenSpinningBox: dynamic(
    () => import("../components/unique/gsap-basics/TweenSpinningBox"),
    {
      ssr: false,
    }
  ),
  TweenReverseSpinningBox: dynamic(
    () => import("../components/unique/gsap-basics/TweenReverseSpinningBox"),
    {
      ssr: false,
    }
  ),
  TweenBlueRedBox: dynamic(
    () => import("../components/unique/gsap-basics/TweenBlueRedBox"),
    {
      ssr: false,
    }
  ),
  MultipartIntro: dynamic(() => import("../components/unique/MultipartIntro"), {
    ssr: false,
  }),
  InvisiblesFeature: dynamic(
    () => import("../components/unique/InvisiblesFeature"),
    {
      ssr: false,
    }
  ),
  HackyFormatting: dynamic(
    () => import("../components/unique/HackyFormatting"),
    {
      ssr: false,
    }
  ),
  MediumMaterialsMeat: dynamic(
    () => import("../components/unique/MediumMaterialsMeat"),
    {
      ssr: false,
    }
  ),
  Tools: dynamic(() => import("../components/unique/apps/Tools"), {
    ssr: false,
  }),
  Hardware: dynamic(() => import("../components/unique/apps/Hardware"), {
    ssr: false,
  }),
  TextvBlocks: dynamic(
    () => import("../components/unique/blocks/TextvBlocks"),
    {
      ssr: false,
    }
  ),
  DemoBlock1: dynamic(() => import("../components/unique/blocks/DemoBlock1"), {
    ssr: false,
  }),
  DemoBlock2: dynamic(() => import("../components/unique/blocks/DemoBlock2"), {
    ssr: false,
  }),
  DemoBlock3: dynamic(() => import("../components/unique/blocks/DemoBlock3"), {
    ssr: false,
  }),
  DemoBlock4: dynamic(() => import("../components/unique/blocks/DemoBlock4"), {
    ssr: false,
  }),
  LinearChars: dynamic(
    () => import("../components/unique/blocks/LinearChars"),
    {
      ssr: false,
    }
  ),
  Blocktimeline: dynamic(
    () => import("../components/unique/blocks/Blocktimeline"),
    {
      ssr: false,
    }
  ),
  BlockAges: dynamic(() => import("../components/unique/blocks/BlockAges"), {
    ssr: false,
  }),
  BlockLogos: dynamic(() => import("../components/unique/blocks/BlockLogos"), {
    ssr: false,
  }),
  TodoApp: dynamic(
    () => import("../components/unique/direct-manipulation/TodoApp"),
    {
      ssr: false,
    }
  ),
  DetatchedTodoApp: dynamic(
    () => import("../components/unique/direct-manipulation/DetatchedTodoApp"),
    {
      ssr: false,
    }
  ),
  NoteAction: dynamic(
    () => import("../components/unique/programmatic-notes/NoteAction"),
    {
      ssr: false,
    }
  ),
  NoteTrigger: dynamic(
    () => import("../components/unique/programmatic-notes/NoteTrigger"),
    {
      ssr: false,
    }
  ),
  AIConversation: dynamic(() => import("../components/unique/AIConversation"), {
    ssr: false,
  }),
  // TranscriptionTimeline: dynamic(
  //   () => import("../components/unique/speakularity/TranscriptionTimeline"),
  //   {
  //     ssr: false,
  //   }
  // ),
};

export default function PostPage({
  source,
  frontMatter,
  slug,
  headings,
  backlinks,
  toc,
  // ogImage,
}) {
  if (frontMatter.type === "note") {
    return (
      <NoteTemplate
        slug={slug}
        source={source}
        toc={toc}
        frontMatter={frontMatter}
        components={components}
        backlinks={backlinks}
        headings={headings}
        // ogImage={ogImage}
      />
    );
  } else if (frontMatter.type === "essay") {
    return (
      <EssayTemplate
        slug={slug}
        source={source}
        toc={toc}
        frontMatter={frontMatter}
        components={components}
        backlinks={backlinks}
        headings={headings}
        // ogImage={ogImage}
      />
    );
  } else if (frontMatter.type === "project") {
    return (
      <ProjectTemplate
        slug={slug}
        source={source}
        frontMatter={frontMatter}
        components={components}
        // ogImage={ogImage}
      />
    );
  } else if (frontMatter.type === "pattern") {
    return (
      <PatternTemplate
        slug={slug}
        source={source}
        frontMatter={frontMatter}
        components={components}
        // ogImage={ogImage}
      />
    );
  }
}

// const getOgImagePath = (properties) => {
//   let url = "/og-image?";
//   Object.keys(properties).forEach((property) => {
//     if (properties[property]) {
//       url += `${property}=${encodeURIComponent(properties[property])}&`;
//     }
//   });
//   return url;
// };

export const getStaticProps = async ({ params }) => {
  const essays = fs.readdirSync(ESSAYS_PATH);
  const notes = fs.readdirSync(NOTES_PATH);
  const projects = fs.readdirSync(PROJECTS_PATH);
  const patterns = fs.readdirSync(PATTERNS_PATH);

  // const type = essays.find((e) => e.includes(params.slug)) ? "post" : "note";

  let type;

  if (projects.find((file) => file.includes(params.slug))) {
    type = "project";
  } else if (essays.find((file) => file.includes(params.slug))) {
    type = "essay";
  } else if (notes.find((file) => file.includes(params.slug))) {
    type = "note";
  } else if (patterns.find((file) => file.includes(params.slug))) {
    type = "pattern";
  }

  // switch case statement to determine which file to load
  let filePath;
  switch (type) {
    case "essay":
      filePath = path.join(ESSAYS_PATH, `${params.slug}.mdx`);
      break;
    case "note":
      filePath = path.join(NOTES_PATH, `${params.slug}.mdx`);
      break;
    case "project":
      filePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
      break;
    case "pattern":
      filePath = path.join(PATTERNS_PATH, `${params.slug}.mdx`);
      break;
  }

  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);

  const toc = data?.toc || null;

  const headings = await getHeadings(content);

  const ogObject = {
    title: data.title,
    subtitle: data.description,
    postType: data.type,
    growthStage: data.growthStage,
    cover: data.cover,
  };
  // const ogImagePath = getOgImagePath(ogObject);
  // const ogImage = await getOgImage(ogImagePath, data.title);

  const contentWithBidirectionalLinks = linkify(content, data.title);

  const mdxSource = await serialize(contentWithBidirectionalLinks, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        require("rehype-slug"),
        // require("rehype-autolink-headings"),
      ],
    },
    scope: data,
  });

  // Get backlinks
  const backlinks =
    PostLinks.find((post) => post.ids[0] === data.title)?.inboundLinks || [];

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      headings,
      slug: params.slug,
      toc,
      backlinks,
      // ogImage,
    },
  };
};

export const getStaticPaths = async () => {
  // Get slugs for all file paths passed in
  const getSlugParams = (filePaths) =>
    filePaths
      // Remove the .mdx extension
      .map((path) => path.replace(/\.mdx?$/, ""))
      .map((slug) => ({ params: { slug } }));

  const notePaths = getSlugParams(noteFilePaths);
  const essayPaths = getSlugParams(essayFilePaths);
  const projectPaths = getSlugParams(projectFilePaths);
  const patternPaths = getSlugParams(patternFilePaths);

  // Combine all paths into one array
  const paths = notePaths.concat(essayPaths, projectPaths, patternPaths);

  return {
    paths,
    fallback: false,
  };
};
