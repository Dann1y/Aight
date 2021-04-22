import React from "react";
import styled from "@emotion/styled";

interface BackgroundContainerStyledProps {
  p?: string;
}

interface BackgroundContainerProps {
  imagePath: string;
  children: React.ReactNode;
}

export default function BackgroundContainer(props: BackgroundContainerProps) {
  const { imagePath, children } = props;
  return (
    <Container className="section" p={imagePath}>
      {children}
    </Container>
  );
}

const Container = styled.div<BackgroundContainerStyledProps>`
  background-image: url(${(p) => p.p});
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;
