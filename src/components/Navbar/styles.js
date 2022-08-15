import styled from "styled-components";
import { screenSize, colors } from "../../constants/constants";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  color: ${colors.grayColor.dark};
  border-bottom: 1px solid ${colors.grayColor.extraLight};
  width: 90%;
  margin: 0 3px;

  & a {
    text-decoration: none;
    color: ${colors.grayColor.dark};
    padding: 2px;
  }

  @media (min-width: ${screenSize.mobile}) {
    margin: 3px 22px 0px 22px;
  }
`;

const StyledLogo = styled.a`
  display: flex;
  line-height: 1.5;
  font-variant: small-caps;
  font-size: 20px;
`;

const NavbarItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: stretch;
  padding: 0px;
  margin: 5px 0 0 0;

  @media (min-width: ${screenSize.mobile}) {
    align-items: space-around;
    align-self: flex-end;
    background: none;
    margin: 15px 10px 15px 0;
  }
`;

const NavbarItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 5px 10px;

  @media (min-width: ${screenSize.mobile}) {
    padding: 0 7px;
  }
`;

export { StyledNavbar, StyledLogo, NavbarItems, NavbarItem };
