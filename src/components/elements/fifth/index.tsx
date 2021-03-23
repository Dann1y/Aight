import React, { useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";
import Tada from "react-reveal/Tada";
import ImageGallery from "components/image-gallery";

export default function Fifth() {
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
      <Notice variants={aboutMotions.title}>Drag the image!⬇</Notice>
      <ImageContainer>
        <ImageGallery />
      </ImageContainer>
      <Mask h={11} style={{ padding: "0 6vh" }}>
        <Tada>
          <motion.h1 variants={aboutMotions.subText}>I'm Dann1y</motion.h1>
        </Tada>
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
  width: 100vw;
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
    color: #fff;
    font-weight: 100;
  }
`;

const Notice = styled(motion.h2)`
  color: #fff;
  font-size: 2vh;
  font-weight: 300;
  margin: 0;
`;

const ImageContainer = styled.div`
  width: 30vw;
  height: 55vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
