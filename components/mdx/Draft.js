import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export default function Draft() {
  return (
    <DraftContainer>
      <svg
        width={140}
        height={120}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        fill="none"
      >
        <g clipPath="url(#prefix__clip0_598:81)">
          <path
            d="M88.537 34.814a8.755 8.755 0 012.886-1.981 8.857 8.857 0 013.444-.7 9.008 9.008 0 013.465.69 9.112 9.112 0 014.922 4.922 9.026 9.026 0 01.691 3.466 8.87 8.87 0 01-.7 3.444 8.759 8.759 0 01-1.982 2.885l-3.824 3.824-12.726-12.726 3.825-3.824zm-5.544 5.545L41.59 81.761l-7.38 17.46c-.698 1.654.992 3.344 2.646 2.645l17.46-7.38 41.406-41.4-12.73-12.727z"
            fill="var(--color-sea-blue)"
          />
          <path
            d="M48.424 88.643s-.881-8.642-9.091-9.091l-12.518 5.591 4.79 18.588 10.38 5.205 15.098-11.634c-1.313-8.212-8.659-8.659-8.659-8.659z"
            stroke="#fff"
            strokeWidth={2}
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0_598:81">
            <path
              fill="#fff"
              transform="rotate(45 35.98 87.264)"
              d="M0 0h90v102H0z"
            />
          </clipPath>
        </defs>
      </svg>
      <div>
        <svg height={2}>
          <path
            d="M150,0 L400,0"
            stroke="var(--color-sea-blue)"
            strokeWidth="2"
            strokeDasharray="12,8"
          />
        </svg>
        <h1>Draft in Progress</h1>
        <svg height={2}>
          <path
            d="M0,0 L150,0"
            stroke="var(--color-sea-blue)"
            strokeWidth="2"
            strokeDasharray="12,8"
          />
        </svg>
      </div>
      <p>
        The quality of writing below this point is haphazard, disjointed, and
        nonsensical. It's probably a good idea to come back later.
      </p>
    </DraftContainer>
  );
}

const DraftContainer = styled.div`
  grid-column: 1/4 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: var(--space-l) auto;
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-tinted-cream);
  padding: var(--space-s) 0;
  max-width: 1300px;
  div {
    margin-top: var(--space-2xs);
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    svg {
      position: relative;
      top: 5px;
    }
    h1 {
      margin: 0;
      font-weight: 600;
      line-height: var(--leading-tighter);
    }
  }
  p {
    font-size: var(--font-size-base);
    color: var(--color-gray-800);
    line-height: var(--line-height-base);
    width: 50ch;
    max-width: 90%;
    font-weight: 300;
    margin-top: var(--space-m);
  }
  @media ${breakpoints.mediaSM} {
    margin: var(--space-m) var(--space-3xs);
    div {
      flex-direction: column;
      svg {
        display: none;
      }
    }
  }
`;
