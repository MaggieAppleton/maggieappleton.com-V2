// import Head from "next/head";
import { NextSeo } from "next-seo";

//https://github.com/garmeeh/next-seo

export default function Header({ title, description, keywords, ogImage }) {
  return (
    // <Head>
    //   <meta {...ogImage} />
    //   <title>{title}</title>
    //   <meta name="description" content={description} />
    //   <meta name="keywords" content={keywords} />
    // </Head>
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: "https://maggieappleton.com",
        title: title,
        description: description,
        images: [
          {
            url: ogImage ? ogImage : "https://maggieappleton.com/og.png",
            width: 1200,
            height: 630,
            alt: `${title}`,
            type: "image/png",
          },
        ],
        site_name: "Maggie Appleton",
      }}
      twitter={{
        handle: "@mappletons",
        cardType: "summary_large_image",
      }}
    />
  );
}
