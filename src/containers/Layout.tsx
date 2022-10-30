import { ReactNode } from "react";
import styled from "styled-components";
import { MEDIA_QUERY } from "../constants";
import { Footer, Header } from "../components";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Positioner>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Positioner>
  );
};

const Positioner = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
