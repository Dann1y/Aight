import React from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";

export function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Positioner>
      <Wrapper>
        <ProgressBar style={{ scaleX }} />
      </Wrapper>
    </Positioner>
  );
}

const Positioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 20px;
  border: 1px solid red;
  background-color: #ffffff;
  /* background-color: #000000; */
  z-index: 50;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: green;
  width: 100%;
  height: 100%;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(213, 115, 228, 1) 0%,
    rgba(121, 9, 110, 1) 41%,
    rgba(0, 212, 255, 1) 100%
  );
  transform-origin: 0%;
`;
