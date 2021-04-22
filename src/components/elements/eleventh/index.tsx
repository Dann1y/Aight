import React from "react";
import styled from "@emotion/styled";
import Icon from "components/icon";

export default function Eleventh() {
  return (
    <Positioner>
      <h1>Contact Me</h1>
      <h3>
        If you looking for young and cool developer, You’d better contact me. 😄
      </h3>
      <Email>
        <Icon name="email" />
        <span>skypedanny@naver.com</span>
      </Email>
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 7vh;
  }

  h3 {
    color: #fff;
    font-size: 4vh;
    font-weight: 100;
  }

  span {
    color: #fff;
    font-size: 3vh;
    font-weight: 100;
    margin-left: 5px;
  }
`;

const Email = styled.div`
  display: flex;
  align-items: center;
`;
