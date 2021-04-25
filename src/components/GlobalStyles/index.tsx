import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface MaskProps {
  h: number;
}

export const Mask = styled(motion.div)<MaskProps>`
  height: ${(p) => p.h}vh;
  overflow: hidden;
`;
