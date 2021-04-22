import React from "react";
import styled from "@emotion/styled";

export default function Fourth() {
  return (
    <Positioner>
      <h1>So, What is your name?</h1>
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 8vh;
    color: #fff;
  }
`;
