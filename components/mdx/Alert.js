import styled from "styled-components";

export default function Alert({ children }) {
  return (
    <AlertContainer>
      <svg
        width={133}
        height={118}
        fill="none"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.463 3.803c2.31-4 8.083-4 10.392 0l60.185 104.244c2.31 4-.577 9-5.196 9H6.474c-4.619 0-7.505-5-5.196-9L61.463 3.803zm-4.332 32.803a1 1 0 01.998-1.055h17.062a1 1 0 01.998 1.055l-2.286 41.145a1 1 0 01-.998.944h-12.49a1 1 0 01-.998-.944L57.13 36.606zm9.53 68.456c5.294 0 9.587-4.293 9.587-9.588a9.588 9.588 0 00-9.588-9.588 9.588 9.588 0 00-9.588 9.588c0 5.295 4.293 9.588 9.588 9.588z"
          fill="var(--color-salmon)"
        />
      </svg>
      <div className="innerContainer">{children}</div>
    </AlertContainer>
  );
}

const AlertContainer = styled.div`
  grid-column: 1/4 !important;
  display: inline-flex;
  width: 100%;
  max-width: 780px;
  padding: var(--space-s) var(--space-xs);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: var(--space-l) auto;
  border: 1px solid var(--color-gray-100);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-lg);
  h2,
  h3 {
    margin: var(--space-xs) auto var(--space-s);
  }
  svg {
    margin: var(--space-m) auto var(--space-xs);
  }
  div.innerContainer {
    p {
      font-size: var(--font-size-base);
      color: var(--color-gray-800);
      line-height: var(--leading-base);
      max-width: 44ch;
      font-weight: 300;
      margin-top: var(--space-s);
      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
`;
