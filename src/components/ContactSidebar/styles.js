import styled from "styled-components";
import { screenSize, colors } from "../../constants/constants";
import logo from "../../constants/logos/logo_left.svg";

const StyledContactSidebar = styled.div`
  display: none;

  @media (min-width: ${screenSize.mobile}) {
    display: flex;
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
  display: none;

  a[href^="tel"]:link,
  a[href^="tel"]:visited,
  a[href^="tel"]:hover {
    display: none;
  }
`;

const Icon = styled.img`
  margin: 12px 10px;
  width: 32px;
`;

export { StyledContactSidebar, StyledContactLink, Icon };
