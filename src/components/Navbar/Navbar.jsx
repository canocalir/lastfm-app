//Redux
import { toggleTheme, selectTheme } from "../../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

//Styled Components
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

import PropTypes from 'prop-types'

const Navbar = () => {

  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectTheme);

  return (
    <NavbarContainer data-testid="navbar" bg={darkMode ? "#121620" : "#f1f1f1"}>
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
            data-testid="light"
            color={!darkMode ? "#121620" : "#f1f1f1"}
            onClick={() => dispatch(toggleTheme())}
          />
        ) : (
          <DarkModeLogo
            data-testid="night"
            color={!darkMode ? "#121620" : "#f1f1f1"}
            onClick={() => dispatch(toggleTheme())}
          />
        )}
      </NavbarSocialIcons>
    </NavbarContainer>
  );
};

//Prop Types

Navbar.propTypes = {
  darkMode: PropTypes.bool
}

export default Navbar;
