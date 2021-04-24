import React, { useEffect } from "react";
import styled from "@emotion/styled";
import ReactFullpage from "@fullpage/react-fullpage";
import MappingContainer from "containers";
import { Footer } from "components";

function index() {
  return (
    <div>
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <MappingContainer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Footer />
    </div>
  );
}

export default index;
