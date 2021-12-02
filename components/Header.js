import Head from "next/head";
import { NextSeo } from "next-seo";

//https://github.com/garmeeh/next-seo

export default function Header({ title, description, keywords }) {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: "https://maggieappleton.com",
        title: title,
        description: description,

        // images: [
        //   {
        //     url: "https://www.example.ie/og-image-01.jpg",
        //     width: 800,
        //     height: 600,
        //     alt: "Og Image Alt",
        //     type: "image/jpeg",
        //   },
        //   {
        //     url: "https://www.example.ie/og-image-02.jpg",
        //     width: 900,
        //     height: 800,
        //     alt: "Og Image Alt Second",
        //     type: "image/jpeg",
        //   },
        //   { url: "https://www.example.ie/og-image-03.jpg" },
        //   { url: "https://www.example.ie/og-image-04.jpg" },
        // ],
        site_name: "Maggie Appleton",
      }}
      twitter={{
        handle: "@mappletons",
        cardType: "summary_large_image",
      }}
    />
  );
}
