import { Menu, MenuSelect, connectStateResults } from "react-instantsearch-dom";
import styled, { keyframes } from "styled-components";
import { capitalize } from "lodash";
import { useState, useEffect } from "react";

const LoadingFilters = () => (
	<Container>
		<TopicsContainer>
			<TopicLabel>
				<span>Topics</span>
				<svg width="2" height="14" fill="var(--color-sea-blue)">
					<rect width="2" height="14" />
				</svg>
			</TopicLabel>
			<LoadingTopics>
				{[...Array(6)].map((_, i) => (
					<LoadingPill key={i} />
				))}
			</LoadingTopics>
		</TopicsContainer>

		<RightMenus>
			{[...Array(2)].map((_, i) => (
				<LoadingSelect key={i} />
			))}
		</RightMenus>
	</Container>
);

const FiltersWithResults = connectStateResults(({ isSearchStalled }) => {
	const [initialLoad, setInitialLoad] = useState(true);

	useEffect(() => {
		if (!isSearchStalled && initialLoad) {
			// Once we've loaded for the first time, never show loading state again
			setInitialLoad(false);
		}
	}, [isSearchStalled]);

	if (initialLoad && isSearchStalled) {
		return <LoadingFilters />;
	}

	return (
		<Container>
			<TopicsContainer>
				<TopicLabel>
					<span>Topics</span>
					<svg width="2" height="14" fill="var(--color-sea-blue)">
						<rect width="2" height="14" />
					</svg>
				</TopicLabel>
				<Menu facetOrdering attribute="topics" limit={7} showMore />
			</TopicsContainer>

			<RightMenus>
				<MobileTopics>
					<MenuSelect
						aria-label="Topics"
						limit={20}
						translations={{
							seeAllOption: "All Topics",
						}}
						transformItems={(items) =>
							items.map((item) => ({
								...item,
								label: capitalize(item.label),
							}))
						}
						attribute="topics"
					/>
				</MobileTopics>
				<MenuSelect
					aria-label="Growth Stages"
					translations={{
						seeAllOption: "All Growth Stages",
					}}
					transformItems={(items) =>
						items.map((item) => ({
							...item,
							label: capitalize(item.label),
						}))
					}
					attribute="growthStage"
				/>
				<MenuSelect
					aria-label="Types"
					translations={{
						seeAllOption: "All Types",
					}}
					transformItems={(items) =>
						items.map((item) => ({
							...item,
							label: `${capitalize(item.label)}s`,
						}))
					}
					attribute="type"
				/>
			</RightMenus>
		</Container>
	);
});

export default function GardenFilters() {
	return <FiltersWithResults />;
}

const MobileTopics = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
	}
`;

const RightMenus = styled.div`
	display: flex;
	flex-direction: row;
	grid-gap: var(--space-3xs);
	@media (max-width: 768px) {
		justify-content: center;
	}
	@media (max-width: 500px) {
		flex-direction: column;
	}
	.ais-MenuSelect-select {
		padding: 0.4rem var(--space-2xs);
		border-radius: var(--border-radius-base);
		border: 1px solid var(--color-gray-300);
		color: var(--color-gray-700);
		background-color: var(--color-cream);
		transition: all 0.3s ease-in-out;
		@media (max-width: 768px) {
			width: 100%;
		}
		:hover {
			background: white;
			cursor: pointer;
		}
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	grid-gap: var(--space-m);
	align-items: top;
	justify-content: space-between;
	font-family: var(--font-sans);
	font-size: var(--font-size-xs);
	color: var(--color-gray-800);
	margin-bottom: var(--space-xl);
	@media (max-width: 768px) {
		flex-direction: column;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
		font-family: var(--font-sans);
		font-size: var(--font-size-xs);
		color: var(--color-gray-800);
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
		100% {
			opacity: 1;
		}
	}
`;

const TopicLabel = styled.div`
	display: flex;
	padding: var(--space-3xs) var(--space-2xs) var(--space-3xs) 0;
	color: var(--color-black);
	svg {
		margin: 4px 0 0 12px;
	}
	text-transform: uppercase;
	letter-spacing: 0.04rem;
	margin-right: var(--space-3xs);
`;

const TopicsContainer = styled.div`
	display: inline-flex;
	flex-direction: row;
	@media (max-width: 768px) {
		display: none;
	}
	.ais-Menu {
		align-items: start;
		transition: all 0.4s ease;
	}
	.ais-Menu-list {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		grid-gap: 4px;
		transition: all 0.4s ease;
		@media (max-width: 768px) {
			max-width: 70vw;
			flex-wrap: nowrap;
			overflow-x: scroll;
		}
	}
	.ais-Menu-item {
		border-radius: 3rem;
		padding: var(--space-3xs) var(--space-2xs);
		flex-wrap: nowrap;
		flex-shrink: 0;
		a {
			color: var(--color-gray-800);
		}
		transition: all 0.4s ease;
		:hover {
			background-color: var(--color-tinted-cream);
			a {
				color: var(--color-black);
			}
		}
	}
	.ais-Menu-item--selected {
		background-color: var(--color-sea-blue);
		transition: all 0.4s ease;
		a {
			color: white;
		}
		:hover {
			background-color: var(--color-medium-sea-blue);
			a {
				color: white;
			}
		}
	}
	.ais-Menu-count {
		display: none;
	}
	.ais-Menu-showMore {
		flex-shrink: 0;
		margin: 0;
		padding: var(--space-3xs) var(--space-2xs);
		border-radius: var(--border-radius-base);
		color: var(--color-gray-700);
		transition: all 0.4s ease;
		line-height: 1.2;
		margin-top: var(--space-3xs);
		font-size: calc(var(--font-size-xs) / 1.2);
		text-transform: uppercase;
		letter-spacing: 0.04rem;
		color: var(--color-crimson);
		@media (max-width: 768px) {
			display: none;
		}
		:hover {
			background-color: white;
			cursor: pointer;
		}
		:disabled {
			display: none;
		}
	}
`;

const LoadingTopics = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

const pulseKeyframes = keyframes`
  0% {
    opacity: 0;
  }
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
  }
`;

const LoadingPill = styled.div`
	height: 24px;
	width: 80px;
	background: var(--color-gray-300);
	border-radius: 3rem;
	animation: ${pulseKeyframes} 1.8s infinite;
`;

const LoadingSelect = styled.div`
	height: 24px;
	width: 120px;
	background: var(--color-gray-300);
	border-radius: var(--border-radius-base);
	animation: ${pulseKeyframes} 1.8s infinite;

	@media (max-width: 500px) {
		width: 100%;
	}
`;
