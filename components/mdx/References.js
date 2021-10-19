import styled from "styled-components";

export default function References({ children }) {
    return (
        <ReferencesContainer>
            <h3>References and Further Reading</h3>
            {children}
        </ReferencesContainer>
    );
}

const ReferencesContainer = styled.div`
    display: flex;
    border-top: 1px solid var(--color-tinted-cream);
    flex-direction: column;
    justify-content: center;
    margin: var(--space-48) 0 0;
    h3 {
        margin-top: var(--space-32);
        font-size: var(--font-size-md);
    }
`;
