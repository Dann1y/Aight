import styled from "@emotion/styled";
import React from "react";

import icons, { IconList } from "./icons";

interface IconStyledProps {
  w?: any;
  h?: any;
  f?: string;
}

interface IconProps {
  name: keyof IconList;
  width?: number | number[];
  height?: any;
  isClickable?: boolean;
  isVerticalMiddle?: boolean;
  style?: React.CSSProperties;
  iconColor?: string;
}

const Icon = (props: IconProps) => {
  const {
    name,
    width,
    height,
    style,
    isClickable,
    isVerticalMiddle,
    iconColor,
  } = props;
  return (
    <ResponsiveBox
      w={width || icons[name].width}
      h={height || icons[name].height}
      f={iconColor}
      style={{
        verticalAlign: isVerticalMiddle && "middle",
        cursor: isClickable && "pointer",
        ...style,
      }}
    >
      <svg viewBox={`0 0 ${icons[name].width} ${icons[name].height}`}>
        {icons[name].svg}
      </svg>
    </ResponsiveBox>
  );
};

export default Icon;

const ResponsiveBox = styled.div<IconStyledProps>`
  display: inline-flex;
  width: ${(p) => p.w}px;
  height: ${(p) => p.h}px;
  align-items: center;
  justify-content: center;

  svg {
    flex: 1;
    display: block;

    path {
      fill: ${(p) => p.f};
    }
  }
`;
