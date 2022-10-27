import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "../card/Card";
import { Vercel } from "./Vercel";
import { GetInTouchMe } from "../getInTouchMe/GetInTouchMe";

export const MyInfo = () => {
  return (
    <Positioner>
      <Wrapper>
        <SmallCard width="50%" height="400px">
          <Camera />
          <ProfileWrapper>
            <Image src="/me.jpg" layout="fill" objectFit="cover" alt="me" />
          </ProfileWrapper>
        </SmallCard>
        <Description>
          <motion.h1
            style={{
              color: "rgb(30, 50, 100)",
              fontSize: "88px",
            }}
          >
            Danny
          </motion.h1>
          <GetInTouchMe />
        </Description>
      </Wrapper>
      <Sentence width="100%" height="350px">
        <MyMind>
          Think Less
          <br />
          Act Immediately
        </MyMind>
      </Sentence>
    </Positioner>
  );
};

const Positioner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 80%;
  min-height: calc(100vh - 70px);
  padding: 40px 0 40px 0;

  ${MEDIA_QUERY.TABLET} {
    height: auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 400px;

  ${MEDIA_QUERY.TABLET} {
    height: auto;
    flex-direction: column;
  }
`;

const SmallCard = styled(Card)`
  position: relative;
  width: 280px;
  min-width: 280px;
  border: 3px solid #9381ff;

  ${MEDIA_QUERY.TABLET} {
    display: none;
    width: 100%;
    height: 300px;
  }
`;

const Camera = styled.div`
  position: absolute;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background-color: #3e5c76;

  &:after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background-color: #000;
  }
`;

const ProfileWrapper = styled.div`
  position: relative;
  width: 85%;
  max-height: 350px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
`;

const Description = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  height: 100%;
  margin-left: 50px;
  padding-top: 20px;

  h1 {
    margin-bottom: 30px;
  }

  ${MEDIA_QUERY.TABLET} {
    width: 100%;
    margin-left: 0;
    padding-top: 10px;

    h1 {
      margin-bottom: 25px;
    }
  }
`;

const Sentence = styled(Card)`
  text-align: center;
  max-height: 400px;
  margin-top: 50px;
`;

const MyMind = styled(motion.h1)`
  /* color: rgb(30, 50, 100); */

  background-image: linear-gradient(
    315deg,
    var(--token-0245ad54-dffa-4280-9b49-9d43ad68acaa, rgb(102, 0, 255)) 0%,
    var(--token-0c4c4e00-f4fc-4e6a-9a97-509a95a3e5d4, rgb(255, 0, 102)) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 100px;

  ${MEDIA_QUERY.TABLET} {
    font-size: 70px;
  }
  ${MEDIA_QUERY.MOBILE} {
    font-size: 50px;
  }
`;
