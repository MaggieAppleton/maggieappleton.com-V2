import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

const IntroParagraph = styled.p`
    :first-letter {
        float: left;
        font-size: 4.8rem;
        line-height: ;
        font-weight: bold;
        margin: 1.15rem var(--space-12) 0 0;
    }
    p {
        margin-bottom: 0;
    }
    @media ${breakpoints.mediaSM} {
        :first-letter {
            float: left;
            font-size: 4.2rem;
            line-height: ;
            font-weight: bold;
            margin: 1.15rem var(--space-8) 0 0;
        }
    }
`;

export default IntroParagraph;
