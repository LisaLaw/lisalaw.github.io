import styled from "styled-components";
import { screenSize, colors } from "../../constants/constants";

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3px 15px;
  justify-content: space-between;
  color: ${colors.grayColor.dark};

  & a {
    text-decoration: none;
    color: ${colors.grayColor.dark};
    padding: 2px;
  }
`;

const StyledLogoWrapper = styled.a`
  display: flex;
  line-height: 1.5;
  border: none;
  font-variant: small-caps;
  font-size: 20px;

  & img {
    align-self: center;
    padding-bottom: 1px;
  }

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

const StyledNavLinks = styled.ul`
  align-items: center;
  height: 20px;
  width: 100%;
  margin-top: 100px;
  flex-direction: column;
  justify-content: stretch;

  @media (min-width: ${screenSize.mobile}) {
    display: flex;
    flex-direction: row;
    align-items: space-around;
    align-self: flex-end;
    margin-right: 15px;
    background: none;
    height: unset;
    width: unset;
  }
`;

const ListItem = styled.li`
  list-style: none;
  display: ${({ display }) => (display ? `flex` : `none`)};
  margin-bottom: 1px solid ${colors.grayColor.medium};
  height: 20px;

  @media (min-width: ${screenSize.mobile}) {
    display: flex;
    padding: 0 7px;
    height: unset;

    :hover {
      border-bottom: 1px solid ${colors.grayColor.medium};
      padding-bottom: 2px;
      border-radius: 1px;
    }

    &:last-child:hover {
      border-bottom: none;
      padding-bottom: none;
    }
  }
`;

const StyledNavbarButton = styled.button`
    border-radius: 6px;
    border: 1px solid ${colors.grayColor.medium};
    background: transparent;
    color: {colors.grayColor.dark};
    padding: 7px 10px;
    font: inherit;
    cursor: pointer;

    :hover {
        border: 1px solid ${colors.grayColor.dark};
    }
`;

export {
  StyledNavbar,
  StyledLogoWrapper,
  StyledNavLinks,
  Icon,
  ListItem,
  StyledNavbarButton,
};
