import React from "react";
import { SectionContent } from "./sectionContent.jsx";
import { StyledSection } from "./styles";
import {
  skills,
  about,
  frontend,
  backend,
  presentations,
} from "../../../constants/data";

export const Section = ({ title, visible }) => {
  // check isSlider functionality
  return (
    <StyledSection visible={visible}>
      {title === "about" && <SectionContent data={about} hasNoBulletPoints />}
      {title === "frontend" && <SectionContent data={frontend} isSlider />}
      {title === "backend" && <SectionContent data={backend} isSlider />}
      {title === "skills" && <SectionContent data={skills} />}
      {title === "presentations" && <SectionContent data={presentations} />}
    </StyledSection>
  );
};
