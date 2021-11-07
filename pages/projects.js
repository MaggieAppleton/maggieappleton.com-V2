import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import ProjectCard from "../components/cards/ProjectCard";
import { projectFilePaths, PROJECTS_PATH } from "../utils/mdxUtils";
import Header from "../components/Header";
import styled from "styled-components";
import TitleWithCount from "../components/TitleWithCount";

export default function Projects({ projects }) {
    return (
        <>
            <Header title="Projects by Maggie Appleton" />
            <Layout>
                <header style={{ marginBottom: "var(--space-2xl)" }}>
                    <TitleWithCount posts={projects}>Projects</TitleWithCount>
                    <Title2>In the past I have made things.</Title2>
                </header>
                <ProjectGrid>
                    {projects.map((project) => (
                        <ProjectCard
                            slug={project.slug}
                            title={project.data.title}
                            date={project.data.updated}
                            cover={project.data.cover}
                            topics={project.data.topics}
                        />
                    ))}
                </ProjectGrid>
            </Layout>
        </>
    );
}

const ProjectGrid = styled.section`
    display: grid;
    grid-gap: var(--space-s);
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
`;

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
