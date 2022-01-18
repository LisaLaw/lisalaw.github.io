import React from "react";
import { skills } from "../../../../constants/navbarItems";
import { Skill } from "./Skill";
import { SkillsWrapper } from "./styles";

export const Skills = () => {
  return (
    <SkillsWrapper>
      {skills.length &&
        skills.map((skill) => {
          return <Skill title={skill.title} items={skill.items} />;
        })}
    </SkillsWrapper>
  );
};
