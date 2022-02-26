import React from "react";
import { StyledMain } from "./styles";
import { navbarItems } from "../../constants/navbarItems";
import { Section } from "./Section/section";

export const Main = () => {
  return (
    <StyledMain>
      {navbarItems.length &&
        navbarItems.map((item, index) => {
          const { label, type } = item;
          return (
            type === "link" && (
              <Section
                title={label}
                className={`${label.toLowerCase()}-section`}
                key={index}
              />
            )
          );
        })}
      <div className="background" />
    </StyledMain>
  );
};
