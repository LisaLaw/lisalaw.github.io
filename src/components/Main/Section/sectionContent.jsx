import React from "react";
import { BP } from "./BulletPoint/BP";
import { StyledSection } from "./styles";

const SectionContent = ({ data }) => {
  return (
    <StyledSection>
      {data.map((object) => {
        const { content, hasNoBulletPoints } = object;
        return hasNoBulletPoints ? <p>{content}</p> : <BP data={object} />;
      })}
    </StyledSection>
  );
};

export { SectionContent };
