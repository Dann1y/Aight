import type { AppProps } from "next/app";
import Head from "next/head";
import "../utils/styles.css";
import { ModalProvider, ModalConsumer } from "utils/contexts/modal-context";
import ModalInfo from "utils/models/modal-info";
import Modal from "components/modal";

function MyApp({ Component, pageProps }: AppProps) {
  const renderModals = () => {
    return (
      <ModalConsumer>
        {(state) =>
          (state[0].modalList as ModalInfo[]).map((modal) => (
            <Modal key={modal.id} info={modal} />
          ))
        }
      </ModalConsumer>
    );
  };

  return (
    <>
      <Head>
        <title>Aight!</title>
      </Head>

      <ModalProvider>
        <Component {...pageProps} />
        {renderModals()}
      </ModalProvider>
    </>
  );
}

export default MyApp;
