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
        <Logo>Aight</Logo>
      </Wrapper>
    </Positioner>
  );
}

const Positioner = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #000000;
  z-index: 9999;
  border: 1px solid;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const Logo = styled(motion.h2)`
  cursor: pointer;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  height: 8px;
  border-radius: 0 5px 5px 0;
  background: #dda0dd;
  transform-origin: 0%;
`;
