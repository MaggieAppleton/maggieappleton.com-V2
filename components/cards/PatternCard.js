import Link from "next/link";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";
import { RelativeDate } from "../templates/Dates";

const Leaves = () => {
  const leftLeaf = {
    initial: {
      x: 0,
    },
    hover: {
      x: 29,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const rightLeaf = {
    initial: {
      x: 0,
    },
    hover: {
      x: -29,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      height="45"
      width="45"
      fill="none"
      viewBox="0 0 67 65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g variants={leftLeaf}>
        <path
          d="M31.1848 5.09405C31.3079 5.08954 31.43 5.10999 31.5436 5.15423C31.6572 5.19846 31.7601 5.26553 31.8459 5.35138C31.9318 5.43723 31.9989 5.54011 32.0431 5.65375C32.0874 5.76739 32.1078 5.88944 32.1033 6.01256C31.6649 19.115 18.9879 31.792 5.87541 32.2405C5.75115 32.2444 5.62807 32.2233 5.5135 32.1784C5.39893 32.1334 5.29524 32.0657 5.20859 31.979C5.12195 31.8924 5.05413 31.7886 5.0092 31.6741C4.96428 31.5595 4.94317 31.4364 4.94712 31.3122C5.40536 18.2094 18.0726 5.52271 31.1848 5.09405Z"
          stroke="#04A4BA"
        />
        <path
          d="M4.95581 32.9536C4.9513 32.8305 4.97175 32.7085 5.01598 32.5948C5.06022 32.4812 5.12728 32.3783 5.21313 32.2925C5.29899 32.2066 5.40187 32.1395 5.51551 32.0953C5.62915 32.0511 5.75119 32.0306 5.87431 32.0351C18.9768 32.4736 31.6537 45.1505 32.1022 58.263C32.1062 58.3873 32.085 58.5104 32.0401 58.6249C31.9952 58.7395 31.9274 58.8432 31.8408 58.9298C31.7541 59.0165 31.6504 59.0843 31.5358 59.1292C31.4213 59.1741 31.2982 59.1953 31.1739 59.1913C18.0712 58.7331 5.38446 46.0658 4.95581 32.9536Z"
          stroke="#04A4BA"
        />
      </motion.g>
      <motion.g variants={rightLeaf}>
        <path
          d="M34.0535 6.00765C34.049 5.88453 34.0694 5.76248 34.1136 5.64884C34.1579 5.5352 34.2249 5.43235 34.3108 5.3465C34.3966 5.26064 34.4995 5.19355 34.6132 5.14932C34.7268 5.10508 34.8488 5.08463 34.972 5.08914C48.0744 5.52757 60.7514 18.2045 61.1999 31.317C61.2038 31.4413 61.1827 31.5644 61.1378 31.6789C61.0929 31.7935 61.0251 31.8972 60.9384 31.9838C60.8518 32.0705 60.7481 32.1383 60.6335 32.1832C60.5189 32.2282 60.3958 32.2493 60.2716 32.2453C47.1689 31.7871 34.4821 19.1199 34.0535 6.00765Z"
          stroke="#04A4BA"
        />
        <path
          d="M60.282 32.0402C60.4051 32.0356 60.5271 32.0561 60.6408 32.1003C60.7544 32.1446 60.8573 32.2116 60.9431 32.2975C61.029 32.3833 61.0961 32.4862 61.1403 32.5999C61.1845 32.7135 61.205 32.8355 61.2005 32.9587C60.762 46.0611 48.0851 58.7381 34.9726 59.1866C34.8483 59.1905 34.7252 59.1694 34.6107 59.1245C34.4961 59.0796 34.3924 59.0118 34.3058 58.9251C34.2191 58.8385 34.1513 58.7347 34.1064 58.6202C34.0614 58.5056 34.0403 58.3825 34.0443 58.2583C34.5025 45.1556 47.1698 32.4688 60.282 32.0402Z"
          stroke="#04A4BA"
        />
      </motion.g>
    </motion.svg>
  );
};

export default function PatternCard({ slug, date, title, growthStage, id }) {
  return (
    <Link key={id} as={`/${slug}`} href={`/${slug}`}>
      <a>
        <StyledPatternCard initial="initial" whileHover="hover">
          <Leaves />
          <div>
            <h3>{title}</h3>
            <MetadataContainer>
              <span>Pattern</span>
              <svg width="6px" height="8px">
                <circle r="3" cx="3" cy="3" fill="var(--color-gray-400)" />
              </svg>
              <RelativeDate postDate={date} />
            </MetadataContainer>
          </div>
        </StyledPatternCard>
        </a>
    </Link>
  );
}

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: var(--space-xs);
  margin-top: var(--space-2xs);
  font-family: var(--font-sans);
  font-size: calc(var(--font-size-xs) / 1.08);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;
  svg {
    margin: 0 0.4rem;
  }
`;

const StyledPatternCard = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding: var(--space-xs);
  margin: 0 var(--space-xs) 0 0;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-cream);
  transition: all 0.3s ease-in-out;
  align-items: start;
  cursor: pointer;
  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-left: var(--space-xs);
    transition: all 0.3s ease-in-out;
  }
  svg {
    position: relative;
    top: 1px;
    flex-shrink: 0;
  }
  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
    background: var(--color-light-cream);
    box-shadow: var(--box-shadow-sm);
    border: 1px solid var(--color-tinted-cream);
    h3 {
      color: var(--color-crimson);
    }
  }
`;
