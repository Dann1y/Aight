import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "../card/Card";
import { GetInTouchMe } from "../getInTouchMe/GetInTouchMe";

export const MyInfo = () => {
  return (
    <Positioner>
      <Wrapper>
        <Ipad width="50%" height="400px">
          <Camera />
          <ProfileWrapper>
            <BottomBar />
            <Image src="/me.jpg" layout="fill" objectFit="cover" alt="me" />
          </ProfileWrapper>
        </Ipad>
        <DescriptionWrapper>
          <motion.h1
            style={{
              color: "rgb(30, 50, 100)",
              fontSize: "88px",
            }}
          >
            Danny
          </motion.h1>
          <motion.h2>18, junior frontend developer</motion.h2>
          <Description>
            <motion.h3>안녕하세요 이대훈입니다.</motion.h3>
            <motion.p>
              저는 사용자가 웹에 접속했을 때 몰입할 수 있는 서비스를 구현하는
              것을 좋아합니다. <br /> 마치 새로운 행성에 방문한 것처럼 훌륭한
              사용자 경험과 함께 <br /> 서비스의 가치를 자연스럽게 녹여내기 위해
              노력합니다.
              <br />
              최근에는 훌륭한 동료분들과 함께 성장하는 드라마틱한 경험을 하고
              있습니다.
            </motion.p>
          </Description>
        </DescriptionWrapper>
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
  justify-content: center;
  max-width: 1200px;
  width: 80%;
  min-height: calc(100vh - 70px);

  ${MEDIA_QUERY.TABLET} {
    height: auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 400px;

  ${MEDIA_QUERY.TABLET} {
    height: auto;
    flex-direction: column;
  }
`;

const Ipad = styled(Card)`
  position: relative;
  width: 280px;
  min-width: 280px;
  border: 3px solid #9381ff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ${MEDIA_QUERY.TABLET} {
    display: none;
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

const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 50%;
  height: 2px;
  border: 2px solid #fff;
  border-radius: 3px;
  z-index: 20;
`;

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 85%;
  max-height: 350px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  height: 100%;
  margin-left: 50px;
  padding-top: 20px;

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-left: 1%;
    color: #1d4e89;
  }

  ${MEDIA_QUERY.TABLET} {
    width: 100%;
    margin-left: 0;
    padding-top: 10px;

    h1 {
      margin-bottom: 25px;
    }

    h2 {
      margin-bottom: 2%;
    }
  }
`;

const Description = styled(Card)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: fit-content;
  padding: 20px 30px 30px 30px;
  margin-top: auto;
  overflow-y: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  p {
    line-height: 140%;
    color: hsla(0, 0%, 100%, 0.5);
    word-break: keep-all;
    margin-bottom: 0;
  }

  ${MEDIA_QUERY.TABLET} {
    overflow-y: auto;
    p {
      line-height: 160%;
    }
  }
`;

const Sentence = styled(Card)`
  text-align: center;
  max-height: 400px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const MyMind = styled(motion.h1)`
  font-size: 100px;

  background-image: linear-gradient(
    315deg,
    var(--token-0245ad54-dffa-4280-9b49-9d43ad68acaa, rgb(102, 0, 255)) 0%,
    var(--token-0c4c4e00-f4fc-4e6a-9a97-509a95a3e5d4, rgb(255, 0, 102)) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${MEDIA_QUERY.TABLET} {
    font-size: 70px;
  }
  ${MEDIA_QUERY.MOBILE} {
    font-size: 50px;
  }
`;
