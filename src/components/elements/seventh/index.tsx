import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";
import aboutMotions from "motions/about.motion";
import Pulse from "react-reveal/Pulse";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Do you want these things?",
  "Aight!",
  "Dann1y can do whatever you want 😉",
];

export default function Seventh() {
  const sectionRef = useRef();
  const [index, setIndex] = React.useState(0);
  const { visible } = useIntersection(sectionRef, {
    threshold: 0.7,
  });

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Positioner
      ref={sectionRef}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <Pulse>
        <Desc variants={aboutMotions.subText}>
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </Desc>
      </Pulse>
    </Positioner>
  );
}

const Positioner = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Desc = styled(motion.h1)`
  color: #fff;
  font-size: 7vh;
`;
