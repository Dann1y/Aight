import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";
import { CardItem, CardSize } from "./Project";

type ProjectCardProps = {
  title: string;
  date: string;
  size: CardSize;
  image: string;
  description: ReactNode;
  isClicked: boolean;
  onClick: () => void;
  isRight?: boolean;
};

export const ProjectCard = ({
  title,
  date,
  image,
  description,
  size,
  isClicked,
  onClick,
  isRight,
}: ProjectCardProps) => {
  return (
    <CardItem
      isClicked={isClicked}
      onClick={isClicked ? undefined : onClick}
      size={size}
      isRight={isRight}
    >
      {isClicked ? (
        <Positioner>
          <TitleWrapper>
            <motion.h1>{title}</motion.h1>
            <Image
              src="/close.svg"
              width="30px"
              height="30px"
              alt="close"
              style={{ cursor: "pointer" }}
              onClick={onClick}
            />
          </TitleWrapper>
          <span>{date}</span>
          <Wrapper>
            <CardImageWrapper>
              <Image src={image} alt={`${title}`} layout="fill" quality={100} />
            </CardImageWrapper>
            {description}
          </Wrapper>
        </Positioner>
      ) : (
        <motion.h2>{title}</motion.h2>
      )}
    </CardItem>
  );
};

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 2%;

  h1 {
    color: rgb(30, 50, 100);
    font-size: 40px;
  }

  span {
    color: #1d2d44;
    margin-top: 0.5%;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  margin-top: 5%;

  p {
    word-break: keep-all;
    color: #000000;
    text-align: center;
    margin-top: 7%;
    width: 80%;
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 75%;
  height: 50%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;
