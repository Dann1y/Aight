import React, { useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";
import Pulse from "react-reveal/Pulse";

export default function Seventh() {
  const sectionRef = useRef();

  const { visible } = useIntersection(sectionRef, {
    threshold: 0.7,
    bottom: false,
  });
  return (
    <Positioner
      ref={sectionRef}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <Pulse>
        <Desc variants={aboutMotions.subText}>Do you want these things?</Desc>
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
