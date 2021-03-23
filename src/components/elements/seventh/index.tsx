import React from "react";
import styled from "@emotion/styled";

export default function Seventh() {
  return (
    <Positioner>
      <h1>Do you want these things?</h1>
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("background/h.png");
  background-size: cover;

  h1 {
    color: #fff;
    font-size: 7vh;
  }
`;
