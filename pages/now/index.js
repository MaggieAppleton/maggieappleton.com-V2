import Layout from "../../components/Layout";
import { Title1, Title2 } from "../../components/Typography";
import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../../components/posts/ProseWrapper";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function Now() {
    return (
        <Layout>
            <Title1>Now</Title1>
            <p>Stuff</p>
            <StyledMain>
                <ProseWrapper>
                    {/* <MDXRemote {...source} components={components} /> */}
                </ProseWrapper>
            </StyledMain>
        </Layout>
    );
}

const StyledMain = styled.main`
    margin-top: var(--space-80);
    padding: var(--space-80) 0 var(--space-128);
    background: white;
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-80) var(--space-16);
    }
`;

// TODO - use getstaticProps to read the now.mdx file for this.
