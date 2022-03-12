import { useState } from "react";
import logo from "../../constants/logos/logo_small.svg"; // check imports, different file? -> CW project
import { navbarItems } from "../../constants/navbarItems";
import burger from "../../constants/logos/burger_menu.svg";
import cross from "../../constants/logos/cross.svg";
import {
  StyledNavbar,
  StyledLogoLink,
  StyledNavLinks,
  Icon,
  ListItem,
  StyledNavbarButton,
} from "./styles";

export const Navbar = () => {
  const downloadCV = () => {
    window.location.href = "lisalaw.github.io/src/constants/CV.pdf";
  }; /*check when version 2 is running*/

  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible((prevState) => !prevState);
  };

  const menuIcon = visible ? cross : burger;

  return (
    <StyledNavbar>
      <StyledLogoLink href="#home">
        Lisa Law
        <img src={logo} alt="test" />
      </StyledLogoLink>
      <Icon src={menuIcon} onClick={() => toggleMenu()} />

      {navbarItems.length && (
        <StyledNavLinks visible={visible}>
          {navbarItems.map((item, index) => {
            return item.type === "button" ? (
              <ListItem visible={visible} key={index}>
                <StyledNavbarButton onClick={() => downloadCV()}>
                  {item.label}
                </StyledNavbarButton>
              </ListItem>
            ) : (
              <ListItem visible={visible} key={index}>
                <a href={item.url}>{item.label}</a>
              </ListItem>
            );
          })}
        </StyledNavLinks>
      )}
    </StyledNavbar>
  );
};
