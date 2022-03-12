import styled from "styled-components";
import { colors } from "../../../constants/constants";
import { screenSize } from "../../../constants/constants";
// import logo from "../../constants/logos/logo_big.svg";

const StyledArrowCard = styled.div`
  border-radius: 4px;
  padding: 15px;
  background-color: white;
  font-size: 18px;
  box-shadow: 1.5px 3px 3px ${colors.shadows.sectionShadow.unfocused};
  display: flex;
  flex-direction: column;
  margin-top: 4px;

  :hover {
    box-shadow: 2.5px 5px 5px ${colors.shadows.sectionShadow.focused};
    border: 1px solid ${colors.grayColor.extraLight};
  }

  /* keep page from jumping on hover*/
  border: 1px solid transparent;

  @media (min-width: ${screenSize.mobile}) {
    /**keep page from jumping on click */
    height: ${(props) => props.visible === false && `22px`};
    width: ${(props) => props.visible === false && `20px`};
    width: ${(props) => props.priority && !props.visible && `100px`};
    cursor: ${(props) => props.visible === false && `pointer`};

    /**fix sections in grid design */
    &.skills-section {
      grid-area: skills-section;
    }

    &.backend-section {
      grid-area: backend-section;
    }

    &.frontend-section {
      grid-area: frontend-section;
    }

    &.about-section {
      grid-area: about-section;
    }

    &.presentations-section {
      grid-area: presentations-section;
    }
  }
`;

const TopLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
`;

const Title = styled.div`
  width: 80%;
  @media (min-width: ${screenSize.mobile}) {
    display: ${(props) => (props.priority || props.visible ? `flex` : `none`)};
    text-decoration: ${(props) => props.visible && `underline`};
  }
`;

export { StyledArrowCard, TopLine, Title };
