import React, { useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";

export default function Fifth() {
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
      <Mask h={10}>
        <motion.h1 variants={aboutMotions.subText}>I'm Dann1y</motion.h1>
      </Mask>
      <motion.div variants={aboutMotions.aboutContainer}>
        <motion.h2 variants={aboutMotions.aboutText}>
          Uh.. Just call me Danny 😉
        </motion.h2>
      </motion.div>
    </Positioner>
  );
}

const Positioner = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("background/f.png");
  background-size: cover;

  h1 {
    font-size: 8vh;
    color: #fff;
  }

  h2 {
    margin-top: 3vh;
    color: #fff;
    font-weight: 100;
  }
`;
