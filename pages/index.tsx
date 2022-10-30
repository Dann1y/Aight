import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Footer, Header } from "../src/components";
import { MEDIA_QUERY } from "../src/constants";
import { Contents, Layout } from "../src/containers";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Aight</title>
        <meta name="description" content="Dann1y's portfolio website - Aight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contents />
    </Layout>
  );
};

export default Home;
