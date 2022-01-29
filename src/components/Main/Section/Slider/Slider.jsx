import React from "react";
import { StyledSlider } from "./styles";

const Slider = ({ items, ...props }) => {
  return <StyledSlider visbile={props.visible}>{items}</StyledSlider>;
};

export { Slider };
