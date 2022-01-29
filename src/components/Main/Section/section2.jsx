import React from "react";
import { BP } from "./BulletPoint/BP";
import { StyledSection } from "./styles";

const NewSection = ({ data }) => {
  const { title, isSlider, content } = data;

  console.log(title, content);

  const numberOfBPs = content.length;

  console.log("nr is ", numberOfBPs);
  return (
    <StyledSection>
      {title}
      {numberOfBPs < 2 ? (
        <p>{content}</p>
      ) : (
        [...Array(numberOfBPs)].map((number) => {
          return <BP data={data} key={number} />;
        })
      )}
    </StyledSection>
  );
};

export { NewSection };
