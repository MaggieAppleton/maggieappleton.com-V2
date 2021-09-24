import styled from "styled-components";

export default function Layout({ children, type }) {
    return (
        <StyledLayout>
            <div>{children}</div>
        </StyledLayout>
    );
}

const StyledLayout = styled.div``;
