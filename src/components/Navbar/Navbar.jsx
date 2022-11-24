import { GithubLogo, LinkedinLogo, NavbarContainer, NavbarHeading, NavbarSocialIcons, NavLinkElement } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarHeading>LastFM APP</NavbarHeading>
      <NavbarSocialIcons>
        <NavLinkElement href="https://github.com/canocalir"><GithubLogo/></NavLinkElement>
        <NavLinkElement href="https://linkedin.com/in/canberkocalir"><LinkedinLogo/></NavLinkElement>
      </NavbarSocialIcons>
    </NavbarContainer>
  );
};

export default Navbar;
