import styled from "styled-components";
import mentions from "/posts/data/webmentions.json";
import { format } from "date-fns";
import { useState } from "react";
import {
  TwitterIcon,
  MastodonIcon,
  RedditIcon,
} from "../icons/SocialMediaIcons";
import { motion, AnimatePresence } from "framer-motion";

export default function WebMentions({ postSlug, hasBacklinks }) {
  // get all mentions where wm-target is the current post
  const postMentions = mentions.children.filter((mention) => {
    return mention["wm-target"] === `https://maggieappleton.com/${postSlug}`;
  });

  //filter for mentions where wm-property is like-of
  const likesAndReposts = postMentions.filter(
    (mention) => mention["wm-property"] === "like-of" || "repost-of"
  );

  //filter for mention with content
  const mentionWithContent = postMentions
    .filter(
      (mention) => mention["wm-property"] === "mention-of" && mention.content
    )
    .sort((a, b) => new Date(b["wm-received"]) - new Date(a["wm-received"]));

  // blocklist of spam domains
  const blockList = [
    "www.aol.com",
    "newstrooper.net",
    "uuldesign.com",
    "condepah.com",
    "cashadvaa.com",
    "neckball.com",
    "chruvids.com",
    "czyijiamei.com",
    "cabelov.com",
    "old.billionaireclubcollc.com",
    "jaunenglish.com",
    "puntvisual.com",
    "solomario.com",
    "digitalkoh.com",
    "latribunapanama.com",
    "sahafans.com",
    "live-healthy-and-well.com",
    "www.workidnap.tech",
    "akkalife.com",
    "ict-news-bd.com",
    "truthrow.com",
    "floodrelief2022.com",
    "chapsell.com",
    "unnews.site",
    "www.scriptori.com",
    "cssmixer.com",
    "findvidz.com",
    "starkedsf.com",
    "apollonews.site",
    "unnews.online",
    "faizalpj.com",
    "vimaxdeal.com",
    "bynewmud.com",
    "safallon.xyz",
    "facecapas.com",
    "491magazine.com",
    "wow-onyx.com",
    "heartjournalmagazine.com",
    "momovan.com",
    "bakatube.com",
    "indiatoday.host",
    "www.indiatoday.host",
    "rssfeeds.cloudsite.builders",
    "sharewaredepo.com",
    "pakistanistore.pk",
    "gadgetsearcher.com",
    "pixallus.com",
    "programming.yourworldin90seconds.com",
    "programming.nichedomain.news",
    "marketingsolution.com.au",
    "programming.aplus-review.com",
    "digitalapexgroup.com",
    "technologynews.biz",
    "worldtech.news",
    "programming.webcloning.com",
    "www.sacramentowebdesigngroup.com",
    "htmltreehouse.com",
    "1dmx.org",
    "websitedesign-usa.com",
    "techupd.com",
    "fancyhints.com",
    "techalertnews.com",
    "buzzedly.com",
    "dztechno.com",
    "graphicdon.com",
    "www.newsgosspis.com",
    "www.digitasbuzz.in",
    "gotutoral.com",
    "wpguynews.com",
    "www.klobal.net",
    "www.webmastersgallery.com",
    "pikopong.com",
    "keren.link",
    "ntdln.com",
    "jczh.xyz",
    "pazukong.wordpress.com",
    "fullstackfeed.com",
    "thebrandingstore.net",
    "development-tools.net",
    "itdirectory.my",
    "www.sacramentowebdesigngroup.com",
    "engrmks.com.ng",
    "www.xspdf.com",
    "isokunoffice.club",
    "dinezh.com",
    "www.makemoneyupdaters.com",
    "clicknow.in",
    "nexstair.com",
    "kovtonyuk.inf.ua",
    "postheaven.net",
    "www.legendstrivia.co.uk",
    "squareblogs.net",
    "www.fourthcity.net",
    "www.engrmks.com.ng",
    "711web.com",
    "techupd.com",
    "www.67nj.org",
    "tipsxd.com",
    "www.new.pixel-forge.ca",
    "pixallus.com",
    "wpnewshub.com",
    "tecriter.wordpressarena.com",
    "reddits.contractwebsites.com",
    "wawas-kingdom.com",
    "dztechno.com",
    "wpguynews.com",
    "www.digitasbuzz.in",
    "watchfvsslive.co",
    "gotutoral.com",
    "techfans.co.uk",
    "pikopong.com",
    "marketingsolution.com.au",
    "reportwire.org",
    "www.codeificant.com",
    "tipsxd.com",
    "wpdesigns.live",
    "gigatechnews.com",
    "blogs.thebitx.com",
    "updatetech.xyz",
    "neoweb4u.com",
    "www.websjohn.com",
    "www.webhostpolice.com",
    "lzomedia.com",
    "jateng.co",
    "news.priviw.com",
    "movilgadget.com",
    "kitdeveloper.ru",
    "reactjsexample.com",
    "dentedreality.com.au",
    "platoblockchain.net",
    "aayugcreation.com",
    "www.67nj.org",
    "wpnewshub.com",
    "codinghindi.in",
    "programmer.chimpymail.com",
    "sayed.work",
    "infos.by",
    "data-science-austria.at",
    "www.techyrack.com",
    "opta.live",
    "www.imoneyhub.com",
    "www.askorhelp.com",
    "www.handla.it",
    "webchilli.co.za",
    "indyamariejean.com",
    "hnikoloski.com",
    "www.makemoneyonlinecom.com",
    "underskore.in",
    "codytechs.com",
    "shanuverma.com",
    "technewzroom.com",
    "fiercesite.com",
    "www.essexwebhosts.com",
    "tavarro.com",
    "ecapital.news",
    "i-capitals.com",
    "vcodepedia.com",
    "e-capitals.com",
    "xlera8.com",
    "gadgetofficials.com",
    "coingenius.news",
    "thenewslog.org",
    "zplux.com",
    "tiptipa.com",
    "zephyrnet.com",
    "secretofcss.com",
    "test.designsolutions.online",
    "www.prixleplusbas.xyz",
    "www.nolisa.xyz",
    "datechguru.com",
    "www.cssdersleri.com",
    "www.pixellyft.com",
    "icapital.news",
    "usae.sit",
    "helpbuildweb.com",
    "sharewarepile.com",
    "sharewaredepo.com",
    "www.codersjungle.com",
    "www.monsterstudios.com.ng",
    "technewsbeats.com",
    "kerbco.com",
    "planetdigital963889394.wordpress.com",
    "digitalworld108117254.wordpress.com",
    "digitalnow878391108.wordpress.com",
    "newsdigital742901006.wordpress.com",
    "digitaldamian273090457.wordpress.com",
    "codezero844163712.wordpress.com",
    "deboramontoli.it",
  ];

  // remove mentions where mention[wm-source] matches blockList
  const filteredMentions = mentionWithContent.filter((mention) => {
    const domain = mention.url.split("/")[2];
    const isBlocked = blockList.includes(domain);
    return !isBlocked;
  });

  // main component. if there are no mentions, return null
  if (postMentions.length === 0) {
    return null;
  } else {
    return (
      <OuterContainer>
        <InnerContainer hasBacklinks={hasBacklinks}>
          <div className="header">
            <h3>Mentions around the web</h3>
          </div>
          <LikesImages likes={likesAndReposts} />
          <MentionsWithContent mentions={filteredMentions} />
        </InnerContainer>
      </OuterContainer>
    );
  }
}

