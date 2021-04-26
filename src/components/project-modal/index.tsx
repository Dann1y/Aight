import React from "react";
import styled from "@emotion/styled";
import { PROJECT_LIST } from "utils/constants";
import Image from "next/image";
import { mockImages } from "utils/image-data";
import { GitIcon } from "components/GlobalStyles";
import Link from "next/link";
import Icon from "components/icon";

interface ProjectModalProps {
  currentState: number;
}

export default function ProjectModal(props: ProjectModalProps) {
  const { currentState } = props;

  return (
    <Postioner>
      <Header>
        <Title>{PROJECT_LIST[currentState].title}</Title>
        <Etc>{PROJECT_LIST[currentState].etc}</Etc>
      </Header>
      <Wrapper>
        <LeftCard>
          <ImageWrapper>
            <Image width={630} height={400} src={mockImages[currentState]} />
          </ImageWrapper>
        </LeftCard>
        <RightCard>
          <InfoWrapper>
            <Role>{PROJECT_LIST[currentState].role}</Role>
            <Desc>{PROJECT_LIST[currentState].desc}</Desc>
            <Footer>
              <a
                target="_blank"
                href={PROJECT_LIST[currentState].github}
                rel="noopener noreferrer"
              >
                <GitIcon />
              </a>
              <a
                target="_blank"
                href={PROJECT_LIST[currentState].url}
                rel="noopener noreferrer"
              >
                <NewPage>
                  <Icon name="browse" />
                  Open as a page
                </NewPage>
              </a>
            </Footer>
          </InfoWrapper>
        </RightCard>
      </Wrapper>
    </Postioner>
  );
}

const Postioner = styled.div`
  width: 100%;
  height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  vertical-align: bottom;
  align-items: baseline;
  padding-left: 2%;
`;

const Wrapper = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
`;

const LeftCard = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
  border-radius: 60px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const RightCard = styled.div`
  flex: 1;
  margin-left: 3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #000;
  font-size: 6vh;
  font-weight: bold;
  margin: 0;
`;

const Etc = styled.div`
  color: #000;
  margin: 0;
  font-size: 2vh;
  margin-left: 3vw;
  height: 3vh;
`;

const Role = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 4vh;
`;

const Desc = styled.h3`
  color: #000;
  margin: 3vh 0;
`;

const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

const NewPage = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 4px solid #000;
  border-radius: 25px;
  transition: all 0.5s;
  color: #000;
  font-size: 2.3vh;
  font-weight: bold;

  :hover {
    height: 75px;
    transition: all 0.3s;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px,
      rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px,
      rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  }
`;
