import { useRouter } from "next/router";
import styled from "styled-components";
import GrowthIcon from "../components/icons/GrowthIcon";
import Logo from "../components/visuals/Logo";

// Example URL: http://localhost:3000/og-image?title=A%20Brief%20History%20of%20the%20Digital%20Garden&subtitle=A%20newly%20revived%20philosophy%20for%20publishing%20personal%20knowledge%20on%20the%20web&postType=essay&growthStage=evergreen&cover=/images/covers/garden-cover@2x.png
const OgImage = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const title = searchParams.get("title");
  const subtitle = searchParams.get("subtitle");
  const postType = searchParams.get("postType");
  const growthStage = searchParams.get("growthStage");
  const cover = searchParams.get("cover");

  return (
    <OGCard>
      {postType && growthStage ? (
        <Metadata>
          {postType} <GrowthIcon growthStage={growthStage} /> {growthStage}
        </Metadata>
      ) : null}
      <Flex>
        <Titles>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Titles>
        {cover ? <Cover><img src={cover} /></Cover> : null}
      </Flex>
      <div>
        <span>maggieappleton.com</span>
        <Logo />
      </div>
    </OGCard>
  );
};

const Flex = styled.div`
  display: flex;
`;

const OGCard = styled.div`
  width: 1200px;
  height: 630px;
  padding: 46px 64px;
`

const Metadata = styled.div`
  display: flex;
  align-items: center;
`;

const Titles = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  font-size: var(--font-size-2xl);
  line-height: var(--leading-tighter);
  word-wrap: break-word;
`;

const Subtitle = styled.h2`
  font-family: var(--font-body);
  font-weight: 100;
  font-size: var(--font-size-lg);
  line-height: var(--leading-tighter);
  color: var(--color-gray-800);
  word-wrap: break-word;
`;

const Cover = styled.div`
  width: 475px;
`;

export default OgImage;
