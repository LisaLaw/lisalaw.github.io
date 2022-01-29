import React from "react";
import { StyledContentGrid, StyledListItem } from "./styles";

const ContentGrid = ({ data, ...props }) => {
  const { content } = data;
  return (
    <StyledContentGrid visible={props.visible}>
      {content.map((item) => {
        return <StyledListItem>{item}</StyledListItem>;
      })}
    </StyledContentGrid>
  );
};

export { ContentGrid };
