import { motion } from "framer-motion";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants";
import { Card } from "../card/Card";

export const Work = () => {
  return (
    <Positioner>
      <motion.h1>Work</motion.h1>
      <CardWrapper>
        <TitleWrapper>
          <Title>
            <a
              href="https://ejn.gg/kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EJN
            </a>
          </Title>
          <span>2021.09. ~ 현재</span>
        </TitleWrapper>
        <ContentWrapper>
          <Description>
            트윕 프론트엔드를 담당하고 있습니다.
            <br /> 온라인 스트리머 시장에서 스트리머와 시청자를 연결하는 기존에
            없던 새로운 가치를 기술을 통해 기여하고 있습니다.
            <br /> 온라인 스트리밍 특성상 시청자와 스트리머로 하여금 빠른
            인터랙션이 필요하기에 이를 고려하여 UX에 적용합니다.
          </Description>
          <TwipCard>
            <a
              href="https://twip.kr/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.h1>TWIP</motion.h1>
            </a>
          </TwipCard>
        </ContentWrapper>
      </CardWrapper>
    </Positioner>
  );
};

const Positioner = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1200px;
  min-height: 50vh;
  height: 50vh;

  padding-top: 3%;
  margin-top: 10%;

  h1 {
    text-align: end;
    font-size: 60px;
    padding-right: 1.3%;
  }
`;

const CardWrapper = styled(Card)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  flex-grow: 1;
  /* height: 100%; */
  padding: 30px 40px 40px 40px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;

  span {
    color: hsla(0, 0%, 100%, 0.7);
  }
`;

const Title = styled(motion.h1)`
  color: #fee440;
  font-size: 60px;
  cursor: pointer;
  width: fit-content;
  margin-right: 1%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: 3%;

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column;
  }
`;

const Description = styled.p`
  flex: 2;
  max-width: 600px;
  line-height: 140%;
  word-break: keep-all;
  color: hsla(0, 0%, 100%, 0.5);
  font-weight: bold;
`;

const TwipCard = styled(Card)`
  flex: 1;
  max-width: 400px;
  height: 100%;
  background-color: #7b2cbf;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(0.95);
    transition: 0.2s ease-in;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  h1 {
    color: #fee440;
  }

  ${MEDIA_QUERY.TABLET} {
    width: 100%;
  }
`;
