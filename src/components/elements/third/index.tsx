import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { DESC_LIST } from "utils/constants";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

export default function Third() {
  const [current, setCurrent] = useState("Trendy");

  useEffect(() => {
    <Fade />;
  });

  const returnDescription = () => {
    switch (current) {
      case "Trendy":
        return DESC_LIST[0].desc;
      case "Growing":
        return DESC_LIST[1].desc;
      case "Fire":
        return DESC_LIST[2].desc;
    }
  };

  return (
    <Positioner>
      <Wrapper>
        <Navigation>
          {DESC_LIST.map((i, ix) => (
            <Item
              key={ix}
              onClick={() => setCurrent(i.title)}
              isActive={current === i.title}
            >
              {i.title}
            </Item>
          ))}
        </Navigation>
        <Fade top>
          <Desc>
            <Content>{returnDescription()}</Content>
          </Desc>
        </Fade>
      </Wrapper>
    </Positioner>
  );
}

interface ItemProps {
  isActive: Boolean;
}

const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("background/d.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10%;
  justify-content: space-between;
  height: 20%;
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
`;

const Desc = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
`;

const Content = styled.h1`
  width: 80%;
  height: 70%;
  text-align: center;
  color: #fff;
  font-size: 3.2vh;
  font-weight: 100;
`;
