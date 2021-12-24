import Layout from "../components/Layout";
import { Title1, Title2, SmallCaps } from "../components/Typography";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import { Spacer } from "../components/Spacer";
import UnderlineHoverLink from "../components/links/UnderlineHoverLink";
import LeafIcon from "../components/icons/LeafIcon";
import { RelativeDate } from "../components/templates/Dates";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Header title="About Maggie Appleton" />
      <Layout>
        <HeaderSection>
          <SmallCaps>About</SmallCaps>
          <Title1>Maggie Appleton</Title1>
          <Title2>
            Designer, anthropologist, illustrator, and mediocre developer.
          </Title2>
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
                where we're developing open-source, interoperable systems to
                improve the way we structure knowledge on the web.
              </p>
              <p>
                Before that I spent five years as the art director and lead
                illustrator at{" "}
                <b style={{ margin: "0 0.5rem 0 0" }}>
                  <UnderlineHoverLink href="https://egghead.io">
                    egghead
                  </UnderlineHoverLink>
                </b>
                where I spent my time thinking about how to visualise invisible
                programming concepts through metaphors and cultural symbols.
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
            <Image
              src="/images/profile_bw_800.png"
              alt="a photo of maggie appleton"
              width={800 / 1.5}
              height={1141 / 1.5}
              layout="responsive"
              objectFit="contain"
            />
          </section>
          <Divider />
          <section className="talks">
            <Title2>Talks</Title2>
            <p>
              I occassionally give talks. Some are about why we should use more
              visual explanations and intentional metaphors in programming.
              Others touch on cultural anthropology topics and the narratives we
              tell ourselves in the world of software.
            </p>
            <GridSection>
              {[
                {
                  title: "A Picture Worth a Thousand Programmes",
                  slug: "/programming-pictures",
                  conferences: "React Advanced London",

                  date: "October 2021",
                },
                {
                  title:
                    "Tools for Thought as Cultural Systems, Not Computational Objects",
                  slug: "/tools-for-thought",
                  conferences: "Augmented Minds Unconference",

                  date: "July 2021",
                },
                {
                  title: "The Cultural Anthropology of React",
                  slug: "/anthropology-react",
                  conferences: "React Rally",

                  date: "August 2020",
                },
                {
                  title: "How to Become a Neo-Cartesian Cyborg",
                  slug: "neocyborgs",
                  conferences: "BASB London",
                  date: "May 2020",
                },
                {
                  title: "Evergreen Notes and Digital Gardens",
                  slug: "https://www.youtube.com/watch?v=RXXXHN516qc",
                  conferences: "Roam Research Tours",

                  date: "May 2020",
                },
                {
                  title:
                    "Drawing the Invisible: React Explained in Five Visual Metaphors",
                  slug: "/reactpotato",
                  conferences: "Women of React",

                  date: "May 2020",
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
                  podcastName: "Frontend Heroes",
                  episodeName: "Fortress of Solitude",
                  date: "August 10, 2021",
                  url: "https://frontendheroes.transistor.fm/episodes/fortress-of-solitude-w-maggie-appleton",
                },
                {
                  podcastName: "Metamuse",
                  episodeName: "Visual Programming",
                  date: "August 5, 2021",
                  url: "https://museapp.com/podcast/37-visual-programming/",
                },
                {
                  podcastName: "The Swyx Mixtape",
                  episodeName: "Growing Digital Gardens and Tending the Web",
                  date: "February 13 2021",
                  url: "https://podcasts.apple.com/us/podcast/weekend-drop-digital-gardening-w-maggie-appleton/id1549059398?i=1000508923478",
                },
                {
                  podcastName: "RoamFM",
                  episodeName:
                    "Digital Anthropology, Digital Gardens and Illustrated Notes",
                  date: "July 25 2020",
                  url: "https://thatsthenorm.com/maggie-appleton-transcript/",
                },
                {
                  podcastName: "Maintainers Anonymous",
                  episodeName: "Embodiment Through Metaphors",
                  date: "May 13 2020",
                  url: "https://maintainersanonymous.com/metaphor/",
                },
                {
                  podcastName: "egghead.io Podcast",
                  episodeName:
                    "Turning Technical Concepts into Approachable Illustrated Metaphors",
                  date: "May 3, 2019",
                  url: "https://egghead.io/podcasts/turning-technical-concepts-into-approachable-illustrated-metaphors-with-maggie-appleton",
                },
                {
                  podcastName: "Maintainers Anonymous",
                  episodeName: "Open Source as a Gift Economy",
                  date: "March 5 2020",
                  url: "https://maintainersanonymous.com/gift/",
                },
                {
                  podcastName: "React Podcast",
                  episodeName: "The Power of Mental Models",
                  date: "March 3, 2020",
                  url: "https://reactpodcast.simplecast.com/episodes/86",
                },
              ].map(({ podcastName, episodeName, date, url }, i) => (
                <TalkCard
                  key={i}
                  title={podcastName}
                  host={episodeName}
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

const GridSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: var(--space-m);
  margin: var(--space-xl) 0;
`;

const HeaderSection = styled(motion.header)`
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

const StyledMain = styled(motion.main)`
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
    grid-template-columns: 3fr 2fr;
    gap: var(--space-l);
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
      grid-template-columns: repeat(auto-fit, minmax(280px, auto));
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

const StyledTalkCard = styled(motion.div)`
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
