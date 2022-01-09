import React, { useState } from "react";
import { CV } from "./CV/cv.jsx";
import { Projects } from "./Projects/projects.jsx";
import { Skills } from "./Skills/skills.jsx";
import { SectionWrapper, StyledSection, Connector } from "./styles";

export const Section = ({ title }) => {
  const [fullDisplay, setFullDisplay] = useState(false);
  const displayFull = () => {
    setFullDisplay((prevState) => !prevState);
  };

  return (
    <SectionWrapper onClick={() => displayFull()} full={fullDisplay}>
      <StyledSection>
        {title}
        {title === "About" && <CV />}
        {title === "Projects" && <Projects />}
        {title === "Skills" && <Skills />}
      </StyledSection>
      <Connector />
    </SectionWrapper>
  );
};
