import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import path from "path";
import { linkify } from "../utils/linkify";
import PostLinks from "../links.json";
import getOgImage from "../utils/getOgImage";
import { Spacer } from "../components/Spacer";
import AssumedAudience from "../components/mdx/AssumedAudience";
import Disclaimer from "../components/mdx/Disclaimer";
import EditRed from "../components/mdx/EditRed";
import { Tween, Timeline, PlayState, Controls } from "react-gsap";
import EssayTemplate from "../templates/EssayTemplate";
import NoteTemplate from "../templates/NoteTemplate";
import ProjectTemplate from "../templates/ProjectTemplate";
import DiaryTemplate from "../templates/DiaryTemplate";
import {
  Title1,
  Title2,
  Title3,
  Title4,
  Subtext,
} from "../components/Typography";
import {
  projectFilePaths,
  noteFilePaths,
  essayFilePaths,
  ESSAYS_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  diaryFilePaths,
  DIARIES_PATH
} from "../utils/mdxUtils";
// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  h1: Title1,
  h2: Title2,
  h3: Title3,
  h4: Title4,
  Tween: Tween,
  Timeline: Timeline,
  AssumedAudience: AssumedAudience,
  Disclaimer: Disclaimer,
  PlayState: PlayState,
  Spacer: Spacer,
  Controls: Controls,
  EditRed: EditRed,
  ButtonLink: dynamic(() => import("../components/links/ButtonLink")),
  Podcastiframe: dynamic(() => import("../components/mdx/Podcastiframe"), {
    ssr: false,
  }),
  Subtext: Subtext,
  Footnote: dynamic(() => import("../components/mdx/Footnote"), {
    ssr: false,
  }),
  img: dynamic(() => import("../components/mdx/Img"), {
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
  MysteriousVoid: dynamic(() => import("../components/unique/MysteriousVoid"), {
    ssr: false,
  }),
};

export default function PostPage({
  source,
  frontMatter,
  slug,
  backlinks,
  ogImage,
}) {
  if (frontMatter.type === "note") {
    return (
      <NoteTemplate
        slug={slug}
        source={source}
        frontMatter={frontMatter}
        components={components}
        backlinks={backlinks}
        ogImage={ogImage}
      />
    );
  } else if (frontMatter.type === "essay") {
    return (
      <EssayTemplate
        slug={slug}
        source={source}
        frontMatter={frontMatter}
        components={components}
        backlinks={backlinks}
        ogImage={ogImage}
      />
    );
  } else if (frontMatter.type === "project") {
    return (
      <ProjectTemplate
        slug={slug}
        source={source}
        frontMatter={frontMatter}
        components={components}
        ogImage={ogImage}
      />
    );
  } else if (frontMatter.type === "diary") {
    return (
      <DiaryTemplate
        slug={slug}
        source={source}
        frontMatter={frontMatter}
        components={components}
        backlinks={backlinks}
        ogImage={ogImage}
      />
    );
  }
}

const getOgImagePath = (properties) => {
  let url = "/og-image?";
  Object.keys(properties).forEach((property) => {
    if (properties[property]) {
      url += `${property}=${encodeURIComponent(properties[property])}&`;
    }
  });
  return url;
};

export const getStaticProps = async ({ params }) => {
  const essays = fs.readdirSync(ESSAYS_PATH);
  const notes = fs.readdirSync(NOTES_PATH);
  const projects = fs.readdirSync(PROJECTS_PATH);
  const diaries = fs.readdirSync(DIARIES_PATH);
  // const type = essays.find((e) => e.includes(params.slug)) ? "post" : "note";

  let type;

  if (projects.find((file) => file.includes(params.slug))) {
    type = "project";
  } else if (essays.find((file) => file.includes(params.slug))) {
    type = "essay";
  } else if (notes.find((file) => file.includes(params.slug))) {
    type = "note";
  } else if  (diaries.find((file) => file.includes(params.slug))) {
    type = "diary";
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
    case "diary":
      filePath = path.join(DIARIES_PATH, `${params.slug}.mdx`);
      break;
  }

  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);

  const ogObject = {
    title: data.title,
    subtitle: data.description,
    postType: data.type,
    growthStage: data.growthStage,
    cover: data.cover,
  };
  const ogImagePath = getOgImagePath(ogObject);
  const ogImage = await getOgImage(ogImagePath, data.title);

  const contentWithBidirectionalLinks = linkify(content, data.title);

  const mdxSource = await serialize(contentWithBidirectionalLinks, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
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
      slug: params.slug,
      backlinks,
      ogImage,
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
  const diaryPaths = getSlugParams(diaryFilePaths);

  // Combine all paths into one array
  const paths = notePaths.concat(essayPaths, projectPaths, diaryPaths);

  return {
    paths,
    fallback: false,
  };
};
