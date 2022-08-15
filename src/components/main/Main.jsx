import React from "react";
import { data } from "../../constants/data";
import { Section } from "./section/Section";
import { Wrapper } from "./styles";

export const Main = () => {
  return (
    <Wrapper>
      {data.length &&
        data.map((item) => {
          return <Section title={item.title} content={item.content} />;
        })}
    </Wrapper>
  );
};
