import React, { useState } from "react";
import { StyledSection, Content, Title } from "./styles";

export const Section = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <StyledSection>
      <Title onClick={() => setIsVisible(!isVisible)}>{title}</Title>
      <Content isVisible={isVisible}>{content}</Content>
    </StyledSection>
  );
};
