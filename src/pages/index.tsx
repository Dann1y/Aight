import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import MappingContainer from "containers";
import { Footer } from "components";
import useLockBodyScroll from "utils/hooks/use-lock-body-scroll";

function index() {
  useLockBodyScroll();

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
    </div>
  );
}

// function index() {
//   return (
//     <div>
//       <MappingContainer />
//       <Footer />
//     </div>
//   );
// }

export default index;
