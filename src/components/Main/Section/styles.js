import styled from "styled-components";
import { screenSize, colors } from "../../../constants/constants";

const StyledSection = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;

  @media (min-width: ${screenSize.mobile}) {
    /**keep page from jumping on click */
    height: 170px; /** fix this when content is complete */

    /**fix sections in grid design */
    &.skills-section {
      grid-area: skills-section;
    }

    &.projects-section {
      grid-area: projects-section;
    }

    &.about-section {
      grid-area: about-section;
    }
  }
`;

const StyledContent = styled.div`
  margin: 0px;
`;

const StyledContentLine = styled.p`
  margin: 0px;
  font-size: 18px;
  line-height: 1.5;
`;

export { StyledSection, StyledContent, StyledContentLine };
