import { useRouter } from "next/router";
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
    <div style={{ width: 1200, height: 630, padding: '46px 64px'}}>
      {postType && growthStage ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {postType} <GrowthIcon growthStage={growthStage} /> {growthStage}
        </div>
      ) : null}
      <div style={{ display: 'flex' }}>
        <div style={{ width: cover ? '50%' : '100%' }}>
          <h1
            style={{
              fontSize: 'var(--font-size-2xl)',
              lineHeight: 'var(--leading-tighter)',
              wordWrap: 'break-word'
            }}>{title}</h1>
          {subtitle &&
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: '300',
                fontSize: 'var(--font-size-lg)',
                lineHeight: 'var(--leading-tighter)',
                color: 'var(--color-gray-800)',
                wordWrap: 'break-word'
              }}>{subtitle}</h2>}
        </div>
        {cover ? <div style={{ width: '475px' }}><img src={cover} /></div> : null}
      </div>
      <div>
        <span>maggieappleton.com</span>
        <Logo />
      </div>
    </div>
  );
};

export default OgImage;
