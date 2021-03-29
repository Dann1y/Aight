import React, { useRef } from "react";
import styled from "@emotion/styled";
import { useIntersection } from "utils/hooks/use-intersection";
import { motion } from "framer-motion";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";

const returnDesc = () => [
  <Desc variants={aboutMotions.aboutText}>
    GSM 제 4회 창의융합프로젝트 - 최우수상(2021.01.)
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    2020 Entrepreneur's Playground 창업놀이터 - 우수상(2020.12.)
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    한전KDN 2019 빛가람 에너지밸리 SW경진대회 - 장려상(2019.11.)
  </Desc>,
];

const returnActivity = () => [
  <Desc variants={aboutMotions.aboutText}>
    대한민국 소프트웨어 대전 Olio 전시 (2020.12.02. ~ 2020.12.04.)
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    대한민국 소프트웨어 대전 Charger 전시(2019.12.04. ~ 2019.12.06.)
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    Pycon Korea 2019 참여 (2019.08.17.)
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>
    한국 MicroSoft 방문 (2019.07.12.)
  </Desc>,
  <Desc variants={aboutMotions.aboutText}>한컴MDS 방문 (2019.07.10.)</Desc>,
  <Desc variants={aboutMotions.aboutText}>
    Singapore ConnecTechAsia 2019 참여 (2019.06.20.)
  </Desc>,
];

export default function Ninth() {
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
          <Mask h={9}>
            <Title variants={aboutMotions.subText}>Experienced</Title>
          </Mask>
        </LeftBox>
        <RightBox>
          <Content>
            <Mask h={9}>
              <Title variants={aboutMotions.subText}>Contest</Title>
            </Mask>
            <DescWrapper variants={aboutMotions.aboutContainer}>
              {returnDesc()}
            </DescWrapper>
          </Content>
          <Content>
            <Mask h={9}>
              <Title variants={aboutMotions.subText}>Activity</Title>
            </Mask>
            <DescWrapper variants={aboutMotions.aboutContainer}>
              {returnActivity()}
            </DescWrapper>
          </Content>
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
  height: 80%;
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

const Title = styled(motion.h1)`
  font-size: 7vh;
  font-weight: bold;
  color: #fff;
`;

const RightBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 5vh;
    color: #fff;
    border-bottom: 1px solid;
    border-image: linear-gradient(
        90deg,
        rgba(24, 210, 224, 1),
        rgba(243, 18, 254, 1)
      )
      50;
  }
`;

const DescWrapper = styled(motion.div)``;

const Desc = styled(motion.h2)`
  color: #fff;
  font-weight: 100;
`;
