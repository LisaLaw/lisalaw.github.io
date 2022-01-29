import React from "react";
import { StyledMain } from "./styles";
import { navbarItems } from "../../constants/navbarItems";
import { Section } from "./Section/section";

export const Main = () => {
  return (
    <StyledMain>
      {navbarItems.length &&
        navbarItems.map((item) => {
          const { label, type, key, isSlider, hasOnlyOneItem } = item;
          return (
            type === "link" && (
              <Section
                title={label}
                key={key}
                isSlider={isSlider}
                hasOnlyOneItem={hasOnlyOneItem}
              />
            )
          );
        })}
    </StyledMain>
  );
};