function mentionType(mention) {
  if (mention["wm-property"] === "mention-of") {
    return "mentioned";
  } else if (mention["in-reply-to"]) {
    return "replied";
  } else if (mention["bookmark-of"]) {
    return "bookmarked";
  }
}

function sourceType(mention) {
  if (mention["wm-source"].includes("twitter")) {
    return <TwitterIcon width="16px" height="16px" className="twitter-svg" />;
  } else if (mention["wm-source"].includes("mastodon")) {
    return <MastodonIcon width="16px" height="16px" className="mastodon-svg" />;
  } else if (mention["wm-source"].includes("reddit")) {
    return <RedditIcon width="16px" height="16px" className="reddit-svg" />;
  }
}

// format date
function formatDate(date) {
  const parsedDate = new Date(date);
  return format(parsedDate, "MMMM dd, yyyy");
}

//get domain name without https:// or subpages
function getDomain(url) {
  return url.replace(/(^\w+:|^)\/\//, "").split("/")[0];
}

// remove link to the post within the content
function formatContent(content) {
  const contentWithoutDomain = content.replace(/maggieappleton.com.*/g, "");
  return contentWithoutDomain.slice(0, 280);
}

const MentionsWithContent = ({ mentions }) => {
  const [mentionsShown, setmentionsShown] = useState(mentions.slice(0, 4));
  const [isShowing, setisShowing] = useState(false);

  const replyVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      staggerChildren: 0.5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      staggerChildren: 0.5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <MentionsContentContainer>
        {mentionsShown.map((mention, i) => (
          <AnimatePresence>
            <Reply
              variants={replyVariants}
              animate="visible"
              initial="hidden"
              exit="hidden"
              key={i}
            >
              {mention.author.photo ? (
                <img src={mention.author.photo} alt={mention.author.name} />
              ) : (
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="placeholder-svg"
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r="21"
                    fill="var(--color-sea-blue)"
                  />
                </svg>
              )}

              <div className="content">
                <div className="name-date">
                  <a href={mention.url}>
                    <span className="author">
                      {mention.author.name || getDomain(mention["wm-source"])}
                    </span>
                    <span className="mention-type">{mentionType(mention)}</span>
                    {sourceType(mention)}
                    {mention.name && (
                      <span className="post-name">in {mention.name}</span>
                    )}
                    <time dateTime={mention.published}>
                      {formatDate(mention["wm-received"])}
                    </time>
                  </a>
                </div>
                {mention.content && (
                  <span>{formatContent(mention.content.text)}</span>
                )}
              </div>
            </Reply>
          </AnimatePresence>
        ))}
      </MentionsContentContainer>
      <ButtonContainer>
        {mentions.length > 4 && (
          <button
            className="show-more"
            onClick={() => {
              setisShowing(!isShowing);
              isShowing
                ? setmentionsShown(mentions.slice(0, 4))
                : setmentionsShown(mentions.slice(0, 30));
            }}
          >
            {isShowing ? "Show less" : `Show ${mentions.length - 4} more`}
          </button>
        )}
      </ButtonContainer>
    </>
  );
};

