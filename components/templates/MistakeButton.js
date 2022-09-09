// import Tooltip from "../Tooltip";
import styled from "styled-components";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function MistakeButton({ slug }) {
    return(
        <Container>
            <Question>See a mistake?</Question> <Button><PencilSquareIcon width="18" height="18" />Suggest an edit</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: var(--space-xs);
`

const Question = styled.span`
font-family: var(--font-sans);
font-size: var(--font-size-sm);
font-weight: 400;
color: var(--color-gray-600);
`

const Button = styled.button`
    cursor: pointer;
    display: inline-flex;
    margin-left: -0.1rem;
    align-items: center;
    gap: var(--space-3xs);
    padding: var(--space-3xs) 1rem;
    background: none;
    border: 1px solid var(--color-tinted-cream);
    border-radius: 3rem;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: 400;
    color: var(--color-gray-600);
    transition: all 0.3s ease-in-out;
    svg {
        color: var(--color-gray-400);
        transition: all 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      color: var(--color-crimson);
      background: var(--color-cream);
      border: 1px solid var(--color-crimson);
      box-shadow: var(--box-shadow-sm);
      svg {
        color: var(--color-bright-crimson);
      }
    }
`;
