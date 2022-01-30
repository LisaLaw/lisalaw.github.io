import React from "react";
import { ContentGrid } from "../ContentGrid/ContentGrid";
import { Slider } from "../Slider/Slider";

const BPContent = ({ data, ...props }) => {
  const { isSlider } = data;

  return (
    <div>
      {isSlider ? (
        <Slider visible={props.visible} data={data} />
      ) : (
        <ContentGrid visible={props.visible} data={data} />
      )}
    </div>
  );
};

export { BPContent };
