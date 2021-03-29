import React, { useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";
import Project from "components/project";

export default function Sixth() {
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
        <DescWrapper>
          <Mask h={9}>
            <Title variants={aboutMotions.subText}>PROJECTS</Title>
          </Mask>
          <motion.div variants={aboutMotions.aboutContainer}>
            <Desc variants={aboutMotions.aboutText}>
              The Projects I've been working in last 2.5years.
            </Desc>
          </motion.div>
        </DescWrapper>
        <Mask style={{ flex: 1 }} h={47}>
          <ProjectWrapper variants={aboutMotions.subText}>
            <Project />
          </ProjectWrapper>
        </Mask>
      </Wrapper>
    </Positioner>
  );
}

const Positioner = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;

  border: 1px solid #fff;
`;

const DescWrapper = styled(motion.div)`
  flex: 1;
  height: 44;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(motion.div)`
  color: #fff;
  font-size: 7vh;
  font-weight: 800;
  margin: 0;
`;

const Desc = styled(motion.div)`
  color: #fff;
  margin: 3% 0;
`;

const ProjectWrapper = styled(motion.div)`
  width: 100%;
  height: 44vh;
  margin-top: 3vh;
  display: flex;
  overflow-x: auto;
  z-index: 3;
`;
