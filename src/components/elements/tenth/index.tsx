import React, { useRef } from "react";
import styled from "@emotion/styled";
import Icon from "components/icon";
import { useIntersection } from "utils/hooks/use-intersection";
import { motion } from "framer-motion";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";

const returnSha = () => [
  <Title variants={aboutMotions.aboutText}>SHA</Title>,
  <Task variants={aboutMotions.aboutText}>Club Manager (2019 ~ 2021)</Task>,
  <Desc variants={aboutMotions.aboutText}>
    As a club manager led the club successfully for 3 years.
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    Our club is the most popular in our school.
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    Olio was released as an internal project in the club. We have a blog too!
    Click Here.
  </Desc>,
];

const returnBridged = () => [
  <Title variants={aboutMotions.aboutText}>Bridged</Title>,
  <Task variants={aboutMotions.aboutText}>Opensource Contributor Member</Task>,
  <Desc variants={aboutMotions.aboutText}>
    As an open source contributor, I am a Bridged member.{" "}
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    I saw the beginning of Bridged. It is steadily under maintenance.
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    I participated in the development with the bridged.xyz ui configuration.
  </Desc>,
];

export default function Tenth() {
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
      <Wrapper>
        <LeftBox>
          <Content variants={aboutMotions.aboutContainer}>
            {returnSha()}
          </Content>
          <Content variants={aboutMotions.aboutContainer}>
            {returnBridged()}
          </Content>
        </LeftBox>
        <RightBox>
          <Mask h={9}>
            <Title variants={aboutMotions.subText}>Club & Organization</Title>
          </Mask>
        </RightBox>
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

const Wrapper = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
`;

const LeftBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 7vh;
    font-weight: bold;
    color: #fff;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(motion.h1)`
  font-size: 5vh;
  color: #fff;
`;

const Task = styled(motion.h2)`
  color: #fff;
  font-weight: 400;
`;

const Desc = styled(motion.h3)`
  color: #fff;
  font-weight: 100;
  margin: 0px;
`;
