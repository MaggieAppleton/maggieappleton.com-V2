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
		--color-cream: #F6F5F1;
		--color-black: #353534;
		--color-gray-800: #5C5C5B;
		--color-gray-600: #999895;
		--color-gray-400: #D3D3D1;
		--color-salmon: #FD8A78; 

		/* Fonts */
		--font-serif: 'Canela', serif;
		--font-body: 'Canela Text', serif;
		--font-sans: 'Lato', sans-serif;

		/* Font sizes */
		--font-size-3xl: 5.4rem;
		--font-size-2xl: 4.209rem;
		--font-size-xl: 3.157rem;
		--font-size-lg: 2.369rem;
		--font-size-md: 1.77rem; 
		--font-size-base: 1.33rem;
		--font-size-sm: 1rem;
		--font-size-xs: 0.88rem;

		/* Leading */
		--leading-tightest: 1em;
		--leading-tight: 1.2em;
		--leading-snug: 1.33em;
		--leading-base: 1.5em;
		--leading-loose: 1.7em;

		/* Border radius */
		--border-radius-base: 0.25rem;
		--border-radius-sm: 0.125rem;
		--border-radius-lg: 0.5rem;
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
	p, a {
		font-family: var(--font-body);
		font-size: var(--font-size-base);
	}
`;
