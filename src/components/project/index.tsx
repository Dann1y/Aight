import React from "react";
import styled from "@emotion/styled";

interface ProjectProps {
  title: string;
  backgroundPath?: string;
}

export default function Project(props: ProjectProps) {
  const { title } = props;

  return (
    <Card>
      <Header>{title}</Header>
    </Card>
  );
}

const Card = styled.div`
  min-width: 35%;
  height: 100%;
  border-radius: 40px;
  position: relative;
  cursor: pointer;
  background-color: #3d3d3d;
  margin-right: 5vw;
  z-index: 999;

  &:first-of-type {
    margin-left: 2.5%;
  }
`;

const Header = styled.h1`
  position: absolute;
  top: 0px;
  left: -40px;
  color: #fff;
  font-size: 7vh;
  font-weight: 800;
`;
