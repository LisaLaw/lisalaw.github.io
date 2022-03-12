import React from "react";
import { SectionContent } from "./sectionContent.jsx";
import { StyledSection } from "./styles";
import {
  skills,
  about,
  projects,
  presentations,
} from "../../../constants/data";

export const Section = ({ title, className, visible }) => {
  // check isSlider functionality
  return (
    <StyledSection className={className} visible={visible}>
      {title === "About" && <SectionContent data={about} hasNoBulletPoints />}
      {title === "Projects" && <SectionContent data={projects} isSlider />}
      {title === "Skills" && <SectionContent data={skills} />}
      {title === "Presentations" && <SectionContent data={presentations} />}
      {title === ""}
    </StyledSection>
  );
};
