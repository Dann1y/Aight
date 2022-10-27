import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants";
import { Card } from "../card/Card";

export const GetInTouchMe = () => {
  return (
    <Positioner width="100%" height="250px">
      <motion.h2 style={{}}>Get in touch me</motion.h2>
      <ContactWrapper>
        <ContactMethod bgColor="#e2fdff">
          <a href="mailto: leedanny0102@gmail.com">
            <Image src="/email.svg" width="50px" height="50px" alt="email" />
          </a>
        </ContactMethod>
        <ContactMethod bgColor="#bfd7ff">
          <Image src="/blog.svg" width="50px" height="50px" alt="email" />
        </ContactMethod>
        <ContactMethod bgColor="#788bff">
          <Image src="/linkedin.svg" width="50px" height="50px" alt="email" />
        </ContactMethod>
        <ContactMethod bgColor="#5465ff">
          <Image src="/github.svg" width="50px" height="50px" alt="email" />
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

  ${MEDIA_QUERY.TABLET} {
    height: auto;
    padding: 15px 30px 30px 30px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  gap: 16px;

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
  height: 140px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  transform-origin: 50% 50% 0;

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
