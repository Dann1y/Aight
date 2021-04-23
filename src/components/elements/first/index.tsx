import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Icon from "components/icon";

export default function First() {
  return (
    <Positioner>
      <Icon name="logo" />
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
