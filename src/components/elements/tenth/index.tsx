import React from "react";
import styled from "@emotion/styled";
import Icon from "components/icon";

const orgList = [
  {
    title: "SHA",
    task: "Club Manager (2019 ~ 2021)",
    desc: (
      <p>
        As a club manager led the club successfully for 3 years.
        <br />
        Our club is the most popular in our school.
        <br />
        Olio was released as an internal project in the club. We have a blog
        too! Click Here
      </p>
    ),
  },
  {
    title: "Bridged",
    task: "Opensource Contributor Member",
    desc: (
      <p>
        As an open source contributor, I am a Bridged member.
        <br />I saw the beginning of Bridged. It is steadily under maintenance.
        <br />I participated in the development with the bridged.xyz ui
        configuration.
      </p>
    ),
  },
];

export default function Tenth() {
  return (
    <Positioner>
      <Wrapper>
        <LeftBox>
          {orgList.map((i, ix) => (
            <Content key={ix}>
              <h1>{i.title}</h1>
              <Task>{i.task}</Task>
              <Desc>{i.desc}</Desc>
            </Content>
          ))}
        </LeftBox>
        <RightBox>
          <h1>Club & Organization</h1>
        </RightBox>
      </Wrapper>
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("background/k.png");
  background-size: cover; ;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
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
    font-weight: bold;
    color: #fff;
  }
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
  }
`;

const Task = styled.h2`
  color: #fff;
  font-weight: 400;
`;

const Desc = styled.h3`
  color: #fff;
  font-weight: 100;
`;
