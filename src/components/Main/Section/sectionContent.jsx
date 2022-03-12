import React from "react";
import { StyledContent, StyledContentLine } from "./styles";
import { BP } from "./BulletPoint/BP";

const SectionContent = ({ data }) => {
  return (
    <div>
      {data.map((object) => {
        const { content, hasNoBulletPoints } = object;
        return hasNoBulletPoints ? (
          <StyledContent>
            {content.map((line, index) => (
              <StyledContentLine key={index}>{line}</StyledContentLine>
            ))}
          </StyledContent>
        ) : (
          <BP data={object} />
        );
      })}
    </div>
  );
};

export { SectionContent };
