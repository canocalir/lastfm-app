import { toggleTheme, selectTheme } from "../../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  DarkModeLogo,
  GithubLogo,
  LightModeLogo,
  LinkedinLogo,
  NavbarContainer,
  NavbarHeading,
  NavbarSocialIcons,
  NavLinkElement,
} from "./Navbar.styled";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectTheme);

  return (
    <NavbarContainer bg={darkMode ? "#121620" : "#f1f1f1"}>
      <a style={{ textDecoration: "none" }} href="/">
        <NavbarHeading>LastFM APP</NavbarHeading>
      </a>
      <NavbarSocialIcons>
        <NavLinkElement href="https://github.com/canocalir">
          <GithubLogo color={!darkMode ? "#121620" : "#f1f1f1"} />
        </NavLinkElement>
        <NavLinkElement href="https://linkedin.com/in/canberkocalir">
          <LinkedinLogo color={!darkMode ? "#121620" : "#f1f1f1"} />
        </NavLinkElement>
        {!darkMode ? (
          <LightModeLogo
            color={!darkMode ? "#121620" : "#f1f1f1"}
            onClick={() => dispatch(toggleTheme())}
          />
        ) : (
          <DarkModeLogo
            color={!darkMode ? "#121620" : "#f1f1f1"}
            onClick={() => dispatch(toggleTheme())}
          />
        )}
      </NavbarSocialIcons>
    </NavbarContainer>
  );
};

export default Navbar;
