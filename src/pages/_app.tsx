import type { AppProps } from "next/app";
import Head from "next/head";
import "../utils/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aight!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
