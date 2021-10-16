import styled from "styled-components";

export default function BackToTop() {
    return (
        <StyledBackToTop>
            <button
                tabIndex="-1"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                Back To Top
            </button>
        </StyledBackToTop>
    );
}

const StyledBackToTop = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
`;
