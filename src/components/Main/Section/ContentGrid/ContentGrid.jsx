import React from "react";
import { StyledContentGrid, StyledListItem } from "./styles";

const ContentGrid = ({ data, ...props }) => {
  return (
    <StyledContentGrid visible={props.visible}>
      {data.map((item, index) => {
        return <StyledListItem key={index}>{item}</StyledListItem>;
      })}
    </StyledContentGrid>
  );
};

export { ContentGrid };
