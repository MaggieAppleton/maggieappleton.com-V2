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
			--font-size-xl: 3.357rem;
			--font-size-lg: 2.686rem;
			--font-size-ml: 2.1485rem;
			--font-size-md: 1.718rem; 
			--font-size-base: 1.25rem;
			--font-size-sm: 1.1rem;
			--font-size-xs: 0.88rem;

        }

		/* CSS Reset */
		/* Box sizing rules */
		*,
		*::before,
		*::after {
		box-sizing: border-box;
		}

		/* Remove default margin */
		body,
		h1,
		h2,
		h3,
		h4,
		p,
		figure,
		blockquote,
		dl,
		dd {
		margin: 0;
		}

		/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
		ul[role='list'],
		ol[role='list'] {
		list-style: none;
		}

		/* Set core root defaults */
		html:focus-within {
		scroll-behavior: smooth;
		}

		/* Set core body defaults */
		body {
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
		}

		/* A elements that don't have a class get default styles */
		a:not([class]) {
		text-decoration-skip-ink: auto;
		}

		/* Make images easier to work with */
		img,
		picture {
		max-width: 100%;
		display: block;
		}

		/* Inherit fonts for inputs and buttons */
		input,
		button,
		textarea,
		select {
		font: inherit;
		}

		/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
		@media (prefers-reduced-motion: reduce) {
		html:focus-within {
		scroll-behavior: auto;
		}
		
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
		}
				html, body, #root {
						height: 100%;
				}

			
				body {
						background: #f5f5f5;
						padding: var(--spacing-md);
				}

		`;
