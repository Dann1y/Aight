import React from "react";
import styled from "@emotion/styled";
import Icon from "components/icon";

const contestList = [
  "GSM 제 4회 창의융합프로젝트 - 최우수상(2021.01.)",
  "2020 Entrepreneur's Playground 창업놀이터 - 우수상(2020.12.)",
  "한전KDN 2019 빛가람 에너지밸리 SW경진대회 - 장려상(2019.11.)",
];

const activityList = [
  "대한민국 소프트웨어 대전 Olio 전시 (2020.12.02. ~ 2020.12.04.)",
  "대한민국 소프트웨어 대전 Charger 전시(2019.12.04. ~ 2019.12.06.)",
  "Pycon Korea 2019 참여 (2019.08.17.)",
  "한국 MicroSoft 방문 (2019.07.12.)",
  "한컴MDS 방문 (2019.07.10.)",
  "Singapore ConnecTechAsia 2019 참여 (2019.06.20.)",
];

export default function Ninth() {
  return (
    <Positioner>
      <Wrapper>
        <LeftBox>
          <h1>Experienced</h1>
        </LeftBox>
        <RightBox>
          <Content>
            <h1>Contest</h1>
            {contestList.map((i, ix) => (
              <Desc key={ix}>{i}</Desc>
            ))}
          </Content>
          <Content>
            <h1>Activity</h1>
            {activityList.map((i, ix) => (
              <Desc key={ix}>{i}</Desc>
            ))}
          </Content>
        </RightBox>
      </Wrapper>
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100%;
  height: 100%;
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

  h1 {
    font-size: 7vh;
    font-weight: bold;
    color: #fff;
  }
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

const Desc = styled.h2`
  color: #fff;
  font-weight: 100;
`;
