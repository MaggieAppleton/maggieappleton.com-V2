import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root {
			/* Spacing */
			--spacing-xs: 0.25rem;
			--spacing-sm: 0.5rem;
			--spacing-md: 1rem;
			--spacing-lg: 1.5rem;
			--spacing-xl: 2rem;
			--spacing-xxl: 3rem;
			--spacing-xxxl: 4rem;

            /* Colors */
			--color-primary: #00bcd4;
			--color-secondary: #ff9800;
			--color-tertiary: #ff5722;
			--color-quaternary: #9c27b0;
			--color-quinary: #673ab7;
			--color-senary: #2196f3;
			--color-septenary: #009688;

			/* Fonts */
			--font-primary: 'Roboto', sans-serif;
			--font-secondary: 'Roboto', sans-serif;

			/* Font sizes */
			--text-xl: 3.357rem;
			--text-lg: 2.686rem;
			--text-ml: 2.1485rem;
			--text-md: 1.718rem; 
			--text-body: 1.25rem;
			--text-sm: 1.1rem;
			--text-xs: 0.88rem;

        }

        * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Roboto', sans-serif;
        }
        html, body, #root {
                height: 100%;
        }
        body {
                background: #f5f5f5;
				padding: var(--spacing-md);
        }
`;
