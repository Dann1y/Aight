import { motion } from "framer-motion";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Card } from "../card/Card";
import { ProjectCard } from "./ProjectCard";

export type CardSize = "sm" | "md";

enum EnumCardFlex {
  "md" = 2,
  "sm" = 1,
}

export const Project = () => {
  const [isClicked, setIsClicked] = useState({
    lifeDashboard: false,
    aight: false,
    grida: false,
    ondo: false,
  });

  const handleClick = (index: number) => {
    setIsClicked((prev) => ({
      ...prev,
      [Object.keys(isClicked)[index]]: !Object.values(isClicked)[index],
    }));
  };

  return (
    <Positioner>
      <motion.h1
        style={{
          fontSize: "60px",
          marginBottom: "10px",
          marginLeft: "5px",
        }}
      >
        Projects
      </motion.h1>
      <Wrapper>
        <CardWrapper>
          <ProjectCard
            title="Life Dashboard"
            description={
              <p>
                Life Dashboard는 제 인생에서 계획하고 관리해야하는 정보들을
                <br />
                대시보드로 한 눈에 볼 수 있도록 구성하고 구글 홈과 연동되는
                <br />
                모닝 캘린더 알림, 날씨, 데일리 뉴스, 하루 워킹 타임 측정 등
                <br />
                생활에 필요한 여러 편의 기능들을 제공하는 저를 위한 개인
                비서이자 서비스를 개발하고 있습니다. 현재는 라즈베리파이에
                도커를 세팅했고 2022년 12월 내로 MVP 만드는 것을 목표로
                하고있습니다.
              </p>
            }
            date="2022.09. ~ 현재"
            size="sm"
            image="/lifedashboard.png"
            isClicked={isClicked.lifeDashboard}
            onClick={() => handleClick(0)}
          />
          <ProjectCard
            title="Aight"
            description={
              <p>
                2021년에 저의 포트폴리오 웹 사이트 <strong>Aight</strong>을
                개발하여 vercel로 배포하였습니다.
                <br /> 시간이 지난 지금 업데이트된 컨텐츠와 새로운 디자인을
                적용한 Version 2.0을 작업하고 있습니다.
              </p>
            }
            date="2021.04. ~ 현재"
            size="md"
            image="/aight.png"
            isClicked={isClicked.aight}
            onClick={() => handleClick(1)}
          />
        </CardWrapper>
        <CardWrapper>
          <ProjectCard
            title="Grida.co Opensource"
            description={
              <p>Bridged (현 Grida)의 랜딩페이지 개발에 기여했습니다.</p>
            }
            date="2021.03. ~ 2021.04."
            size="md"
            image="/grida.png"
            isClicked={isClicked.grida}
            onClick={() => handleClick(2)}
            isRight
          />
          <ProjectCard
            title="ONDO"
            description={
              <p>
                <strong>
                  2020 JA Korea Entrpreneur’s Playground 창업놀이터
                </strong>
                에서 기획한 일기 서비스입니다.
                <strong> ‘오늘의 감정온도는 어떠신가요?’</strong>를 시작으로
                사용자의 감정에 몰입해 다양한 방식의 일기 서비스를 제공합니다.
                <br />
                창업놀이터에서 우수상을 수상하였으며 2020 GSM 창의융합 프로젝트
                발표회에서 최우수상을 수상하였습니다.
              </p>
            }
            date="2020.04. ~ 2021.01."
            size="sm"
            image="/ONDO.png"
            isClicked={isClicked.ondo}
            onClick={() => handleClick(3)}
            isRight
          />
        </CardWrapper>
      </Wrapper>
    </Positioner>
  );
};

const Positioner = styled.section`
  position: relative;
  width: 80%;
  max-width: 850px;
  margin-top: 10%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Wrapper = styled(Card)`
  position: absolute;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: rgb(30, 50, 100);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  gap: 5%;
  padding: 5%;
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 5%;
`;

export const CardItem = styled(Card)<{
  size: CardSize;
  isClicked: boolean;
  isRight?: boolean;
}>`
  flex: ${({ size }) => EnumCardFlex[size]};
  width: 100%;
  padding: 3%;
  background-color: #e3f2fd;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  ${({ isClicked, isRight }) => isClicked && clickedCardStyles(isRight)};

  h2 {
    color: #1d3557;
    font-size: 40px;
    text-align: center;
  }
`;

const clickedCardStyles = (isRight?: boolean) => css`
  position: absolute;
  width: ${isRight ? "calc(100% * 2 + 10.7%)" : "calc(100% * 2 + 10.7%)"};
  height: 100%;
  z-index: 20;
  transform: ${isRight ? "translateX(-52.6%)" : "undefined"};
  background-color: #ffffff;
  transform-origin: top left;
  transition: 0.5s ease-in-out;
  cursor: default;
`;
