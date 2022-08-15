import { StyledNavbar, StyledLogo, NavbarItems, NavbarItem } from "./styles";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo href="#home">Lisa Law</StyledLogo>
      <NavbarItems>
        <NavbarItem>
          <a
            href="/CV_Lisa_Law.pdf"
            download="LisaLawCV.pdf"
            target="_blank"
          >
            CV
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="https://github.com/LisaLaw" target="_blank">
            GitHub
          </a>
        </NavbarItem>
      </NavbarItems>
    </StyledNavbar>
  );
};
