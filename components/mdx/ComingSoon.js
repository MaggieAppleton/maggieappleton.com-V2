import styled from "styled-components";

export default function ComingSoon() {
    return (
        <ComingSoonContainer>
            <svg width={65} height={65}>
                <circle cx={32} cy={32} r={30} fill="none" stroke="#000" />
            </svg>
            <h1>Coming Soon</h1>
            <p>Feel free to bug me on twitter to finish writing this.</p>
        </ComingSoonContainer>
    );
}

const ComingSoonContainer = styled.div`
    box-shadow: var(--box-shadow-lg);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-tinted-cream);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--space-48) 0 var(--space-32);
    h1 {
        margin: 0;
    }
`;
