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
        url: "https://garden.harveyqiu.xyz",
        title: title,
        description: description,
        site_name: "HarveyQiu's Lab",
      }}
    />
  );
}
