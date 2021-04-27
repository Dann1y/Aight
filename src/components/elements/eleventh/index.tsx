import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";
import TextTransition, { presets } from "react-text-transition";

export default function Eleventh() {
  const sectionRef = useRef();
  const [text, setText] = useState(true);

  const { visible } = useIntersection(sectionRef, {
    threshold: 0.7,
  });

  const handleClickEmail = () => {
    setText(!text);
  };

  return (
    <Positioner
      ref={sectionRef}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <Wrapper variants={aboutMotions.aboutContainer}>
        <TitleWrapper>
          <Mask style={{ marginBottom: "1vh" }} h={9}>
            <Title variants={aboutMotions.subText}>Contact Me</Title>
          </Mask>
          <Sentence variants={aboutMotions.aboutText}>
            If you looking for young and cool developer, You’d better contact
            me. 😄
          </Sentence>
        </TitleWrapper>
        <InfoWrapper variants={aboutMotions.aboutContainer}>
          <a
            target="_blank"
            href={"https://velog.io/@skypedanny"}
            rel="noopener noreferrer"
          >
            <Item variants={aboutMotions.aboutText}>Velog.io</Item>
          </a>
          <Item
            style={{ width: "25vw" }}
            onClick={() => handleClickEmail()}
            variants={aboutMotions.aboutText}
          >
            {text ? "Email" : "leedanny0102@gmail.com"}
          </Item>
          <a
            target="_blank"
            href={"https://github.com/dann1y"}
            rel="noopener noreferrer"
          >
            <Item variants={aboutMotions.aboutText}>Github</Item>
          </a>
        </InfoWrapper>
      </Wrapper>
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

const Wrapper = styled(motion.div)`
  width: 60%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h1)`
  color: #fff;
  font-size: 7vh;
  margin: 0px;
`;

const Sentence = styled(motion.h3)`
  color: #fff;
  font-size: 2.5vh;
  font-weight: 100;
`;

const InfoWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 3vh;
  align-items: center;
  height: 4vh;
`;

const Item = styled(motion.div)`
  width: 10vw;
  font-weight: 300;
  font-size: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    45deg,
    rgba(24, 210, 224, 1) 20%,
    rgba(243, 18, 254, 1) 100%
  );

  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s;

  cursor: pointer;

  :hover {
    font-size: 4vh;
    transition: all 0.5s;
    background: linear-gradient(
      45deg,
      rgba(24, 210, 224, 1) 20%,
      rgba(243, 18, 254, 1) 70%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  }
`;
