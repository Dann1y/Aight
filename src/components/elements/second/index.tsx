import React from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

export default function Second() {
  return (
    <Positioner>
      <Fade bottom>
        <Sentence>Do it when you have time to think</Sentence>
      </Fade>
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

const Sentence = styled.div`
  font-size: 8vh;
  color: #ffffff;
`;
