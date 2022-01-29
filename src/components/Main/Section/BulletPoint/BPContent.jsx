import React from "react";
import { ContentGrid } from "../ContentGrid/ContentGrid";
import { Slider } from "../Slider/Slider";
import { StyledBPContent } from "./styles";

// how to get bullet content?

const BPContent = ({ data, ...props }) => {
  const { isSlider } = data;

  console.log("BPContent data is ", data);
  return (
    <StyledBPContent>
      {isSlider ? (
        <Slider visible={props.visible} data={data} />
      ) : (
        <ContentGrid visible={props.visible} data={data} />
      )}
    </StyledBPContent>
  );
};

export { BPContent };
