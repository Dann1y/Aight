import React, { useCallback } from "react";
import styled from "@emotion/styled";
import ProjectModal from "components/project-modal";
import { useModalContext } from "utils/contexts/modal-context";

interface ProjectProps {
  backgroundImage: string;
}

export default function Project(props: ProjectProps) {
  const { backgroundImage } = props;

  return (
    <Positioner>
      <Wrapper background={backgroundImage} />
    </Positioner>
  );
}

interface WrapperProps {
  background: string;
}

const Positioner = styled.div`
  width: 70%;
  min-width: 25vh;
  height: 90%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  background: linear-gradient(#c119c7, #37afdf);

  opacity: 0.9;
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px,
    rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px,
    rgba(240, 46, 170, 0.05) 0px 25px;

  :hover {
    width: 80%;
    height: 100%;
    transition: all 0.3s;
    opacity: 1;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
      rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
      rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }
  transition: all 0.3s;
`;

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 80%;

  background-image: url(${(p) => p.background});
  background-size: cover;
`;
