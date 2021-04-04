import React, { useCallback, useEffect, useRef } from "react";
import { useModalContext } from "utils/contexts/modal-context";
import ModalInfo from "utils/models/modal-info";
import styled from "@emotion/styled";

interface ModalProps {
  info: ModalInfo;
}

const Modal = (props: ModalProps) => {
  const { info } = props;
  const { removeModal } = useModalContext();

  const clonedElement = info.element
    ? React.cloneElement(info.element, {
        modalId: info.id,
      })
    : undefined;

  const onConfirm = useCallback(() => {
    if (info.confirmAction) {
      info.confirmAction();
    }
    removeModal(info.id);
  }, [info, removeModal]);
  const onClose = useCallback(() => {
    if (info.closeAction) {
      info.closeAction();
    }
    removeModal(info.id);
  }, [info, removeModal]);

  const onModalInnerClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <ModalBackground onClick={onClose}>
      <ModalBox
        onClick={onModalInnerClick}
        width={info.width}
        height={info.height}
      >
        {clonedElement}
      </ModalBox>
    </ModalBackground>
  );
};

export default Modal;

interface ModalBoxProps {
  width: any;
  height: any;
}

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1050;
`;

export const ModalBox = styled.div<ModalBoxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 7px;
  box-shadow: 4px 6px 20px 0 rgba(0, 0, 0, 0.09);
  transform: translate(-50%, -50%);

  background-color: #ffffff;
`;
