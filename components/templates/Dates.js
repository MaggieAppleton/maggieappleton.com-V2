import styled from "styled-components";

export default function Dates({ startDate, updated }) {
    const relativeStart = roundDatesToMonth(startDate);
    const relativeUpdated = roundDatesToMonth(updated);

    if (relativeStart === relativeUpdated || relativeUpdated > 18) {
        return (
            <StyledDates>
                <span>
                    Planted <RelativeDate postDate={updated} />
                </span>
            </StyledDates>
        );
    } else {
        return (
            <StyledDates>
                {startDate && (
                    <span>
                        Planted <RelativeDate postDate={startDate} />
                    </span>
                )}
                {updated && (
                    <span>
                        Last tended <RelativeDate postDate={updated} />
                    </span>
                )}
            </StyledDates>
        );
    }
}

const StyledDates = styled.div`
    margin-top: var(--space-xs);
    display: flex;
    flex-direction: column;
    text-align: right;
    span {
        display: inline-block;
        font-family: var(--font-sans);
        font-size: var(--font-size-xs);
        color: var(--color-gray-600);
        letter-spacing: 0.01em;
        font-weight: 400;
    }
`;

function roundDatesToMonth(postDate) {
    const date = new Date(postDate);
    const deltaDays = -(date.getTime() - Date.now()) / (1000 * 3600 * 24);
    const deltaMonths = deltaDays / 30;
    return Math.round(deltaMonths);
}

export function RelativeDate({ postDate }) {
    const date = new Date(postDate);
    const deltaDays = -(date.getTime() - Date.now()) / (1000 * 3600 * 24);
    const deltaWeeks = deltaDays / 7;
    const deltaMonths = deltaDays / 30;
    const deltaYears = deltaDays / 365;
    const remainderMonths = (deltaDays % 365) / 30;
    let result;
    if (deltaDays < 7) {
        result = `${Math.round(deltaDays)} days ago`;
    } else if (deltaWeeks < 4) {
        result = `${Math.round(deltaWeeks)} weeks ago`;
    } else if (deltaMonths < 18) {
        result = `${Math.round(deltaMonths)} months ago`;
    } else {
        result = `${Math.round(deltaYears)} years ago`;
    }
    return result;
}
