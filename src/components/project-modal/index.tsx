import React from "react";
import styled from "@emotion/styled";
import { PROJECT_LIST } from "utils/constants";
import Image from "next/image";
import { logoImages } from "utils/image-data";

interface ProjectModalProps {
  currentState: number;
}

export default function ProjectModal(props: ProjectModalProps) {
  const { currentState } = props;

  return (
    <Postioner>
      <Wrapper>
        <ImageWrapper>
          <Image width={330} height={330} src={logoImages[currentState]} />
        </ImageWrapper>
        <RightCard>
          <InfoWrapper>
            <Title>{PROJECT_LIST[currentState].title}</Title>
            <Role>{PROJECT_LIST[currentState].role}</Role>
            <Desc>{PROJECT_LIST[currentState].desc}</Desc>
            <Etc>{PROJECT_LIST[currentState].etc}</Etc>
          </InfoWrapper>
        </RightCard>
      </Wrapper>
    </Postioner>
  );
}

const Postioner = styled.div`
  width: 100%;
  height: 100%;
  padding: 4%;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const ImageWrapper = styled.div`
  flex: 0.8;
  height: 70%;
  display: flex;
  border-radius: 10%;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const RightCard = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #000;
  margin: 0;
`;

const Role = styled.h2`
  color: #000;
  margin: 0;
`;

const Desc = styled.h3`
  color: #000;
  margin: 0;
`;

const Etc = styled.h2`
  color: #000;
  margin: 0;
`;
