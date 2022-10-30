import React, { useId, useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERY, MYVALUES } from "../../constants";
import { motion } from "framer-motion";
import { Card } from "../card/Card";

export const MyValues = () => {
  const [isClicked, setIsClicked] = useState({
    intrepreneur: false,
    essential: false,
    cooperation: false,
  });

  const handleClick = (index: number) => {
    setIsClicked((prev) => ({
      ...prev,
      [Object.keys(isClicked)[index]]: !Object.values(isClicked)[index],
    }));
  };

  return (
    <Positioner>
      {MYVALUES.map(({ title, description }, idx) => (
        <CardItem key={`${title}_${idx}`} onClick={() => handleClick(idx)}>
          {!!Object.values(isClicked)[idx] ? (
            <motion.h3>{description}</motion.h3>
          ) : (
            <motion.h2>{title}</motion.h2>
          )}
        </CardItem>
      ))}
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
  width: 100%;
  height: 100%;
  padding: 20px;
  cursor: pointer;
  background-color: #ffc8dd;
  word-break: keep-all;
  text-align: center;
  transition: ease-in 0.3s;

  transform-origin: 50% 50% 0;

  &:hover {
    width: 90%;
    height: 90%;
    transition: ease-out 0.3s;
    transform: perspective(1200px) translateX(0px) translateY(0px) scale(1)
      rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);
  }

  h2 {
    color: #062726;
    font-size: 40px;
  }

  h3 {
    color: #062726;
  }

  ${MEDIA_QUERY.TABLET} {
    width: 100%;
    min-height: 300px;
  }
`;