const LikesImages = ({ likes }) => {
  // filter likes for duplicate author photos
  const likesWithoutDuplicates = likes.filter(
    (like, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.author.photo === like.author.photo &&
          t.author.name === like.author.name
      )
  );

  return (
    <LikesImagesContainer>
      <div className="likes-container">
        {likesWithoutDuplicates.slice(0, 20).map((mention, index) =>
          mention.author.photo ? (
            <SingleImage index={index} key={index}>
              <img src={mention.author.photo} alt={mention.author.name} />
            </SingleImage>
          ) : (
            <SingleImage index={index} key={index}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="placeholder-svg"
              >
                <circle cx="50%" cy="50%" r="21" fill="var(--color-sea-blue)" />
              </svg>
            </SingleImage>
          )
        )}
        <span>{likes.length} Likes and Retweets</span>
      </div>
    </LikesImagesContainer>
  );
};

// Styles

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    width: 100%;
    padding: 1.25rem;
    background: var(--color-white);
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 1px solid var(--color-gray-100);
    color: var(--color-gray-600);
    :hover {
      background: var(--color-cream);
      color: var(--color-gray-800);
    }
  }
`;

const MentionsContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem 1.5rem;
  margin-top: var(--space-s);
  max-width: 100%;
`;

const Reply = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: left;
  margin: 1rem 0;
  max-width: 100%;
  img,
  svg.placeholder-svg {
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    margin-right: 1rem;
  }
  div.content {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 0.25rem;
    max-width: 80%;
  }
  a {
    color: var(--color-gray-600);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem;
  }
  span.author {
    font-weight: 600;
    color: var(--color-medium-sea-blue);
  }
  svg.twitter-svg {
    fill: var(--color-sea-blue);
    position: relative;
    top: 2px;
  }
  time {
    font-size: calc(var(--font-size-xs) * 0.9);
    color: var(--color-gray-600);
  }
  span.post-name {
    color: var(--color-gray-800);
    font-weight: 600;
    margin-right: 0.5rem;
    max-width: 380px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const LikesImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 2rem;
  div.likes-container {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 1rem;
    padding-right: 2rem;
    transition: all 0.4s ease;
    span {
      margin-left: 0.75rem;
    }
  }
`;

const SingleImage = styled.div`
  margin-left: -16px;
  z-index: 1;
  width: fit-content;
  height: fit-content;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  img,
  svg {
    display: block;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid #fff;
    transition: all 0.3s ease;
  }
`;

const InnerContainer = styled.div`
  width: 880px;
  margin: 0 auto;
  box-shadow: var(--box-shadow-lg);
  border-radius: 8px;
  margin-bottom: -4.15rem;
  margin-top: ${({ hasBacklinks }) => (hasBacklinks ? "4rem" : "0")};
  border: 1px solid var(--color-gray-100);
  background: white;
  max-width: 100%;
  h3 {
    font-weight: 300;
    font-size: var(--font-size-md);
    margin: 0;
  }
  div.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    padding: 1.5rem 2rem 1rem;
  }
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  font-family: var(--font-sans);
  background: white;
  color: var(--color-gray-800);
`;
