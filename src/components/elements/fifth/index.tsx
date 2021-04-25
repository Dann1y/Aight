import React, { useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";

export default function Fifth() {
  const sectionRef = useRef();

  const { visible } = useIntersection(sectionRef, {
    threshold: 0.7,
    bottom: false,
  });

  return (
    <Positioner>
      <motion.h1>I'm Dann1y</motion.h1>
      <motion.h2>Uh.. Just call me Danny 😉</motion.h2>
    </Positioner>
  );
}

const Positioner = styled.div`
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
