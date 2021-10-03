import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		/* Spacing */
		--space-2: 0.125rem;
		--space-4: 0.25rem;
		--space-8: 0.5rem;
		--space-12: 0.75rem;
		--space-16: 1rem;
		--space-24: 1.5rem;
		--space-32: 2rem;
		--space-40: 2.5rem;
		--space-48: 3rem;
		--space-64: 4rem;
		--space-80: 5rem;
		--space-96: 6rem;
		--space-128: 8rem; 
		--space-160: 10rem; 

		/* Colors */
		--color-light-cream: #FCFBF7;
		--color-cream: #F6F5F1;
		--color-tinted-cream: #E6E3E1;
		--color-black: #353534;
		--color-gray-800: #4A4A46;
		--color-gray-600: #706E6C;
		--color-gray-300: #D3D3D1;
		--color-gray-100: #E9E9E7;
		--color-bright-crimson: #960462;
		--color-crimson: #5F023E;
		--color-sea-blue: #04A5BB;
		--color-dark-sea-blue: #017989;
		--color-purple: #7558B2;
		--color-salmon: #FD8370;


		/* Fonts */
		--font-serif: 'Canela Deck', serif;
		--font-body: 'Canela Text', serif;
		--font-sans: 'Lato', sans-serif;

		/* Font sizes */
		--ratio: 1.33;
		--font-size-3xl: calc(var(--font-size-2xl) * var(--ratio));
		--font-size-2xl: calc(var(--font-size-xl) * var(--ratio));
		--font-size-xl: calc(var(--font-size-lg) * var(--ratio));
		--font-size-lg: calc(var(--font-size-md) * var(--ratio));
		--font-size-md: calc(var(--font-size-base) * var(--ratio)); 
		--font-size-base: calc(1rem * var(--ratio));
		--font-size-sm: 1rem;
		--font-size-xs: 0.88rem;

		/* Leading */
		--leading-tighter: 110%;
		--leading-tight: 120%;
		--leading-snug: 130%;
		--leading-base: 140%;
		--leading-loose: 170%;
		--leading-looser: 190%;

		/* Border radius */
		--border-radius-sm: 0.2rem;
		--border-radius-base: 0.4rem;
		--border-radius-lg: 0.6rem;

		/* Box Shadows */
		--box-shadow-sm:
		0.2px 0.2px 0.8px -10px rgba(40, 10, 0, 0.014),
		0.4px 0.4px 2px -10px rgba(40, 10, 0, 0.02),
		0.8px 0.8px 3.8px -10px rgba(40, 10, 0, 0.025),
		1.3px 1.3px 6.7px -10px rgba(40, 10, 0, 0.03),
		2.5px 2.5px 12.5px -10px rgba(40, 10, 0, 0.036),
		6px 6px 30px -10px rgba(40, 10, 0, 0.05)
	  ;

	  --box-shadow-md: 
	  1px 0.9px 2.3px -3px rgba(40, 10, 0, 0.02),
	  2.4px 2.2px 5.5px -3px rgba(40, 10, 0, 0.028),
	  4.5px 4.1px 10.4px -3px rgba(40, 10, 0, 0.035),
	  8px 7.4px 18.5px -3px rgba(40, 10, 0, 0.042),
	  15px 13.8px 34.7px -3px rgba(40, 10, 0, 0.05),
	  36px 33px 83px -3px rgba(40, 10, 0, 0.07)
	;
	  
		--box-shadow-lg:
		0.2px 0.4px 0.8px -10px rgba(0, 0, 0, 0.03),
		0.4px 0.9px 2px -10px rgba(0, 0, 0, 0.030),
		0.8px 1.8px 3.8px -10px rgba(0, 0, 0, 0.038),
		1.3px 3.1px 6.7px -10px rgba(0, 0, 0, 0.045),
		2.5px 5.8px 12.5px -10px rgba(0, 0, 0, 0.06),
		6px 14px 30px -10px rgba(0, 0, 0, 0.08)
	  ;
	  

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

	/* Base styles */

	body {
		background: var(--color-cream);
		padding: var(--space-base);
		color: var(--color-black);
	}

	h1, h2 {
		font-family: var(--font-serif);
	}

	h3, h4, h5, h6 {
		font-family: var(--font-sans);
	}
	p, ul, ol {
		font-family: var(--font-body);
		font-size: var(--font-size-base);
	}
	a {
		text-decoration: none;
		color: var(--color-crimson);
	}
	.metadata span, span.metadata {
		font-size: var(--font-size-sm);
		font-family: var(--font-sans);
		color: var(--color-gray-600);
	}
`;
