import React, { useState } from "react";
import { StyledSection, Content, Title, BulletPoint, Emphasis } from "./styles";

export const Section = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <StyledSection open={isVisible} onClick={() => setIsVisible(!isVisible)}>
      <Title>{title}</Title>
      <Content isVisible={isVisible}>
        {Object.entries(content).map(([key, value], index) => {
          return (
            <BulletPoint key={index}><Emphasis>{key}: </Emphasis>{value}</BulletPoint>
          );
        })}
      </Content>
    </StyledSection>
  );
};
