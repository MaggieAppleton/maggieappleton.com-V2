import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import Hardware from "../components/unique/apps/Hardware";

const tools = [
  {
    name: "Arc",
    url: "https://arc.com/",
    description: "Browser",
    image: "/images/tools/arc.png",
    type: "software",
  },
  {
    name: "Tana",
    url: "https://tana.inc/",
    description: "Knowledge management and notes",
    image: "/images/tools/tana.png",
    type: "software",
  },
  {
    name: "Eagle",
    url: "https://eagle.cool/",
    description: "Image reference management",
    image: "/images/tools/eagle.png",
    type: "software",
  },
  {
    name: "Todoist",
    url: "https://todoist.com/",
    description: "Task management",
    image: "/images/tools/todoist.png",
    type: "software",
  },
  {
    name: "Raycast",
    url: "https://www.raycast.com/",
    description: "Keyboard launcher",
    image: "/images/tools/raycast.png",
    type: "software",
  },
  {
    name: "Warp",
    url: "https://warp.dev/",
    description: "Command line",
    image: "/images/tools/warp.png",
    type: "software",
  },
  {
    name: "Keyboard Maestro",
    url: "https://www.keyboardmaestro.com/",
    description: "Automation",
    image: "/images/tools/keyboard-maestro.png",
    type: "software",
  },
  {
    name: "Session",
    url: "https://getsession.org/",
    description: "Focus",
    image: "/images/tools/session.png",
    type: "software",
  },
  {
    name: "Cold Turkey",
    url: "https://getcoldturkey.com/",
    description: "Distraction blocking",
    image: "/images/tools/cold-turkey.png",
    type: "software",
  },
  {
    name: "SuperWhisper",
    url: "https://superwhisper.com/",
    description: "Whisper API transcription",
    image: "/images/tools/superwhisper.png",
    type: "software",
  },
  {
    name: "CleanShotX",
    url: "https://cleanshot.com/",
    description: "Screenshots",
    image: "/images/tools/cleanshot.png",
    type: "software",
  },
  {
    name: "Mobbin",
    url: "https://mobbin.design/",
    description: "Design patterns",
    image: "/images/tools/mobbin.png",
    type: "software",
  },
  {
    name: "Lunch Money",
    url: "https://lunchmoney.app/",
    description: "Personal finance and budgeting",
    image: "/images/tools/lunchmoney.png",
    type: "software",
  },
  {
    name: "Garmin Vivomove",
    url: "https://buy.garmin.com/en-US/US/p/641121",
    description: "Fitness tracking",
    image: "/images/tools/garmin.png",
    type: "hardware",
  },
  {
    name: "Merrell Barefoot Trail Trainers",
    url: "https://www.merrell.com/US/en/barefoot/",
    description: "Running",
    image: "/images/tools/merrell.png",
    type: "hardware",
  },
  {
    name: "Walking Treadmill",
    url: "https://www.amazon.com/gp/product/B07Y5WZG5X/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    description: "Walking",
    image: "/images/tools/treadmill.png",
    type: "hardware",
  },
  {
    name: "Desk riser",
    url: "https://www.amazon.com/gp/product/B07X9G9J3P/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
    description: "Standing desk",
    image: "/images/tools/deskriser.png",
    type: "hardware",
  },
  {
    name: "Ucon Acrobatics Hajo backpack",
    url: "https://www.ucon-acrobatics.com/collections/backpacks/products/hajo-backpack",
    description: "Backpack",
    image: "/images/tools/hajo.png",
    type: "hardware",
  },
  {
    name: "Loop Earplugs",
    url: "https://www.loopearplugs.com/",
    description: "Earplugs",
    image: "/images/tools/loop.png",
    type: "hardware",
  },
];

export default function Uses() {
  return (
    <Layout>
      <Title1>Tools I Use</Title1>
      <Title2>Kit, apps, equipment, and the like</Title2>
      <StyledMain>
        <p>
          See what other folks use at <a href="https://uses.tech/">uses.tech</a>
        </p>
        <p>Software</p>
        <SoftwareGrid>
          {tools
            .filter((tool) => tool.type === "software")
            .map((tool) => (
              <div>
                <a href={tool.url}>
                  <img src={tool.image} alt={tool.name} />
                </a>
                <p>{tool.name}</p>
                <p>{tool.description}</p>
              </div>
            ))}
        </SoftwareGrid>
        <p>Hardware</p>
        <HardwareGrid>
          {tools
            .filter((tool) => tool.type === "hardware")
            .map((tool) => (
              <div>
                <a href={tool.url}>
                  <img src={tool.image} alt={tool.name} />
                </a>
                <p>{tool.name}</p>
                <p>{tool.description}</p>
              </div>
            ))}
        </HardwareGrid>
      </StyledMain>
    </Layout>
  );
}

const StyledMain = styled.main`
  margin-top: var(--space-sm);
  padding: var(--space-2xl) 0 var(--space-128);
  grid-column: 1/4 !important;
  width: 100%;
  @media ${breakpoints.mediaSM} {
    padding: var(--space-2xl) var(--space-xs);
  }
`;

const SoftwareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-xl);
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      max-width: 100px;
      margin-bottom: var(--space-xs);
    }
  }
`;

const HardwareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-xl);
`;
