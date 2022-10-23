import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants";
import { motion } from "framer-motion";

export const MyInfo = () => {
  return (
    <Positioner>
      <MyInfoWrapper>
        <ProfilePicture>
          {/* <Image
            src="/me.jpg"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt="me"
          /> */}
        </ProfilePicture>
        <MyInfo1>
          <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Danny
          </motion.h1>
          <span></span>
        </MyInfo1>
      </MyInfoWrapper>
    </Positioner>
  );
};
// rgb(44, 59, 232) 0%,
const Positioner = styled.section`
  width: 100%;
  height: 100vh;
`;

const MyInfoWrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERY.MOBILE} {
    flex-direction: column;
    height: auto;
  }
`;

const MyInfo1 = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-items: center;
  padding-top: 40px;
  border: 1px solid #ffffff;
`;

const ProfilePicture = styled.div`
  position: relative;
  width: 400px;
  min-width: 400px;
  height: 400px;
  min-height: 400px;
  border-radius: 100%;
  overflow: hidden;
  background-color: white;

  ${MEDIA_QUERY.MOBILE} {
    width: 300px;
    min-width: 300px;
    height: 300px;
    min-height: 300px;
  }
`;
