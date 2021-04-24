import React from "react";
import styled from "@emotion/styled";

export default function First() {
  return <Positioner></Positioner>;
}

const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
