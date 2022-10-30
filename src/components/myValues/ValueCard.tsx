import styled from "styled-components";
import { Card } from "../card/Card";
import { motion } from "framer-motion";
import { MEDIA_QUERY } from "../../constants";

type ValueCardProps = {
  title: string;
  description: string;
  isClicked: boolean;
  onClick: () => void;
};

export const ValueCard = ({
  title,
  description,
  onClick,
  isClicked,
}: ValueCardProps) => {
  return (
    <CardItem onClick={onClick}>
      {isClicked ? (
        <motion.h3>{description}</motion.h3>
      ) : (
        <motion.h2>{title}</motion.h2>
      )}
    </CardItem>
  );
};

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
