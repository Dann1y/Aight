import React, { useRef } from "react";
import styled from "@emotion/styled";
import Icon from "components/icon";
import Tada from "react-reveal/Tada";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";

export default function Eleventh() {
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
      <Mask h={9}>
        <Title variants={aboutMotions.subText}>Contact Me</Title>
      </Mask>
      <Desc variants={aboutMotions.aboutText}>
        If you looking for young and cool developer, You’d better contact me. 😄
      </Desc>
      <Tada>
        <Email variants={aboutMotions.subText}>
          <Icon name="email" />
          <span>skypedanny@naver.com</span>
        </Email>
      </Tada>
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

  span {
    color: #fff;
    font-size: 2vh;
    font-weight: 100;
    margin-left: 5px;
  }
`;

const Title = styled(motion.h1)`
  color: #fff;
  font-size: 7vh;
`;

const Desc = styled(motion.h3)`
  color: #fff;
  font-size: 3vh;
  font-weight: 100;
`;

const Email = styled(motion.div)`
  display: flex;
  align-items: center;
`;
