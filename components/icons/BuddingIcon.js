import * as React from "react";

function BuddingIcon(props) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 25 25"
            {...props}
        >
            <defs>
                <style>{".budding__cls-1{fill:var(--color-sea-blue)}"}</style>
            </defs>
            <path
                className="budding__cls-1"
                d="M12.79 18.34a.41.41 0 01-.59 0c-4-4.22-4-12.11 0-16.32a.4.4 0 01.59 0c4.06 4.21 4.06 12.1 0 16.32z"
            />
            <path
                className="budding__cls-1"
                d="M12.21 21.89a12.63 12.63 0 00-11.4-9.16.3.3 0 00-.31.33 11.67 11.67 0 0012 10h.06a11.67 11.67 0 0012-10 .3.3 0 00-.31-.33 12.63 12.63 0 00-11.4 9.16.3.3 0 01-.64 0z"
            />
            <path fill="none" d="M0 0h25v25H0z" />
        </svg>
    );
}

export default BuddingIcon;
