import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Footer, Header } from "../src/components";
import { MEDIA_QUERY } from "../src/constants";
import { Contents } from "../src/containers";

const Home: NextPage = () => {
  return (
    <Positioner>
      <Head>
        <title>Aight</title>
        <meta name="description" content="Dann1y's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainWrapper>
        <Contents />
      </MainWrapper>
      <Footer />
    </Positioner>
  );
};

export default Home;

const Positioner = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #000000; */
`;

const MainWrapper = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid;

  ${MEDIA_QUERY.MOBILE} {
    width: 90%;
  }
`;
