import React from "react";
import { BP } from "./BulletPoint/BP";

const SectionContent = ({ data }) => {
  return (
    <div>
      {data.map((object) => {
        const { content, hasNoBulletPoints } = object;
        return hasNoBulletPoints ? <p>{content}</p> : <BP data={object} />;
      })}
    </div>
  );
};

export { SectionContent };
