import logo from '../logos/logo_small.svg'; // check imports, different file? -> CW project
import { StyledNavbar, StyledLogoSection, StyledLinkSection, NavbarListItem, StyledNavbarButton } from './styles';

export const Navbar = () => {
    return <StyledNavbar>
        <StyledLogoSection>
            <a href="../App.js">Lisa Law</a> {/* Check link connection*/}
            <img src={logo} alt="test" />
        </StyledLogoSection>

        <StyledLinkSection>
            <NavbarListItem>
                <a href="./">About</a>
            </NavbarListItem>
            <NavbarListItem>
                <a href="./">Projects</a>
            </NavbarListItem>
            <NavbarListItem>
                <a href="./">Skills</a>
            </NavbarListItem>
            <NavbarListItem>
                <StyledNavbarButton>Download CV</StyledNavbarButton>
            </NavbarListItem> {/*check how to download files*/}
        </StyledLinkSection>
    </StyledNavbar>
};
