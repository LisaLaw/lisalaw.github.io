import styled from 'styled-components';
import { screenSize, colors } from '../constants/constants';

const StyledNavbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${colors.grayColor.dark};
    width: 100%;

    & a {
        text-decoration: none;
        color: ${colors.grayColor.dark};
        padding: 2px;
    }
`;

const StyledLogoSection = styled.a`
    display: flex;
    line-height: 1.5;
    padding: 3px 2px 0 2px;
    margin: 0 10px 0 15px;
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

const StyledLinkSection = styled.ul`
    display: none;
    margin-right: 15px;
    align-items: center;

    @media(min-width: ${screenSize.mobile}) {
        display: flex;
        flex-direction: row;
        align-items: space-around;
        align-self: flex-end;
    }
`;

const NavbarListItem = styled.li`
    list-style: none;
    padding: 0 7px;

    :hover {
        border-bottom: 1px solid ${colors.grayColor.medium};
        padding-bottom: 2px;
        border-radius: 1px;
    }

    &:last-child:hover {
        border-bottom: none;
        padding-bottom: none;
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

export { StyledNavbar, StyledLogoSection, StyledLinkSection, NavbarListItem, StyledNavbarButton };
