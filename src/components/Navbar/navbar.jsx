import logo from '../logos/logo_small.svg'; // check imports, different file? -> CW project
import { StyledNavbar, StyledLogoSection, StyledLinkSection, NavbarListItem, StyledNavbarButton } from './styles';

export const Navbar = () => {
    const downloadCV = () => {
        window.location.href= "lisalaw.github.io/src/constants/CV.pdf"
    }; /*check when version 2 is running*/

    const toggleMenu = () => {
        
    }

    return <StyledNavbar>
        <StyledLogoSection href="#home">Lisa Law
                <img src={logo} alt="test" />
        </StyledLogoSection>

        <StyledLinkSection onClick={toggleMenu}>
            <NavbarListItem>
                <a href="#about">About</a>
            </NavbarListItem>
            <NavbarListItem>
                <a href="#projects">Projects</a>
            </NavbarListItem>
            <NavbarListItem>
                <a href="#skills">Skills</a>
            </NavbarListItem>
            <NavbarListItem>
                <StyledNavbarButton onClick={downloadCV}>Download CV</StyledNavbarButton>
            </NavbarListItem>
        </StyledLinkSection>
    </StyledNavbar>
};
