import logo from "../../constants/logos/logo_small.svg"; // check imports, different file? -> CW project
import { navbarItems } from "../../constants/navbarItems";
import {
  StyledNavbar,
  StyledLogoSection,
  StyledLinkSection,
  NavbarListItem,
  StyledNavbarButton,
} from "./styles";

export const Navbar = () => {
  const downloadCV = () => {
    window.location.href = "lisalaw.github.io/src/constants/CV.pdf";
  }; /*check when version 2 is running*/

  const toggleMenu = () => {};

  return (
    <StyledNavbar>
      <StyledLogoSection href="#home">
        Lisa Law
        <img src={logo} alt="test" />
      </StyledLogoSection>

      {navbarItems.length && (
        <StyledLinkSection onClick={{ toggleMenu }}>
          {navbarItems.map((item) => {
            return (
              <NavbarListItem>
                <a href={item.url}>{item.label}</a>
              </NavbarListItem>
            );
          })}

          <NavbarListItem>
            <StyledNavbarButton onClick={downloadCV}>
              Download CV
            </StyledNavbarButton>
          </NavbarListItem>
        </StyledLinkSection>
      )}
    </StyledNavbar>
  );
};
