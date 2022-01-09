import { useRouter } from "next/router";
import GrowthIcon from "../components/icons/GrowthIcon";
import Logo from "../components/visuals/Logo";
import styled from "styled-components";

// Example URL: http://localhost:3000/og-image?title=A%20Brief%20History%20of%20the%20Digital%20Garden&subtitle=A%20newly%20revived%20philosophy%20for%20publishing%20personal%20knowledge%20on%20the%20web&postType=essay&growthStage=evergreen&cover=/images/covers/garden-cover@2x.png

// Example URL: http://localhost:3000/og-image?title=A%20Brief%20History%20of%20the%20Digital%20Garden&subtitle=A%20newly%20revived%20philosophy%20for%20publishing%20personal%20knowledge%20on%20the%20web&postType=essay&growthStage=evergreen

const OgImage = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const title = searchParams.get("title");
  const subtitle = searchParams.get("subtitle");
  const postType = searchParams.get("postType");
  const growthStage = searchParams.get("growthStage");
  const cover = searchParams.get("cover");

  return (
    <div
      style={{
        width: 1200,
        height: 630,
        padding: "var(--space-xl)",
        border: "1px solid red",
      }}
    >
      {postType && growthStage ? (
        <div style={{ marginBottom: "var(--space-xs)" }}>
          <StyledType>{postType}</StyledType>{" "}
          <GrowthIcon growthStage={growthStage} />{" "}
          <StyledGrowthStage>{growthStage}</StyledGrowthStage>
        </div>
      ) : null}
      <div style={{ marginBottom: "var(--space-l)" }}>
        <div style={{ width: cover ? "60%" : "100%" }}>
          <StyledTitle>{title}</StyledTitle>
          {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        </div>
        {cover ? (
          <div style={{ width: "475px" }}>
            <img src={cover} />
          </div>
        ) : null}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StyledSiteURL>maggieappleton.com</StyledSiteURL>
        <Logo />
      </div>
    </div>
  );
};

const StyledTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: var(--font-size-3xl);
  line-height: var(--leading-tighter);
  max-width: 80%;
`;

const StyledSubtitle = styled.h2`
  font-family: var(--font-serif);
  font-size: var(--font-size-lg);
  margin: var(--space-s) 0 0 0;
  color: var(--color-gray-800);
  font-weight: 100;
  line-height: var(--leading-tight);
  max-width: 80%;
`;

const StyledSiteURL = styled.p`
  font-family: var(--font-body);
  font-weight: 300;
  font-size: var(--font-size-md);
  color: var(--color-crimson);
`;

const StyledGrowthStage = styled.p`
  display: inline-block;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--font-size-xs);
  color: var(--color-gray-800);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
  padding-right: var(--space-xs);
`;

const StyledType = styled.span`
  display: inline-block;
  font-family: var(--font-sans);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
  padding-right: var(--space-xs);
  color: var(--color-bright-crimson);
`;

export default OgImage;
