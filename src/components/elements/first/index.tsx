import React, { useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import aboutMotions from "motions/about.motion";
import { useIntersection } from "utils/hooks/use-intersection";

export default function First() {
  const sectionRef = useRef();

  const { visible } = useIntersection(sectionRef, {
    threshold: 0.7,
  });

  return (
    <Positioner
      ref={sectionRef}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <Mask h={11}>
        <Sentence variants={aboutMotions.subText}>
          Let me introduce myself
        </Sentence>
      </Mask>
    </Positioner>
  );
}

interface MaskProps {
  h: number;
}

const Positioner = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  h3 {
    color: #fff;
    font-weight: 100;
  }
`;

const Mask = styled.div<MaskProps>`
  height: ${(p) => p.h}vh;
  overflow: hidden;
`;

const Sentence = styled(motion.h2)`
  font-size: 8vh;
  color: #ffffff;
`;
