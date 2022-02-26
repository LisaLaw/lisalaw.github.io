import styled from "styled-components";
import { screenSize, colors } from "../../../constants/constants";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 4px;
  padding: 15px;
  background-color: white;
  font-size: 18px;
  box-shadow: 1.5px 3px 3px ${colors.shadows.sectionShadow.unfocused};

  @media (min-width: ${screenSize.mobile}) {
    &:nth-child(2) {
      align-self: flex-end;
    }
    &:nth-child(3) {
      align-self: center;
    }
  }
  @media (min-width: ${screenSize.mobile}) {
    width: 30%;
  }

  :hover {
    box-shadow: 2.5px 5px 5px ${colors.shadows.sectionShadow.focused};
    border: 1px solid ${colors.grayColor.extraLight};
  }

  &.skills-section {
    grid-area: skills-section;
  }

  &.projects-section {
    grid-area: projects-section;
    border: 1px dashed green;
  }

  &.about-section {
    grid-area: about-section;
  }
`;

export { StyledSection };
