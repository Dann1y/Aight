import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type CardProps = {
  width?: string;
  height?: string;
  children?: ReactNode;
};

export const Card = ({ children, ...props }: CardProps) => {
  return <Positioner {...props}>{children}</Positioner>;
};

const Positioner = styled(motion.div)<{
  width?: CardProps["width"];
  height?: CardProps["height"];
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 30px;
  background-color: rgb(26, 26, 26);
`;
