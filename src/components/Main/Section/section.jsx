import React from "react";
import { SectionContent } from "./sectionContent.jsx";
import { StyledSection } from "./styles";
import { skills, about, projects } from "../../../constants/data";

export const Section = ({ title, className, visible }) => {
  // check isSlider functionality
  console.log("title is ", title);
  return (
    <StyledSection className={className} visible={visible}>
      {title !== "About" && title}
      {title === "About" && <SectionContent data={about} hasNoBulletPoints />}
      {title === "Projects" && <SectionContent data={projects} isSlider />}
      {title === "Skills" && <SectionContent data={skills} />}
      {title === ""}
    </StyledSection>
  );
};
