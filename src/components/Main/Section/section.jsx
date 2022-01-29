import React from "react";
import { CV } from "./CV/cv.jsx";
import { Projects } from "./Projects/projects.jsx";
import { NewSection } from "./section2.jsx";
import { Skills } from "./Skills/skills.jsx";
import { StyledSection } from "./styles";
import { skills } from "../../../constants/data";

export const Section = ({ title }) => {
  console.log("skills are ", skills);
  return (
    <StyledSection>
      {title}
      {title === "About" && <CV />}
      {title === "Projects" && <Projects />}
      {title === "Skills" && <NewSection data={skills} />}
    </StyledSection>
  );
};
