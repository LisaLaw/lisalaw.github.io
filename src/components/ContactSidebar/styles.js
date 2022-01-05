import styled from "styled-components";
import { screenSize, colors } from "../../constants/constants";
import logo from "../../constants/logos/logo_left.svg";

const StyledContactSidebar = styled.div`
  display: flex;
  display: row;
  align-items: center;
  align-self: center;
  order: 2;

  @media (min-width: ${screenSize.mobile}) {
    flex-direction: column;
    align-self: flex-start;
    border: 0.2px solid ${colors.grayColor.light};
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
    order: 1;
    box-shadow: 0.5px 1px 1px ${colors.shadows.sidebarShadow.retracted};

    :hover {
      background: white;
      height: unset;
      width: unset;
      padding: unset;
      border: 0.2px solid ${colors.grayColor.light};
      box-shadow: 2px 4px 5px ${colors.shadows.sidebarShadow.extended};
    }

    :hover a {
      transition: 0.3s all ease-in-out;
      display: flex;
    }
  }
`;

const StyledContactLink = styled.a`
  @media (min-width: ${screenSize.mobile}) {
    display: none;
  }

  a[href^="tel"]:link,
  a[href^="tel"]:visited,
  a[href^="tel"]:hover {
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
