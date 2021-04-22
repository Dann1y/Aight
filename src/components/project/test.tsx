import React from "react";
import styled from "@emotion/styled";

export default function Project() {
  return (
    <Card>
      <Header>Olio</Header>
    </Card>
  );
}

const Card = styled.div`
  width: 35%;
  height: 100%;
  border-radius: 40px;
  border: 1px solid #fff;
  position: relative;
  cursor: pointer;
`;

const Header = styled.h1`
  position: absolute;
  top: 0px;
  left: -30px;
  color: #fff;
  font-size: 4vh;
  font-weight: 800;
`;
