import Image from "next/image";
import React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <Positioner>
      <div>header</div>
    </Positioner>
  );
}

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border: 1px solid;
`;
