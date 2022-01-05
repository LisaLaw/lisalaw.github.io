import styled from "styled-components";
import { screenSize, colors } from "../../../constants/constants";

const StyledSection = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border-top: 0.1px solid ${colors.grayColor.extraLight};
  border-left: 0.1px solid ${colors.grayColor.extraLight};
  padding: 4px;
  background-color: white;
  box-shadow: 1.5px 3px 3px ${colors.shadows.sectionShadow.unfocused};
  margin-top: 15px;

  @media (min-width: ${screenSize.mobile}) {
    margin-top: 0px;
    flex-grow: 1;
    width: 35%;

    &:nth-child(1) {
      align-self: flex-start;
      margin-right: 25%;
      margin-top: 2%;
    }

    &:nth-child(2) {
      align-self: flex-end;
      margin-left: 25%;
      align-items: flex-end;
    }

    &:nth-child(3) {
      align-self: center;
      margin-top: 3%;
    }

    :hover {
      cursor: pointer;
      transition: 0.2s all ease-in-out;
      box-shadow: 2.5px 5px 5px ${colors.shadows.sectionShadow.focused};
    }
  }
`;

export { StyledSection };
