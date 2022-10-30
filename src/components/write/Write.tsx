import { motion } from "framer-motion";
import styled from "styled-components";
import { Card } from "../card/Card";

type CardSize = "sm" | "md";

enum EnumCardFlex {
  "md" = 2,
  "sm" = 1,
}

export const Write = () => {
  return (
    <Positioner>
      <motion.h1>Writes</motion.h1>
      <Wrapper>
        <CardItem>
          <a
            href="https://danerally.tistory.com/4"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.h1>실패를 두려워하지 않는 법 - 완벽주의 덜어내기</motion.h1>
          </a>
        </CardItem>
        <CardItem>
          <a
            href="https://danerally.tistory.com/3"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.h1>주니어 Frontend 개발자의 1년</motion.h1>
          </a>
        </CardItem>
        <CardItem>
          <a
            href="https://danerally.tistory.com/2"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.h1>광주소프트웨어마이스터고등학교 3년 회고록.</motion.h1>
          </a>
        </CardItem>
      </Wrapper>
    </Positioner>
  );
};

const Positioner = styled.section`
  position: relative;
  max-width: 850px;
  width: 80%;
  min-height: 50vh;
  height: 50vh;
  margin-top: 10%;

  h1 {
    text-align: end;
    font-size: 60px;
    padding-right: 1.3%;
  }
`;

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: rgb(30, 50, 100);
  gap: 5%;
  padding: 5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h1 {
    font-size: 25px;
    color: #000000;
  }
`;

const CardItem = styled(Card)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #ffc8dd;
  word-break: keep-all;
  text-align: center;
  transition: ease-in 0.3s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform-origin: 50% 50% 0;

  &:hover {
    width: 90%;
    height: 90%;
    transition: ease-out 0.3s;
    transform: perspective(1200px) translateX(0px) translateY(0px) scale(1)
      rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
