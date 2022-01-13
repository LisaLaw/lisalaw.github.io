import styled from "styled-components";
import { screenSize, colors } from "../../../constants/constants";

const StyledSection = styled.div`
  display: flex;
  margin-top: 10px;
  border-radius: 4px;
  padding: 15px;
  background-color: white;
  font-size: 18px;
  box-shadow: 1.5px 3px 3px ${colors.shadows.sectionShadow.unfocused};
  min-height: 180px;

  @media (min-width: ${screenSize.mobile}) {
    height: ${({ full }) => full && `100%`};
    width: ${({ full }) => full && `100%`};
    z-index: ${({ full }) => (full ? 5 : 0)};

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
    cursor: pointer;
    box-shadow: 2.5px 5px 5px ${colors.shadows.sectionShadow.focused};
    border: 1px solid ${colors.grayColor.extraLight};
  }
`;

export { StyledSection };
