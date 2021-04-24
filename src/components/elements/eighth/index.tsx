import React from "react";
import styled from "@emotion/styled";
import Icon from "components/icon";

export default function Eighth() {
  return (
    <Positioner>
      <Wrapper>
        <LeftBox>
          <h1>Skills & Tools</h1>
          <h3>
            I can handle these guys.
            <br />
            Don't worry! <br />I know exactly why I should use them.
          </h3>
        </LeftBox>
        <RightBox>
          <h1>Main Skills</h1>
          <SkillWrap>
            <Icon name="react" />
            <Icon name="typescript" />
            <Icon name="nextjs" />
            <Icon name="graphql" />
          </SkillWrap>
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
  background-image: url("background/i.png");
  background-size: cover;
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
  h3 {
    font-size: 3vh;
    font-weight: 100;
    color: #fff;
    text-align: center;
  }
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
    color: #fff;
  }
`;

const SkillWrap = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;
