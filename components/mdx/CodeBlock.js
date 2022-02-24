import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
// import useClipboard from "react-use-clipboard";
// import Tippy from "@tippyjs/react";

export default function CodeBlock({ children }) {
  const language = children.props.className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.props.children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledCodeWrapper>
          <StyledCodeBlock className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </StyledCodeBlock>
        </StyledCodeWrapper>
      )}
    </Highlight>
  );
}

const StyledCodeWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const StyledCodeBlock = styled.pre`
  width: 100%;
  overflow: scroll;
  font-size: calc(var(--font-size-sm) * 1.1);
  line-height: var(--leading-loose);
  font-family: IBM Plex Mono, Dank Mono, SF Mono, consolas;
  padding: var(--space-24) var(--space-32);
  border-radius: 0.3em;
`;

// const StyledNumberSpan = styled.span`
//     display: inline-block;
//     width: 2em;
//     user-select: none;
//     opacity: 0.3;
// `;

// const CopyToClipboard = ({ code }) => {
//     const [isCopied, setCopied] = useClipboard(code, { successDuration: 1000 });

//     return (
//         <Tippy
//             animation={false}
//             hideOnClick={false}
//             content={
//                 <span className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded-md">
//                     {isCopied ? "Copied" : "Copy code to clipboard"}
//                 </span>
//             }
//         >
//             <button
//                 onClick={() => {
//                     setCopied();
//                 }}
//                 type="button"
//                 aria-label="Copy code to clipboard"
//                 className="hover:bg-opacity-5 bg-white bg-opacity-0 p-2 text-gray-400 hover:text-white transition-all duration-100 ease-in-out focus:ring-1 focus:ring-white focus:ring-opacity-30 focus:outline-none rounded-md"
//             >
//                 {isCopied ? (
//                     //   prettier-ignore
//                     <svg aria-hidden xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
//                 ) : (
//                     // prettier-ignore
//                     <svg aria-hidden xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></g></svg>
//                 )}
//             </button>
//         </Tippy>
//     );
// };
