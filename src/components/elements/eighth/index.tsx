import React, { useRef } from "react";
import styled from "@emotion/styled";
import Icon from "components/icon";
import { motion } from "framer-motion";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";
import { useIntersection } from "utils/hooks/use-intersection";

export default function Eighth() {
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
          <Mask style={{ marginBottom: "5%" }} h={9}>
            <Title variants={aboutMotions.subText}>Skills & Tools</Title>
          </Mask>
          <DescWrapper variants={aboutMotions.aboutContainer}>
            <Desc variants={aboutMotions.aboutText}>
              I can handle these guys. Don't worry!
            </Desc>
            <Desc variants={aboutMotions.aboutText}></Desc>
            <Desc variants={aboutMotions.aboutText}>
              I know exactly why I should use them.
            </Desc>
          </DescWrapper>
        </LeftBox>
        <RightBox>
          <Mask style={{ marginBottom: "3%" }} h={9}>
            <Title variants={aboutMotions.subText}>Main Skills</Title>
          </Mask>
          <SkillWrap variants={aboutMotions.aboutContainer}>
            <motion.div variants={aboutMotions.aboutText}>
              <Icon name="react" />
            </motion.div>
            <motion.div variants={aboutMotions.aboutText}>
              <Icon name="typescript" />
            </motion.div>
            <motion.div variants={aboutMotions.aboutText}>
              <Icon name="nextjs" />
            </motion.div>
            <motion.div variants={aboutMotions.aboutText}>
              <Icon name="graphql" />
            </motion.div>
          </SkillWrap>
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
  display: flex;
  width: 80%;
  height: 80%;
`;

const DescWrapper = styled(motion.div)`
  margin-top: 3%;
`;

const Desc = styled(motion.h3)`
  margin: 0;
  font-size: 3vh;
  font-weight: 100;
  color: #fff;
  text-align: center;
`;

const Title = styled(motion.h1)`
  margin: 0px;
  font-size: 7vh;
  font-weight: bold;
  color: #fff;
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
    color: #fff;
  }
`;

const SkillWrap = styled(motion.div)`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 3%;
`;
