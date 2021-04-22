import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import BackgroundContainer from "containers";
import { componentIndexing } from "utils/toolkit";
import ReactFullpage from "@fullpage/react-fullpage";

function importAll(r) {
  return r.keys().map(r);
}

const SectionImages: Array<string> = importAll(
  require.context("../../public/background", false, /.png$/)
);

function index() {
  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {SectionImages.sort().map((i, ix) => (
              <BackgroundContainer imagePath={i}>
                <Wrapper>{componentIndexing[ix]}</Wrapper>
              </BackgroundContainer>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default index;
