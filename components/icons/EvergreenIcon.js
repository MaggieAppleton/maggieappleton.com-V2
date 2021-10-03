import * as React from "react";

function EvergreenIcon(props) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 25 25"
            {...props}
        >
            <defs>
                <style>{".evergreen__cls-1{fill:var(--color-sea-blue)}"}</style>
            </defs>
            <path
                className="evergreen__cls-1"
                d="M12.76 15.45a.36.36 0 01-.52 0c-3.59-3.74-3.6-10.73 0-14.45a.36.36 0 01.52 0c3.59 3.72 3.6 10.71 0 14.45z"
            />
            <path
                className="evergreen__cls-1"
                d="M12.25 18.61a11.21 11.21 0 00-10.12-8.13.26.26 0 00-.27.29 10.36 10.36 0 0010.61 8.91h.06a10.36 10.36 0 0010.61-8.91.26.26 0 00-.27-.29 11.21 11.21 0 00-10.12 8.13.26.26 0 01-.5 0z"
            />
            <path
                className="evergreen__cls-1"
                d="M24.17 24.1a.33.33 0 00.32-.42 6.21 6.21 0 00-6-4.22 6.3 6.3 0 00-5.7 3.44.32.32 0 01-.58 0 6.3 6.3 0 00-5.7-3.44 6.21 6.21 0 00-6 4.22.33.33 0 00.32.42H12.5z"
            />
            <path fill="none" d="M0 0h25v25H0z" />
        </svg>
    );
}

export default EvergreenIcon;
