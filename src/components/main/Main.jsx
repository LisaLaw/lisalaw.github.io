import React from "react";
import { data } from "../../constants/data";
import { Section } from "./section/Section";
import { StyledMain } from "./styles";

export const Main = () => {
  return (
    <StyledMain>
      {data.length &&
        data.map((item) => {
          return <Section title={item.title} content={item.content} />;
        })}
    </StyledMain>
  );
};
