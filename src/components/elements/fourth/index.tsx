import React, { useRef } from "react";
import styled from "@emotion/styled";
import { useIntersection } from "utils/hooks/use-intersection";
import { motion } from "framer-motion";
import aboutMotions from "motions/about.motion";
import Pulse from "react-reveal/Pulse";

export default function Fourth() {
  const sectionRef = useRef();

  const { visible } = useIntersection(sectionRef, {
    threshold: 1,
  });

  return (
    <Positioner
      ref={sectionRef}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <Pulse>
        <motion.div variants={aboutMotions.subText}>
          So, What's your name?
        </motion.div>
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

  div {
    font-size: 8vh;
    color: #fff;
  }
`;
