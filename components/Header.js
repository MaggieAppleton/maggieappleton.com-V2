import Head from "next/head";

export default function Header({ title, description, keywords }) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content={
                    description
                        ? description
                        : "Maggie's digital garden filled with visual essays on programming, design, and anthropology"
                }
            />
            <meta
                name="keywords"
                content={
                    keywords
                        ? keywords
                        : "design, programming, anthropology, illustration, digital garden, metaphors"
                }
            />
            <meta name="author" content="Maggie Appleton" />
        </Head>
    );
}
