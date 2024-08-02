import Layout from "../components/Layout";
import { Title1, Title2, SmallCaps } from "../components/Typography";
import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import { Spacer } from "../components/Spacer";
import UnderlineHoverLink from "../components/links/UnderlineHoverLink";
import { RelativeDate } from "../components/templates/Dates";
import { useState } from "react";

const photoSources = [
	"/images/Stripe2_1000.jpg",
	"/images/Scarf_1000.jpg",
	"/images/Brown_1000.jpg",
];

function RandomPhoto() {
	const [currentImage, setCurrentImage] = useState(
		photoSources[Math.floor(Math.random() * photoSources.length)]
	);

	return (
		<Image
			src={currentImage}
			alt="a photo of maggie appleton"
			width={800 / 1.25}
			height={1200 / 1.25}
			layout="responsive"
			objectFit="contain"
		/>
	);
}

export default function About() {
	return (
		<>
			<Header title="About Maggie Appleton" />
			<Layout>
				<HeaderSection>
					<SmallCaps>About</SmallCaps>
					<Title1>Maggie Appleton</Title1>
					<Title2>Designer, anthropologist, and mediocre developer.</Title2>
				</HeaderSection>
				<StyledMain>
					<section className="intro">
						<div>
							<SmallCaps>A Little Context</SmallCaps>
							<p>
								I sit at the intersection of design, anthropology, and
								programming. These three are at the core of everything I make.
								Combining them into a coherent career is a weird and ongoing
								challenge.
							</p>
							<p>
								Titles and disciplines are fickle and fleeting. But my work fits
								under the umbrellas of UX design, visual interface design, and
								DX (developer experience). With some cultural analysis, writing,
								and visual illustration sprinkled on top.
							</p>
							<p>
								I'm a lead design engineer at
								<b style={{ margin: "0 0.6rem 0 0.3rem" }}>
									<UnderlineHoverLink href="https://normally.com">
										Normally
									</UnderlineHoverLink>
								</b>
								, a research and design studio building mindful AI into all
								kinds of products and services.
							</p>
							<p>
								Before that I was the founding designer at
								<b style={{ margin: "0 0.6rem 0 0.3rem" }}>
									<UnderlineHoverLink href="https://elicit.com">
										Elicit
									</UnderlineHoverLink>
								</b>
								, a tool that uses machine learning and language models to
								improve the systematic review process for researchers and
								scientists.
							</p>
							<p>
								Before Elicit I was head of design at{" "}
								<b style={{ margin: "0 0.5rem 0 0" }}>
									<UnderlineHoverLink href="https://hash.ai">
										HASH
									</UnderlineHoverLink>
								</b>{" "}
								– a company developing an open-source platform to improve the
								way we structure knowledge on the web.
							</p>
							<p>
								Before that I spent five years at the developer education
								company{" "}
								<b style={{ margin: "0 0.5rem 0 0" }}>
									<UnderlineHoverLink href="https://egghead.io">
										egghead
									</UnderlineHoverLink>
								</b>
								as the art director and UX designer. It was there that I
								developed a system for visualising programming concepts through
								metaphors and cultural symbols.
							</p>
							<p>
								On the side I create{" "}
								<b style={{ margin: "0 0.4rem 0 0" }}>
									<UnderlineHoverLink href="/essays">
										illustrated essays
									</UnderlineHoverLink>
								</b>{" "}
								and visual explanations about programming and culture. I'm an
								advocate of{" "}
								<b style={{ margin: "0 0.4rem 0 0" }}>
									<UnderlineHoverLink href="/garden-history">
										digital gardening
									</UnderlineHoverLink>
								</b>
								,{" "}
								<b style={{ margin: "0 0.4rem 0 0" }}>
									<UnderlineHoverLink href="https://en.wikipedia.org/wiki/End-user_development">
										end-user programming
									</UnderlineHoverLink>
								</b>
								, and expanding our use of{" "}
								<b style={{ margin: "0 0.4rem 0 0" }}>
									<UnderlineHoverLink href="https://en.wikipedia.org/wiki/Embodied_cognition">
										embodied cognition
									</UnderlineHoverLink>
								</b>{" "}
								and{" "}
								<b style={{ margin: "0 0.4rem 0 0" }}>
									<UnderlineHoverLink href="https://en.wikipedia.org/wiki/Conceptual_metaphor">
										conceptual metaphors
									</UnderlineHoverLink>
								</b>{" "}
								in digital interfaces.
							</p>
							<SmallCaps>A Little History</SmallCaps>
							<p>
								I'm originally from London but grew up in international schools
								in Hong Kong, Vietnam, Thailand, and Singapore.
							</p>
							<p>
								{" "}
								I earned my undergraduate degree in{" "}
								<b style={{ margin: "0 0.4rem 0 0" }}>
									<UnderlineHoverLink href="https://en.wikipedia.org/wiki/Cultural_anthropology">
										cultural anthropology
									</UnderlineHoverLink>
								</b>{" "}
								at a small, hippie, liberal arts college in the United States.
								While I adore anthropology, it's not terribly employable (unless
								you want to be an academic or a military advisor) and I promptly
								switched into freelance design and illustration to pay rent. I
								started developing my visual design skills at age 14 when I
								first bootlegged a copy of Photoshop to make my own icon sets,
								but never realised you could get paid for that.
							</p>
							<p>
								In my early twenties I country-hopped while working through the
								early, ugly, awkward phase of my design sensibilities. I worked
								with web developers in Vietnam, trained with feature film
								illustrators in Los Angeles, and learned typography and brand
								design at creative agencies in Prague. I made a lot of hideous
								stuff, but figured out what I liked along the way.
							</p>
							<p>
								I eventually returned to London to become a more settled,
								"normal" adult, and have come to love the dull stability of
								home.
							</p>
						</div>
						<RandomPhoto />
					</section>
					<Divider />
					<section className="talks">
						<Title2>Talks</Title2>
						<p>
							I occasionally give talks. Some are about why we should use more
							visual explanations and intentional metaphors in programming.
							Others touch on cultural anthropology topics and the narratives we
							tell ourselves in the world of software.
						</p>
						<GridSection>
							{[
								{
									title: "The Block-paved Path to Structured Data",
									slug: "/block-data",
									conferences: "Structured Content Conference",
									date: "2022-05-25",
								},
								{
									title: "A Picture Worth a Thousand Programmes",
									slug: "/programming-pictures",
									conferences:
										"React Live Amsterdam, CityJS London, and React Advanced London",
									date: "2022-04-01",
								},
								{
									title:
										"Tools for Thought as Cultural Systems, Not Computational Objects",
									slug: "/tools-for-thought",
									conferences: "Augmented Minds Unconference",
									date: "2021-07-01",
								},
								{
									title: "The Cultural Anthropology of React",
									slug: "/anthropology-react",
									conferences: "React Rally",
									date: "2021-08-01",
								},
								{
									title: "How to Become a Neo-Cartesian Cyborg",
									slug: "neocyborgs",
									conferences: "BASB London",
									date: "2020-03-01",
								},
								{
									title: "Evergreen Notes and Digital Gardens",
									slug: "https://www.youtube.com/watch?v=RXXXHN516qc",
									conferences: "Roam Research Tours",
									date: "2020-05-01",
								},
								{
									title:
										"Drawing the Invisible: React Explained in Five Visual Metaphors",
									slug: "/reactpotato",
									conferences: "Women of React",
									date: "2020-05-01",
								},
							].map(({ title, conferences, date, slug }, i) => (
								<TalkCard
									key={i}
									title={title}
									host={conferences}
									date={date}
									url={slug}
								/>
							))}
						</GridSection>
						<div className="images">
							<Image
								src="/images/talks_1.jpg"
								alt="a photo of maggie speaking on stage"
								width={1600 / 3}
								height={1104 / 3}
								layout="responsive"
							/>
							<Image
								src="/images/talks_2.jpg"
								alt="a photo of maggie answering questions after a talk"
								width={1600 / 3}
								height={1104 / 3}
								layout="responsive"
							/>
							<Image
								src="/images/talks_3.jpg"
								alt="a photo of maggie in front of a large presentation slide"
								width={1600 / 3}
								height={1104 / 3}
								layout="responsive"
							/>
						</div>
					</section>
					<Spacer />
					<section className="podcasts">
						<Title2>Podcasts</Title2>
						<p>
							A handful of kind and interesting people have been gracious enough
							to let me ramble about programming, metaphors, and/or programming
							metaphors on their podcasts.
						</p>
						<GridSection>
							{[
								{
									podcastName: "The Stack Overflow Podcast",
									episodeName:
										"Want to be Great at UX Research? Take a Cue from Cultural Anthropology",
									date: "2022-05-09",
									url: "https://stackoverflow.blog/2022/06/10/want-to-be-great-at-ux-research-take-a-cue-from-cultural-anthropology-ep-451/",
								},
								{
									podcastName: "Reverb",
									episodeName: "On Digital Gardening",
									date: "2022-04-13",
									url: "https://anchor.fm/reverbbysane/episodes/EP-09-Maggie-Appleton-on-digital-gardening-e1hrec7",
								},
								{
									podcastName: "Frontend Heroes",
									episodeName: "Fortress of Solitude",
									date: "2021-08-10",
									url: "https://frontendheroes.transistor.fm/episodes/fortress-of-solitude-w-maggie-appleton",
								},
								{
									podcastName: "Metamuse",
									episodeName: "Visual Programming",
									date: "2021-08-05",
									url: "https://museapp.com/podcast/37-visual-programming/",
								},
								{
									podcastName: "Hope in Source",
									episodeName: "Digital Disembodiment",
									date: "2021-04-05",
									url: "https://hopeinsource.com/disembodiment/",
								},
								{
									podcastName: "She's in Tech",
									episodeName: "Unique Roles of a Developer",
									date: "2021-03-23",
									url: "https://topenddevs.com/podcasts/she-s-in-tech/episodes/episode-5-unique-roles-of-a-developer-she-s-in-tech-004",
								},
								{
									podcastName: "The Swyx Mixtape",
									episodeName: "Growing Digital Gardens and Tending the Web",
									date: "2021-02-13",
									url: "https://podcasts.apple.com/us/podcast/weekend-drop-digital-gardening-w-maggie-appleton/id1549059398?i=1000508923478",
								},
								{
									podcastName: "RoamFM",
									episodeName:
										"Digital Anthropology, Digital Gardens and Illustrated Notes",
									date: "2020-07-25",
									url: "https://thatsthenorm.com/maggie-appleton-transcript/",
								},
								{
									podcastName: "Hope in Source",
									episodeName: "Technology as Process",
									date: "2020-11-02",
									url: "https://hopeinsource.com/process/",
								},
								{
									podcastName: "Hope in Source",
									episodeName: "Embodied Knowledge - Part 2",
									date: "2020-11-02",
									url: "https://hopeinsource.com/embodied/",
								},
								{
									podcastName: "Hope in Source",
									episodeName: "Embodied Knowledge - Part 1",
									date: "2020-05-13",
									url: "https://hopeinsource.com/metaphor/",
								},
								{
									podcastName: "Hope in Source",
									episodeName: "Open Source as a Gift Economy",
									date: "2020-05-03",
									url: "https://hopeinsource.com/gift/",
								},
								{
									podcastName: "React Podcast",
									episodeName: "The Power of Mental Models",
									date: "2020-03-03",
									url: "https://reactpodcast.simplecast.com/episodes/86",
								},
								{
									podcastName: "egghead.io Podcast",
									episodeName:
										"Turning Technical Concepts into Approachable Illustrated Metaphors",
									date: "2019-05-03",
									url: "https://egghead.io/podcasts/turning-technical-concepts-into-approachable-illustrated-metaphors-with-maggie-appleton",
								},
							].map(({ podcastName, episodeName, date, url }, i) => (
								<TalkCard
									key={i}
									title={episodeName}
									host={podcastName}
									date={date}
									url={url}
								/>
							))}
						</GridSection>
					</section>
				</StyledMain>
			</Layout>
		</>
	);
}

