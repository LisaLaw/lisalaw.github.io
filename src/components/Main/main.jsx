import React from "react";
import { StyledMain } from "./styles";
import { navbarItems } from "../../constants/navbarItems";
import { Section } from "./Section/section";

export const Main = () => {
  return (
    <StyledMain>
      {navbarItems.length &&
        navbarItems.map((item) => {
          return (
            item.type === "link" && <Section key={item.id} title={item.label} />
          );
        })}
    </StyledMain>
  );
};
