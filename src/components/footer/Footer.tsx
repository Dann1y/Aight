import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { Card } from "../card/Card";

export function Footer() {
  return (
    <Positioner>
      <motion.h1>Download Resume</motion.h1>
      <Resume>
        <a
          href="https://drive.google.com/file/d/1VMJUAIvKGXbQ9y64Zx_QRGLTqONJHbZH/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src="/resume.svg" width="60px" height="60px" alt="email" />
        </a>
      </Resume>
    </Positioner>
  );
}

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 35vh;
  min-height: 35vh;
  padding: 3%;
  background-color: rgb(26, 26, 26);
`;

const Resume = styled(Card)`
  display: flex;
  flex-grow: 1;
  width: 400px;
  margin-top: 30px;
  background-color: rgb(250, 231, 227);
  transition: 0.3s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
    transition: 0.3s ease-out;
  }
`;
