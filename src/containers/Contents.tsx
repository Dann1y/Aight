import styled from "styled-components";
import {
  Experience,
  GetInTouchMe,
  MyInfo,
  MyValues,
  Project,
  Work,
  Write,
} from "../components";

export function Contents() {
  return (
    <Positioner>
      <MyInfo />
      <MyValues />
      <Work />
      <Project />
      <Write />
      <Experience />
      <GetInTouchMe />
    </Positioner>
  );
}

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 70px;

  /* background: hsl(0, 0%, 14%); */
  /* background: hsl(0, 0%, 10%); */

  /* background: linear-gradient(43deg, #4158d0, #c850c0, #ffcc70); */
  background: linear-gradient(43deg, #4158d0, #dda0dd, #ffcc70);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
