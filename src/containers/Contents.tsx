import styled from "styled-components";
import { MyInfo } from "../components";

export function Contents() {
  return (
    <Positioner>
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
      <MyInfo />
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100%;
  height: 100%;
`;
