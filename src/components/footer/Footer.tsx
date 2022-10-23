import Image from "next/image";
import React from "react";
import styled from "styled-components";

export function Footer() {
  return (
    <Positioner>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shout out to{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </Positioner>
  );
}

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #ffffff;
`;
