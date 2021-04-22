import React from "react";
import styled from "@emotion/styled";

export default function Fifth() {
  return (
    <Positioner>
      <h1>I'm Dann1y</h1>

      <h2>Uh.. Just call me Danny 😉</h2>
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
    font-size: 8vh;
    color: #fff;
  }

  h2 {
    margin-top: 3vh;
    color: #fff;
    font-weight: 100;
  }
`;
