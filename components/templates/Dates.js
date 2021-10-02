import styled from "styled-components";

export default function Dates({ startDate, updated }) {
    const relativeStart = roundDatesToWeek(startDate);
    const relativeUpdated = roundDatesToWeek(updated);

    if (relativeStart === relativeUpdated) {
        return (
            <StyledDates className="metadata">
                <span>
                    Planted <RelativeDate postDate={updated} />
                </span>
            </StyledDates>
        );
    } else {
        return (
            <StyledDates className="metadata">
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
    margin-top: var(--space-16);
    display: flex;
    flex-direction: column;
    text-align: right;
`;

function roundDatesToWeek(postDate) {
    const date = new Date(postDate);
    const deltaDays = -(date.getTime() - Date.now()) / (1000 * 3600 * 24);
    const deltaMonths = deltaDays / 30;
    return Math.round(deltaMonths);
}

function RelativeDate({ postDate }) {
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
    } else if (deltaMonths < 12) {
        result = `${Math.round(deltaMonths)} months ago`;
    } else if (deltaYears < 2) {
        result = `${Math.round(deltaYears)} years and ${Math.round(
            remainderMonths
        )} months ago`;
    } else {
        result = `${Math.round(deltaYears)} years ago`;
    }
    return result;
}
