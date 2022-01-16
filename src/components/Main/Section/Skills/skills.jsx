import React from "react";
import logo from "../../../../constants/logos/logo_right.svg";
import { SkillsWrapper, SkillsBulletPoint, Icon, SkillsTitle } from "./styles";

export const Skills = () => {
  const titles = ["Technical Skills", "Soft Skills", "Language Skills"];

  return (
    <SkillsWrapper>
      {titles.length &&
        titles.map((title) => {
          return (
            <SkillsBulletPoint>
              <Icon src={logo} />
              <SkillsTitle>{title}</SkillsTitle>
            </SkillsBulletPoint>
          );
        })}
    </SkillsWrapper>
  );
};
