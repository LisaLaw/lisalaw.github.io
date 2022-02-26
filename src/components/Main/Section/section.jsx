import React from "react";
import { SectionContent } from "./sectionContent.jsx";
import { StyledSection } from "./styles";
import { skills, about, projects } from "../../../constants/data";

export const Section = ({ title, className }) => {
  // check isSlider functionality
  return (
    <StyledSection className={className}>
      {title}
      {title === "About" && <SectionContent data={about} hasNoBulletPoints />}
      {title === "Projects" && <SectionContent data={projects} isSlider />}
      {title === "Skills" && <SectionContent data={skills} />}
    </StyledSection>
  );
};
