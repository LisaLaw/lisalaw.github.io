import React from "react";
import { StyledMain } from "./styles";
import { navbarItems } from "../../constants/navbarItems";
import { ArrowCard } from "./ArrowCard/arrowCard";

export const Main = () => {
  return (
    <StyledMain>
      {navbarItems.length &&
        navbarItems.map((item, index) => {
          return item.type === "link" && <ArrowCard item={item} key={index} />;
        })}
      <div className="background" />
    </StyledMain>
  );
};
