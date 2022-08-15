import { useState } from "react";
import { navbarItems } from "../../constants/navbarItems";
import burger from "../../constants/logos/burger_menu.svg";
import cross from "../../constants/logos/cross.svg";
import {
  StyledNavbar,
  StyledLogo,
  NavbarItems,
  Icon,
  NavbarItem,
  NavbarButton,
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
      <StyledLogo href="#home">Lisa Law</StyledLogo>
      <Icon src={menuIcon} onClick={() => toggleMenu()} /> {/* for mobile **/}
      {navbarItems.length && (
        <NavbarItems visible={visible}>
          {navbarItems.map((item, index) => {
            return (
              <NavbarItem visible={visible} key={index}>
                <a href={item.url}>{item.label}</a>
              </NavbarItem>
            );
          })}
        </NavbarItems>
      )}
    </StyledNavbar>
  );
};