const Divider = styled.hr`
	margin: var(--space-3xl) 0;
	height: 2px;
	background-color: var(--color-salmon);
	border: none;
	width: 20%;
	@media ${breakpoints.mediaSM} {
		margin: var(--space-xl) 0;
	}
`;

const GridSection = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, auto));
	gap: var(--space-m);
	margin: var(--space-xl) 0;
`;

const HeaderSection = styled.header`
	margin: var(--space-m) auto 0;
	${SmallCaps} {
		margin-bottom: var(--space-3xs);
		color: var(--color-gray-600);
	}
	h1 {
		margin-bottom: var(--space-s);
	}
	h2 {
		color: var(--color-gray-800);
	}
`;

const StyledMain = styled.main`
	margin-top: var(--space-xs);
	padding: var(--space-xl) 0;
	width: 100%;
	@media ${breakpoints.mediaSM} {
		padding: var(--space-l) var(--space-xs);
	}
	img {
		border-radius: 4px;
	}
	h2 {
		margin-bottom: var(--space-s);
	}
	p {
		line-height: var(--leading-loose);
		max-width: 52ch;
	}
	p:not(:last-of-type) {
		margin-bottom: var(--space-s);
	}
	section.intro {
		display: grid;
		grid-template-columns: 4fr 3fr;
		gap: var(--space-xl);
		align-items: flex-start;
		${SmallCaps}:not(:first-of-type) {
			margin-top: var(--space-xl);
			color: var(--color-gray-900);
		}
		${SmallCaps}::before {
			content: "";
			display: inline-block;
			width: 20px;
			clear: both;
			height: 20px;
			margin-right: -1.5rem;
			background-image: url("/images/leaf-icon.svg");
			background-size: contain;
			background-repeat: no-repeat;
			position: relative;
			top: 4px;
			right: 2.25rem;
		}
		@media ${breakpoints.mediaSM} {
			grid-template-columns: 1fr;
			gap: var(--space-m);
			flex-direction: column;
		}
	}
	section.talks {
		div.images {
			margin-top: var(--space-l);
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(500px, auto));
			gap: var(--space-s);
		}
	}
