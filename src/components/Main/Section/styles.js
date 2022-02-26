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

  :hover {
    box-shadow: 2.5px 5px 5px ${colors.shadows.sectionShadow.focused};
    border: 1px solid ${colors.grayColor.extraLight};
  }

  /* keep page from jumping on hover*/
  border: 1px solid transparent;
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

export { StyledSection };
