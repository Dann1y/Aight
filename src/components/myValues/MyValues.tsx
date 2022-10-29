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
  flex: 1;
  flex-grow: 1;
  height: 100%;
  padding: 20px;
  cursor: pointer;
  background-color: #ffc8dd;
  word-break: keep-all;
  text-align: center;

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
