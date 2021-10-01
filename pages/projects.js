import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import ProjectCard from "../components/cards/ProjectCard";
import { projectFilePaths, PROJECTS_PATH } from "../utils/mdxUtils";
import Header from "../components/Header";

export default function Projects({ projects }) {
    return (
        <>
            <Header title="Projects by Maggie Appleton" />
            <Layout>
                <Title1>Projects</Title1>
                <Title2>In the past I have made things</Title2>
                <MasonryGrid largeGap>
                    {projects.map((project) => (
                        <ProjectCard
                            slug={project.slug}
                            title={project.data.title}
                            date={project.data.updated}
                            cover={project.data.cover}
                            topics={project.data.topics}
                        />
                    ))}
                </MasonryGrid>
            </Layout>
        </>
    );
}

// Fetches the data for the page.

export function getStaticProps() {
    // Get all essay posts
    let projects = projectFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
        const { content, data } = matter(source);
        const slug = filePath.replace(/\.mdx$/, "");

        return {
            content,
            data,
            slug,
            filePath,
        };
    });

    // Sort notes by date
    const sortedProjects = projects.sort((a, b) => {
        return new Date(b.data.updated) - new Date(a.data.updated);
    });
    projects = sortedProjects;

    return { props: { projects } };
}
