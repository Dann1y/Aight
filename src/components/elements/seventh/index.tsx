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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 7vh;
  }
`;
