import styled from "styled-components";
import { motion } from "framer-motion";
import { MEDIA_QUERY } from "../../constants";

export const Experience = () => {
  return (
    <Positioner>
      <motion.h1>Experiences</motion.h1>
      <Wrapper>
        <ContentWrapper>
          <motion.h2>Contest</motion.h2>

          <motion.ul>
            <motion.li>
              GSM 제 4회 창의융합 프로젝트 발표회 (ONDO) - 최우수상 2021.01.
            </motion.li>
            <motion.li>
              2020 JA Korea Entrepreneur’s Playground 창업놀이터 (ONDO) - 우수상
              2021.12.
            </motion.li>
            <motion.li>
              한전 KDN 2019 빛가람 에너지밸리 SW 경진대회 - 장려상 2019.11
            </motion.li>
          </motion.ul>
        </ContentWrapper>
        <ContentWrapper>
          <motion.h2>Acitivity</motion.h2>

          <motion.ul>
            <motion.li>2022 Gaming on Google Cloud 참여 2022.09.22.</motion.li>
            <motion.li>
              대한민국 소프트웨어대전 학생 포트폴리오 서비스 Olio 전시
              2020.12.02. ~ 2020.12.04.
            </motion.li>
            <motion.li>
              대한민국 소프트웨어대전 전력 거래 플랫폼 Chager 전시 2019.12.04. ~
              2019.12.06.
            </motion.li>
            <motion.li>
              Singapore ConnecTechAsia 2019 참여 2019.06.20.
            </motion.li>
          </motion.ul>
        </ContentWrapper>
      </Wrapper>
    </Positioner>
  );
};

const Positioner = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 40vh;
  height: 40vh;
  margin-top: 10%;

  h1 {
    font-size: 60px;
    padding-left: 0.5%;
    padding-bottom: 0.5%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  padding: 2%;
  gap: 3%;
  background-color: rgb(26, 26, 26);

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  ul {
    margin-top: 3%;

    li:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  li {
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 16px;
  }
`;
