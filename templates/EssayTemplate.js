import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Layout from "../components/Layout";
import Link from "next/link";

export default function EssayTemplate({ source, frontMatter, components }) {
    return (
        <Layout type={frontMatter.type}>
            <div>
                <h1>{frontMatter.title}</h1>
                {frontMatter.description && <p>{frontMatter.description}</p>}
                <p>Essay</p>
                {frontMatter.topics && (
                    <ul>
                        {frontMatter.topics.map((topic) => (
                            <li key={topic}>
                                <Link href={`/topics/${topic}`}>
                                    <a>{topic}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <main>
                <ProseWrapper>
                    <MDXRemote {...source} components={components} />
                </ProseWrapper>
            </main>
        </Layout>
    );
}
