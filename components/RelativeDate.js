export default function RelativeDate({ postDate }) {
    const date = new Date(postDate);
    const deltaDays = -(date.getTime() - Date.now()) / (1000 * 3600 * 24);
    console.log(date);
    const deltaWeeks = deltaDays / 7;
    const deltaMonths = deltaDays / 30;
    const deltaYears = deltaDays / 365;
    let result;
    if (deltaDays < 7) {
        result = `${Math.round(deltaDays)} days ago`;
    } else if (deltaWeeks < 4) {
        result = `${Math.round(deltaWeeks)} weeks ago`;
    } else if (deltaMonths < 12) {
        result = `${Math.round(deltaMonths)} months ago`;
    } else {
        result = `${Math.round(deltaYears)} years ago`;
    }
    return result;
}
