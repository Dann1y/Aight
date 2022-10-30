import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants";
import { Card } from "../card/Card";

export const GetInTouchMe = () => {
  return (
    <Positioner width="90%" height="400px">
      <motion.h2 style={{}}>Get in touch me</motion.h2>
      <ContactWrapper>
        <ContactMethod bgColor="#e2fdff">
          <a href="mailto: leedanny0102@gmail.com">
            <Image src="/email.svg" width="50px" height="50px" alt="email" />
          </a>
        </ContactMethod>
        <ContactMethod bgColor="#ffc8dd">
          <a
            href="https://topmate.io/danny"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/video.svg" width="50px" height="50px" alt="email" />
          </a>
        </ContactMethod>

        <ContactMethod bgColor="#788bff">
          <a
            href="https://www.linkedin.com/in/danny-lee17/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/linkedin.svg" width="50px" height="50px" alt="email" />
          </a>
        </ContactMethod>
        <ContactMethod bgColor="#5465ff">
          <a
            href="https://github.com/dann1y"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/github.svg" width="50px" height="50px" alt="email" />
          </a>
        </ContactMethod>
      </ContactWrapper>
    </Positioner>
  );
};

const Positioner = styled(Card)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 30px 30px 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 1200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ${MEDIA_QUERY.TABLET} {
    height: auto;
    padding: 15px 30px 30px 30px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 5%;
  gap: 16px;
  cursor: pointer;

  ${MEDIA_QUERY.TABLET} {
    margin-top: 20px;
  }

  ${MEDIA_QUERY.MOBILE} {
    flex-direction: column;
  }
`;

const ContactMethod = styled(Card)<{ bgColor?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  transform-origin: 50% 50% 0;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    width: 90%;
    height: 90%;
    transition: ease-out 0.2s;
    transform: perspective(1200px) translateX(0px) translateY(0px) scale(1)
      rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);
  }

  ${MEDIA_QUERY.TABLET} {
    height: 100px;
  }
`;
