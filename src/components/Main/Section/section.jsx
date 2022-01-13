import React, { useState } from "react";
import { CV } from "./CV/cv.jsx";
import { Projects } from "./Projects/projects.jsx";
import { Skills } from "./Skills/skills.jsx";
import { StyledSection } from "./styles";

export const Section = ({ title }) => {
  const [fullDisplay, setFullDisplay] = useState(false);
  const displayFull = () => {
    setFullDisplay((prevState) => !prevState);
  };

  return (
    <StyledSection onClick={() => displayFull()} full={fullDisplay}>
      {title}
      {title === "About" && <CV />}
      {title === "Projects" && <Projects />}
      {title === "Skills" && <Skills />}
    </StyledSection>
  );
};
