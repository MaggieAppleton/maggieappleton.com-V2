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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {postType && growthStage ? (
        <div
          style={{
            marginBottom: "var(--space-s)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "min-content",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--font-size-xs)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: "bold",
              paddingRight: "var(--space-xs)",
              color: "var(--color-bright-crimson)",
            }}
          >
            {postType}
          </span>{" "}
          <GrowthIcon size={18} growthStage={growthStage} />{" "}
          <p
            style={{
              display: "inline-block",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--font-size-xs)",
              color: "var(--color-gray-800)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: "bold",
              paddingLeft: "var(--space-xs)",
            }}
          >
            {growthStage}
          </p>
        </div>
      ) : null}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div
            style={{
              marginBottom: `${cover ? "var(--space-l)" : "var(--space-xl)"}`,
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                lineHeight: "var(--leading-tighter)",
                marginTop: "0",
                maxWidth: "85%",
                fontSize: `${
                  cover
                    ? "calc(var(--font-size-3xl) / 1.3)"
                    : "var(--font-size-3xl)"
                }`,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  margin: "var(--space-s) 0 0 0",
                  color: "var(--color-gray-800)",
                  fontWeight: "100",
                  lineHeight: "var(--leading-tight)",
                  maxWidth: "80%",
                  fontSize: `${
                    cover
                      ? "calc(var(--font-size-lg) / 1.1)"
                      : "var(--font-size-lg)"
                  }`,
                }}
              >
                {subtitle}
              </h2>
            )}
          </div>
        </div>
        {cover ? (
          <div style={{ width: "750px", paddingLeft: "var(--space-s)" }}>
            <img src={cover} />
          </div>
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: "300",
            fontSize: "var(--font-size-md)",
            color: "var(--color-crimson)",
          }}
        >
          maggieappleton.com
        </p>
        <Logo />
      </div>
    </div>
  );
};

export default OgImage;