`;

function TalkCard({ title, host, date, url, key }) {
	return (
		<a key={key} href={url}>
			<StyledTalkCard>
				<div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							gap: "var(--space-xs)",
						}}
					>
						{/* <LeafIcon width="20" height="20" /> */}
						<svg
							fill="var(--color-sea-blue"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMinYMin meet"
							viewBox="0 0 3 20"
							width="3"
							height="20"
						>
							<rect width="3" height="20" />
						</svg>
						<h3>{title}</h3>
					</div>
					<span className="host">{host}</span>
					<span className="date">
						<RelativeDate postDate={date} />
					</span>
				</div>
			</StyledTalkCard>
		</a>
	);
}

const StyledTalkCard = styled.div`
	display: flex;
	flex-direction: row;
	border-radius: var(--border-radius-base);
	border: 1px solid var(--color-cream);
	transition: all 0.3s ease-in-out;
	h3 {
		color: var(--color-gray-800);
		transition: all 0.3s ease-in-out;
		font-family: var(--font-body);
		font-size: var(--font-size-base);
		font-weight: 400;
		line-height: var(--leading-snug);
		margin-bottom: var(--space-3xs);
		transition: all 0.3s ease-in-out;
	}
	svg {
		display: inline-block;
		position: relative;
		top: 6px;
		flex-shrink: 0;
		transition: all 0.3s ease-in-out;
	}
	div {
		display: flex;
		flex-direction: column;
		span.host {
			color: var(--color-gray-600);
			font-family: var(--font-sans);
			font-size: var(--font-size-sm);
			margin: 0 0 var(--space-3xs) 1.3rem;
			transition: all 0.3s ease-in-out;
		}
		span.date {
			font-family: var(--font-sans);
			font-size: calc(var(--font-size-xs) / 1.08);
			color: var(--color-gray-600);
			text-transform: uppercase;
			letter-spacing: 0.05em;
			font-weight: 400;
			margin: 0 0 var(--space-3xs) 1.3rem;
			transition: all 0.3s ease-in-out;
		}
	}
	&:hover {
		h3 {
			color: var(--color-bright-crimson);
			transform: translateX(8px);
		}
		span {
			transform: translateX(8px);
		}
		svg {
			transform: scaleX(3.5) translateX(1px);
		}
	}
`;
