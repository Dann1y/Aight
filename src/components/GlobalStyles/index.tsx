import styled from "@emotion/styled";
import Icon from "components/icon";
import { motion } from "framer-motion";

interface MaskProps {
  h: number;
}

export const Mask = styled(motion.div)<MaskProps>`
  height: ${(p) => p.h}vh;
  overflow: hidden;
`;

export function GitIcon() {
  return (
    <ButtonPositioner>
      <Icon name="github" />
    </ButtonPositioner>
  );
}

const ButtonPositioner = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 4px solid #000;
  border-radius: 25px;
  transition: all 0.5s;

  :hover {
    height: 75px;
    transition: all 0.3s;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px,
      rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px,
      rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  }
`;
