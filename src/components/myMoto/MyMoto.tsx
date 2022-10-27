import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "../card/Card";

export const MyMoto = () => {
  return (
    <Positioner>
      <CardItem>
        <motion.h2>Intrepreneurship</motion.h2>
      </CardItem>
      <CardItem>
        <motion.h2>Essential</motion.h2>
      </CardItem>
      <CardItem>
        <motion.h2>Cooperation</motion.h2>
      </CardItem>
    </Positioner>
  );
};
const Positioner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  min-height: 50vh;
  background-color: rgb(26, 26, 26);
  gap: 3%;
  padding: 3%;

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column;
    height: auto;
    min-height: auto;
    gap: 30px;
  }
`;

const CardItem = styled(Card)`
  flex: 1;
  flex-grow: 1;
  height: 100%;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #273e47;
  background-color: #6247aa;

  h2 {
    color: #062726;
    font-size: 40px;
  }

  ${MEDIA_QUERY.TABLET} {
    width: 100%;
    min-height: 300px;
  }
`;

// const MyMind = styled(motion.h1)`
//   /* color: rgb(30, 50, 100); */

//   background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-size: 5rem;
// `;
