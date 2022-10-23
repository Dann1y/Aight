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
  align-items: center;
  justify-content: center;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
  background: radial-gradient(
    62.1% 87.2% at 50% 100%,
    purple,
    rgb(0, 7, 31) 100%
  );

  ${MEDIA_QUERY.MOBILE} {
    width: 90%;
  }
`;
