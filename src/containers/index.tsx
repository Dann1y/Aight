import React from "react";
import styled from "@emotion/styled";
import { componentsReturn } from "utils/toolkit";

export default function MappingContainer() {
  return (
    <Positioner>
      {componentsReturn.map((pages, ix) => (
        <div key={ix} className="section">
          {pages}
        </div>
      ))}
    </Positioner>
  );
}

const Positioner = styled.div`
  width: 100%;
  height: 100%;
`;
