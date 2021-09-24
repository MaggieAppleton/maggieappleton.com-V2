import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		/* Spacing */
		--space-3xs: 0.125rem;
		--space-2xs: 0.25rem;
		--space-xs: 0.5rem;
		--space-sm: 0.75rem;
		--space-base: 1rem;
		--space-md: 1.5rem;
		--space-lg: 2rem;
		--space-xl: 2.5rem;
		--space-2xl: 3rem;
		--space-3xl: 4rem;
		--space-4xl: 5rem;
		--space-5xl: 6rem;
		--space-6xl: 8rem;

		/* Colors */
		--colour-cream: #F6F5F1;
		--colour-black: #353534;
		--colour-gray-800: #5C5C5B;
		--colour-gray-600: #999895;
		--colour-gray-400: #D3D3D1;
		--colour-salmon: #FD8A78; 

		/* Fonts */
		--font-serif: 'Canela', serif;
		--font-sans: 'Lato', sans-serif;

		/* Font sizes */
		--font-size-3xl: 5.61rem;
		--font-size-2xl: 4.209rem;
		--font-size-xl: 3.157rem;
		--font-size-lg: 2.369rem;
		--font-size-md: 1.77rem; 
		--font-size-base: 1.33rem;
		--font-size-sm: 1rem;
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

	/* Base styles */

	body {
		background: var(--colour-cream);
		padding: var(--space-base);
		color: var(--colour-black);
	}

	h1 {
		font-size: var(--font-size-3xl);
		font-family: var(--font-serif);
	}

`;
