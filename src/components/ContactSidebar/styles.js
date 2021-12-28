import styled from "styled-components";
import { screenSize, colors } from "../../constants/constants";
import logo from "../logos/logo_left.svg";

const StyledContactSidebar = styled.div`
  display: flex;
  display: row;
  align-items: center;
  align-self: center;

  @media (min-width: ${screenSize.mobile}) {
    flex-direction: column;
    align-self: flex-start;
    border: 0.2px solid ${colors.grayColor.dark};
    border-left: none;
    padding-left: 2px;
    position: absolute;
    top: 35%;
    border-radius: 0 3px 3px 0;
    background-image: url(${logo});
    background-position: left;
    background-repeat: no-repeat;
    background-size: fit;
    height: 40px;
    width: 20px;

    :hover {
      background: none;
      height: unset;
      width: unset;
      padding: unset;
    }

    :hover a {
      transition: 0.7s all ease-in-out;
      display: flex;
    }
  }
`;

const StyledContactLink = styled.a`
  @media (min-width: ${screenSize.mobile}) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 32px;
  margin: 15px 20px;

  @media (min-width: ${screenSize.mobile}) {
    margin: 12px 10px;
    width: 32px;
  }
`;

const Separator = styled.div`
  border: 0.2px solid ${colors.grayColor.dark};
  height: 32px;
  @media (min-width: ${screenSize.mobile}) {
    display: none;
  }
`;

export { StyledContactSidebar, StyledContactLink, Icon, Separator };
