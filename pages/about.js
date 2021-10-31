import Layout from "../components/Layout";
import { Title1, Title2, SmallCaps } from "../components/Typography";
import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import { Spacer } from "../components/Spacer";
import UnderlineHoverLink from "../components/links/UnderlineHoverLink";

export default function About() {
    return (
        <>
            <Header title="About Maggie Appleton" />
            <Layout>
                <HeaderSection>
                    <SmallCaps>About</SmallCaps>
                    <Title1>Maggie Appleton</Title1>
                    <Title2>
                        Designer, anthropologist, illustrator, and mediocre
                        developer.
                    </Title2>
                </HeaderSection>
                <StyledMain>
                    <section className="intro">
                        <div>
                            <SmallCaps>A Little Context</SmallCaps>
                            <p>
                                I sit at the intersection of design,
                                anthropology, and programming. These three are
                                at the core of everything I make. Combining them
                                into a coherent career is a weird and ongoing
                                challenge.
                                {/* <br />
                                If I had to invent a fake spectrum to visualise
                                my skills on, we'd probably end up with this: */}
                            </p>
                            <p>
                                I currently lead design at
                                <b style={{ margin: "0 0.6rem 0 0.3rem" }}>
                                    <UnderlineHoverLink href="https://hash.ai">
                                        HASH
                                    </UnderlineHoverLink>
                                </b>
                                where we're developing open-source,
                                interoperable systems to improve the way we
                                structure knowledge on the web.
                            </p>
                            <p>
                                Before that I spent five years as the art
                                director and lead illustrator at{" "}
                                <b style={{ margin: "0 0.5rem 0 0" }}>
                                    <UnderlineHoverLink href="https://egghead.io">
                                        egghead
                                    </UnderlineHoverLink>
                                </b>
                                where I spent my time thinking about how to
                                visualise invisible programming concepts through
                                metaphors and cultural symbols.
                            </p>
                            <p>
                                On the side I create{" "}
                                <b style={{ margin: "0 0.4rem 0 0" }}>
                                    <UnderlineHoverLink href="/essays">
                                        illustrated essays
                                    </UnderlineHoverLink>
                                </b>{" "}
                                and visual explanations about programming and
                                culture. I'm an advocate of{" "}
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
                                I'm originally from London but grew up in
                                international schools in Hong Kong, Vietnam,
                                Thailand, and Singapore.
                            </p>
                            <p>
                                {" "}
                                I earned my undergraduate degree in{" "}
                                <b style={{ margin: "0 0.4rem 0 0" }}>
                                    <UnderlineHoverLink href="https://en.wikipedia.org/wiki/Cultural_anthropology">
                                        cultural anthropology
                                    </UnderlineHoverLink>
                                </b>{" "}
                                at a small, hippie, liberal arts college in the
                                United States. While I adore anthropology, it's
                                not terribly employable (unless you want to be
                                an academic or a military advisor) and I
                                promptly switched into freelance design and
                                illustration to pay rent. I started developing
                                my visual design skills at age 14 when I first
                                bootlegged a copy of Photoshop to make my own
                                icon sets, but never realised you could get paid
                                for that.
                            </p>
                            <p>
                                In my early twenties I country-hopped while
                                working through the early, ugly, awkward phase
                                of my design sensibilities. I worked with web
                                developers in Vietnam, trained with feature film
                                illustrators in Los Angeles, and learned
                                typography and brand design at creative agencies
                                in Prague. I made a lot of hideous stuff, but
                                figured out what I liked along the way.
                            </p>
                            <p>
                                I eventually returned to London to become a more
                                settled, "normal" adult, and have come to love
                                the dull stability of home.
                            </p>
                        </div>
                        <Image
                            src="/images/profile_bw_700.png"
                            alt="a photo of maggie appleton"
                            width={700 / 1.5}
                            height={922 / 1.5}
                            layout="responsive"
                            objectFit="contain"
                        />
                    </section>
                    <Spacer />
                    <section className="talks">
                        <Title2>Talks</Title2>
                        <p>
                            I occassionally give talks. Some are about why we
                            should use more visual explanations and intentional
                            metaphors in programming. Others touch on cultural
                            anthropology topics and the narratives we tell
                            ourselves in the world of software.
                        </p>
                        {[
                            {
                                title: "A Picture Worth a Thousand Programmes",
                                slug: "/programming-pictures",
                                conferences: ["React Advanced London"],
                                description: "",
                                date: "October 2021",
                            },
                            {
                                title: "Tools for Thought as Cultural Systems, Not Computational Software",
                                slug: "/programming-pictures",
                                conferences: ["React Advanced London"],
                                description: "",
                                date: "October 2021",
                            },
                            {
                                title: "The Cultural Anthropology of React",
                                slug: "/programming-pictures",
                                conferences: ["React Advanced London"],
                                description: "",
                                date: "October 2021",
                            },
                            {
                                title: "Drawing the Invisible: React Explained in Five Visual Metaphors",
                                slug: "/programming-pictures",
                                conferences: [
                                    "Women of React",
                                    "egghead Talks",
                                ],
                                description: "",
                                date: ["July 2020", "September 2020"],
                            },
                        ].map(({ title, conferences, date, slug }, i) => (
                            <div key={i}>
                                {title}
                                {conferences}
                                {date}
                            </div>
                        ))}
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
                        </div>
                    </section>
                </StyledMain>
            </Layout>
        </>
    );
}

const HeaderSection = styled.header`
    margin: var(--space-24) auto 0;
    ${SmallCaps} {
        margin-bottom: var(--space-16);
        color: var(--color-gray-600);
    }
    h1 {
        margin-bottom: var(--space-24);
    }
    h2 {
        color: var(--color-gray-800);
    }
`;

const StyledMain = styled.main`
    margin-top: var(--space-16);
    padding: var(--space-64) 0;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-80) var(--space-16);
    }
    img {
        border-radius: 4px;
    }
    h2 {
        margin-bottom: var(--space-16);
    }
    p {
        line-height: var(--leading-loose);
        margin-bottom: var(--space-24);
        max-width: 52ch;
    }
    section.intro {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: var(--space-48);
        align-items: flex-start;
        ${SmallCaps}:not(:first-of-type) {
            margin-top: var(--space-64);
            color: var(--color-gray-900);
        }
        @media ${breakpoints.mediaSM} {
            grid-template-columns: 1fr;
            gap: var(--space-32);
            flex-direction: column;
        }
    }
    section.talks {
        div.images {
            margin-top: var(--space-48);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, auto));
            gap: var(--space-24);
        }
    }
`;
