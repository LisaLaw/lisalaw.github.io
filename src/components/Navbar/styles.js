import styled from "styled-components";
import { screenSize, colors } from "../../constants/constants";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.grayColor.dark};
  border-bottom: 1px solid ${colors.grayColor.extraLight};
  flex-wrap: wrap;
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
  padding-right: 20px !important;

  @media (min-width: ${screenSize.mobile}) {
    border-right: 1.5px solid ${colors.grayColor.dark};
  }
`;

const Icon = styled.img`
  height: 20px;
  width: 23px;

  @media (min-width: ${screenSize.mobile}) {
    display: none;
  }
`;

const NavbarItems = styled.ul`
  align-items: center;
  flex-direction: column;
  justify-content: stretch;
  flex-grow: ${({ visible }) => (visible ? 2 : 0)};
  width: 100%;
  height: ${({ visible }) => !visible && `0px`};
  padding: 0px;
  margin: 5px 0 0 0;

  @media (min-width: ${screenSize.mobile}) {
    display: flex;
    flex-direction: row;
    align-items: space-around;
    align-self: flex-end;
    background: none;
    height: unset;
    width: unset;
    flex-grow: 0;
    margin: 15px 10px 15px 0;
  }
`;

const NavbarItem = styled.li`
  list-style: none;
  display: ${({ visible }) => (visible ? `flex` : `none`)};
  margin-bottom: 1px solid ${colors.grayColor.medium};
  height: 30px;
  align-items: center;
  text-transform: uppercase;
  padding: 5px 10px;

  &:nth-child(odd) {
    background-color: ${colors.grayColor.light};
  }

  &:nth-child(even) {
    background-color: ${colors.grayColor.extraLight};
  }

  @media (min-width: ${screenSize.mobile}) {
    display: flex;
    padding: 0 7px;
    height: unset;
    text-transform: none;

    &:nth-child(odd) {
      background-color: transparent;
    }

    &:nth-child(even) {
      background-color: transparent;
    }

    :hover {
      padding-bottom: 2px;
    }
  }
`;

const NavbarButton = styled.button`
  background-color: transparent;
  border: none;
  text-transform: inherit;
  font: inherit;

  @media (min-width: ${screenSize.mobile}) {
    border-radius: 6px;
    border: 1px solid ${colors.grayColor.extraLight};
    box-shadow: 1px 3px 3px ${colors.shadows.sidebarShadow.retracted};
    color: {colors.grayColor.dark};
    padding: 7px 10px;
    cursor: pointer;

    :hover {
      border: 1px solid ${colors.grayColor.light};
      box-shadow: 1px 3px 3px ${colors.shadows.sidebarShadow.extended};
      /**stop navbar from jumping on button hover */
      padding-top: 5px;
    }
  }
`;

export {
  StyledNavbar,
  StyledLogo,
  NavbarItems,
  Icon,
  NavbarItem,
  NavbarButton,
};
