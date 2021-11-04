import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export default function Changelog() {
    return (
        <Layout>
            <Title1>Changelog</Title1>
            <Title2>Stuff</Title2>
            <StyledMain>
                <ProseWrapper>
                    {/* <MDXRemote {...source} components={components} /> */}
                </ProseWrapper>
            </StyledMain>
        </Layout>
    );
}

const StyledMain = styled.main`
    margin-top: var(--space-2xl);
    padding: var(--space-2xl) 0 var(--space-128);
    background: white;
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-2xl) var(--space-xs);
    }
`;
