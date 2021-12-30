import { useState } from "react";
import logo from "../../constants/logos/logo_small.svg"; // check imports, different file? -> CW project
import { navbarItems } from "../../constants/navbarItems";
import burger from "../../constants/logos/burger_menu.svg";
import cross from "../../constants/logos/cross.svg";
import {
  StyledNavbar,
  StyledLogoWrapper,
  StyledNavLinks,
  Icon,
  ListItem,
  StyledNavbarButton,
} from "./styles";

export const Navbar = () => {
  const downloadCV = () => {
    window.location.href = "lisalaw.github.io/src/constants/CV.pdf";
  }; /*check when version 2 is running*/

  const [displayed, setDisplayed] = useState(false);
  const toggleMenu = () => {
    setDisplayed((prevState) => !prevState);
  };

  const menuIcon = displayed ? cross : burger;

  return (
    <>
      <StyledNavbar>
        <StyledLogoWrapper href="#home">
          Lisa Law
          <img src={logo} alt="test" />
        </StyledLogoWrapper>
        <Icon src={menuIcon} onClick={() => toggleMenu()} />
      </StyledNavbar>

      {navbarItems.length && (
        <StyledNavLinks>
          {navbarItems.map((item) => {
            return (
              <ListItem display={displayed}>
                <a href={item.url}>{item.label}</a>
              </ListItem>
            );
          })}

          <ListItem>
            <StyledNavbarButton onClick={downloadCV}>
              Download CV
            </StyledNavbarButton>
          </ListItem>
        </StyledNavLinks>
      )}
    </>
  );
};
