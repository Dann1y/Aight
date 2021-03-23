import React from "react";
import styled from "@emotion/styled";
import Project from "components/project";

export default function Sixth() {
  return (
    <Positioner>
      <Wrapper>
        <Title>PROJECTS</Title>
        <Desc>The Projects I've been working in last 2.5years.</Desc>
        <ProjectWrapper>
          <Project title="CHARGER" />
          <Project title="ONDO" />
          <Project title="OLIO" />
          <Project title="DOTORI" />
        </ProjectWrapper>
      </Wrapper>
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("background/g.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 7vh;
  font-weight: 800;
  margin: 0px 2.5%;
`;

const Desc = styled.h3`
  color: #fff;
  margin: 0px 2.5%;
`;

const ProjectWrapper = styled.div`
  width: 100%;
  height: 45%;
  margin-top: 3vh;
  display: flex;
  overflow-x: auto;
  z-index: 3;
`;
