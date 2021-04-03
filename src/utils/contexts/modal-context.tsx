import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import ModalInfo from "utils/models/modal-info";
interface ModalState {
  modalList?: ModalInfo[];
  lastModalId?: number;
}

interface ModalDispatch {
  addModal: (modalInfo: ModalInfo) => number;
  removeModal: (id?: number) => void;
}

const ModalContext = createContext({});

export const ModalProvider = (props) => {
  const { children } = props;

  const initialState: ModalState = {
    modalList: [],
    lastModalId: 0,
  };

  return (
    <ModalContext.Provider value={useState(initialState)}>
      {children}
    </ModalContext.Provider>
  );
};

export const ModalConsumer = ModalContext.Consumer;

export const useModalContext = (): ModalState & ModalDispatch => {
  const [state, setState] = useContext(ModalContext) as [
    ModalState,
    Dispatch<SetStateAction<ModalState>>
  ];

  function addModal(modalInfo: ModalInfo) {
    setState((prev) => ({
      ...prev,
      modalList: prev.modalList.concat({
        ...modalInfo,
        id: prev.lastModalId,
      }),
      lastModalId: prev.lastModalId + 1,
    }));
    return state.lastModalId;
  }

  function removeModal(id?: number) {
    setState((prev) => ({
      ...prev,
      modalList: prev.modalList.filter((modal, i) =>
        id ? id !== modal.id : prev.modalList.length - 1 !== i
      ),
    }));
  }

  return {
    ...state,
    addModal,
    removeModal,
  };
};
