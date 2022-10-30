// import { Disclosure } from '@headlessui/react'
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, PlusCircleIcon } from "@heroicons/react/24/outline";


function Accordion({header, children}) {
  const [panelOpen, setpanelOpen] = useState(false);

  return (
    <Container>
      <AccordionButton panelOpen={panelOpen}
        aria-label="open disclosure" onClick={() => {
          setpanelOpen(!panelOpen);
        }}>
          <div className="header">
          <PlusCircleIcon width="28" height="28" stroke="var(--color-sea-blue)" /><span>{header}</span>
          </div>
          {panelOpen ?
          <div className="more"><span>Show less</span> <ChevronUpIcon width="20" height="20" stroke="var(--color-sea-blue)" /></div> : 
          <div className="more"><span>Read more</span> <ChevronDownIcon width="20" height="20" stroke="var(--color-sea-blue)" /></div>
          }
      </AccordionButton>
      <AnimatePresence>
      {panelOpen && (<AccordionPanel
          initial={{
              opacity: 0,
              height: "0px",
            }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              height: "0px",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}>
          {children}
        </AccordionPanel>)}
      </AnimatePresence>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
margin-bottom: 2rem;
box-shadow: var(--box-shadow-sm);
`

const AccordionButton = styled.button`
display: block;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: ${(props) => (props.panelOpen ? "8px 8px 0 0" : "6px")};
transition: all 0.5 ease-in;
background: #e8f8f7;
border: 1px solid #ade3e3;
border-left: ${(props) => (props.panelOpen ? "6px solid #ade3e3" : "6px solid var(--color-sea-blue)")};
padding: var(--space-16) var(--space-24);
color: var(--color-dark-sea-blue);
div.header {
  color: var(--color-dark-sea-blue);
  margin-bottom: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: var(--space-12);
  
  span {
    font-family: var(--font-body);
    padding-bottom: 4px;
  }
}
div.more {
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.3 ease-in;
  grid-gap: var(--space-8);
  span {
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    line-height: var(--leading-loose);
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: var(--color-medium-sea-blue);
  }
}
&:hover {
  cursor: pointer;
  background: #dbf3f3;
}
`

const AccordionPanel = styled(motion.div)`
padding: var(--space-24) var(--space-48) var(--space-24) 3.75rem;
border-radius: 0 0 8px 8px;
background: #fff;
border: 1px solid #b8e5e8;
border-top: none;
box-shadow: var(--box-shadow-lg);
color: var(--color-gray-800);
p {
  margin-bottom: 1rem;
  line-height: var(--leading-loose);
  font-weight: 400;
}
`

export default Accordion