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
            {content.map((line) => (
              <StyledContentLine>{line}</StyledContentLine>
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
