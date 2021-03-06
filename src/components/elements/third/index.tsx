import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { DESC_LIST } from "utils/constants";
import { motion } from "framer-motion";
import { useIntersection } from "utils/hooks/use-intersection";
import aboutMotions from "motions/about.motion";
import { Mask } from "components/GlobalStyles";

export default function Third() {
  const [current, setCurrent] = useState("Trendy");
  const sectionRef = useRef();

  const { visible } = useIntersection(sectionRef, {
    threshold: 0.7,
  });

  const returnDescription = () => {
    switch (current) {
      case "Trendy":
        return (
          <ContentWrapper>
            <Content variants={aboutMotions.aboutText}>
              I know what is trendy and I do. I will prove it through the way I
              work.
            </Content>
            <Content variants={aboutMotions.aboutText}>
              Communicates well and results are good.
            </Content>
            <Content variants={aboutMotions.aboutText}>
              You've never seen anyone as cool as meπ
            </Content>
          </ContentWrapper>
        );
      case "Growing":
        return (
          <ContentWrapper>
            <Content variants={aboutMotions.aboutText}>
              Everyone makes mistakes. And it's divided into two categories:
            </Content>
            <Content variants={aboutMotions.aboutText}>
              fix mistakes or keep making mistakes.
            </Content>
            <Content variants={aboutMotions.aboutText}>
              Iβm the first one and grows to the next level. <br />
              Never get frustrated with mistakes.
            </Content>
          </ContentWrapper>
        );
      case "Fire":
        return (
          <ContentWrapper>
            <Content variants={aboutMotions.aboutText}>
              I'm on fire ππ₯ <br />
              This fire always makes great results.
            </Content>
            <Content variants={aboutMotions.aboutText}>
              See how much potential I have The fire is getting bigger
            </Content>
          </ContentWrapper>
        );
    }
  };

  return (
    <Positioner
      ref={sectionRef}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <Wrapper>
        <Mask h={7}>
          <Navigation>
            {DESC_LIST.map((i, ix) => (
              <Item
                key={ix}
                onClick={() => setCurrent(i.title)}
                isActive={current === i.title}
                variants={aboutMotions.subText}
              >
                {i.title}
              </Item>
            ))}
          </Navigation>
        </Mask>
        <Desc variants={aboutMotions.aboutContainer}>
          {returnDescription()}
        </Desc>
      </Wrapper>
    </Positioner>
  );
}

interface ItemProps {
  isActive: Boolean;
}

const Positioner = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  height: 40%;

  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  height: 100%;
  margin-right: 7vh;
`;

const Item = styled(motion.h1)<ItemProps>`
  font-size: 5vh;
  color: #524f4f;
  background: ${(p) =>
    p.isActive
      ? `linear-gradient(
    180deg,
    rgba(24, 210, 224, 1) 20%,
    rgba(243, 18, 254, 1) 100%
  )`
      : `#524f4f`};

  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  margin: 0;
`;

const Desc = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
`;

const Content = styled(motion.div)`
  width: 80%;
  height: 70%;
  text-align: center;
  color: #fff;
  font-size: 2.5vh;
  font-weight: 100;
`;
