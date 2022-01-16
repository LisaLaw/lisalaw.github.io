import React from "react";
import { CV } from "./CV/cv.jsx";
import { Projects } from "./Projects/projects.jsx";
import { Skills } from "./Skills/skills.jsx";
import { StyledSection } from "./styles";

export const Section = ({ title }) => {
  return (
    <StyledSection>
      {title}
      {title === "About" && <CV />}
      {title === "Projects" && <Projects />}
      {title === "Skills" && <Skills />}
    </StyledSection>
  );
};
