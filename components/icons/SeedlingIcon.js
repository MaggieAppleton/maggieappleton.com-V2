import * as React from "react";

function SeedlingIcon(props) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 25 25"
            {...props}
        >
            <path
                d="M12.21 16.47A12.63 12.63 0 00.81 7.31a.3.3 0 00-.31.33 11.67 11.67 0 0012 10h.06a11.67 11.67 0 0012-10 .3.3 0 00-.31-.33 12.63 12.63 0 00-11.4 9.16.3.3 0 01-.64 0z"
                fill="var(--color-sea-blue)"
            />
            <path fill="none" d="M0 0h25v25H0z" />
        </svg>
    );
}

export default SeedlingIcon;
