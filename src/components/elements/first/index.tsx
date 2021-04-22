import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export default function First() {
  return (
    <Positioner>
      <Image src="/logo.png" width="740" height="500" />
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
