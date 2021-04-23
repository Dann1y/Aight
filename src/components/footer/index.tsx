import Icon from "components/icon";
import React from "react";
import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Positioner>
      <Icon name="circle" />
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fff;
`;
