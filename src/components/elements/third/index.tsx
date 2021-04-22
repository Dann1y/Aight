import React from "react";
import styled from "@emotion/styled";

const descList = {
  trendy: `I know what is trendy and I do.\n I will prove it through the way I work.\n Communicates well and results are good.\nYou've never seen anyone as cool as me😎`,
  growing:
    "Everyone makes mistakes. And it's divided into two categories: fix mistakes or keep making mistakes. I’m the first one and grows to the next level. Never get frustrated with mistakes.",
  fire:
    "I'm on fire. This fire always makes great results. See how much potential I have The fire is getting bigger",
};

export default function Third() {
  return (
    <Positioner>
      <Wrapper>
        <Navigation>
          <Item>Trendy</Item>
          <Item>Growing</Item>
          <Item>Fire</Item>
        </Navigation>
        <Desc>
          <Content>{descList.trendy}</Content>
        </Desc>
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
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10%;
  justify-content: space-between;
  height: 20%;
`;

const Item = styled.h1`
  font-size: 5vh;
  background: rgb(24, 210, 224);
  background: linear-gradient(
    180deg,
    rgba(24, 210, 224, 1) 20%,
    rgba(243, 18, 254, 1) 100%
  );

  /* background: rgb(238, 174, 202);
  background: linear-gradient(
    180deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  ); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const Desc = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.h1`
  width: 80%;
  height: 70%;
  text-align: center;
  color: #fff;
  font-size: 3.2vh;
`;
