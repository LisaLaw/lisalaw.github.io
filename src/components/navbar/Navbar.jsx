import { navbarItems } from "../../constants/navbarItems";
import {
  StyledNavbar,
  StyledLogo,
  NavbarItems,
  NavbarItem,
} from "./styles";

export const Navbar = () => {
  const downloadCV = () => {
    window.location.href = "lisalaw.github.io/src/constants/CV.pdf";
  }; /*check when version 2 is running*/

  return (
    <StyledNavbar>
      <StyledLogo href="#home">Lisa Law</StyledLogo>
      {navbarItems.length && (
        <NavbarItems>
          {navbarItems.map((item, index) => {
            return (
              <NavbarItem key={index}>
                <a href={item.url}>{item.label}</a>
              </NavbarItem>
            );
          })}
        </NavbarItems>
      )}
    </StyledNavbar>
  );
};
