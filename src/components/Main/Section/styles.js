import styled from "styled-components";
import { screenSize, colors } from "../../../constants/constants";

const SectionWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  @media (min-width: ${screenSize.mobile}) {
    height: ${({ full }) => full && `100%`};
    z-index: ${({ full }) => (full ? 5 : 0)};

    &:nth-child(1) {
      margin-left: 3%;
    }
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
    &:nth-child(3) {
      margin-left: 18%;
    }
  }
`;

const StyledSection = styled.div`
  border-radius: 4px;
  padding: 15px;
  background-color: white;
  font-size: 18px;
  box-shadow: 1.5px 3px 3px ${colors.shadows.sectionShadow.unfocused};
  min-height: 180px;
  width: 100%;
  @media (min-width: ${screenSize.mobile}) {
    width: 30%;
  }

  :hover {
    cursor: pointer;
    box-shadow: 2.5px 5px 5px ${colors.shadows.sectionShadow.focused};
    border-right: none;
    border-left: 1px solid ${colors.grayColor.extraLight};
    border-top: 1px solid ${colors.grayColor.extraLight};
  }
`;

const Connector = styled.div`
  display: none;

  @media (min-width: ${screenSize.mobile}) {
    display: flex;
    border-top: 2px dashed ${colors.themeColor};
    border-right: 2px dashed ${colors.themeColor};
    margin-top: 12%;
    margin-bottom: 5%;
    width: 10%;
  }
`;

export { SectionWrapper, StyledSection, Connector };
