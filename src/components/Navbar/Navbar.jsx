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

import PropTypes from "prop-types";

const Navbar = ({ color, iconcolor }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectTheme);

  const conditionalColorNavbar = darkMode ? "#121620" : "#f1f1f1";
  const conditionalColorIcon = !darkMode ? "#121620" : "#f1f1f1";

  return (
    <NavbarContainer
      data-testid="navbar"
      style={{ backgroundColor: color }}
      color={conditionalColorNavbar}
    >
      <a style={{ textDecoration: "none" }} href="/">
        <NavbarHeading>LastFM APP</NavbarHeading>
      </a>
      <NavbarSocialIcons>
        <NavLinkElement href="https://github.com/canocalir">
          <GithubLogo
            style={{ color: iconcolor }}
            color={conditionalColorIcon}
          />
        </NavLinkElement>
        <NavLinkElement href="https://linkedin.com/in/canberkocalir">
          <LinkedinLogo
            style={{ color: iconcolor }}
            color={conditionalColorIcon}
          />
        </NavLinkElement>
        {!darkMode ? (
          <LightModeLogo
            style={{ color: iconcolor }}
            data-testid="light"
            color={conditionalColorIcon}
            onClick={() => dispatch(toggleTheme())}
          />
        ) : (
          <DarkModeLogo
            style={{ color: iconcolor }}
            data-testid="night"
            color={conditionalColorIcon}
            onClick={() => dispatch(toggleTheme())}
          />
        )}
      </NavbarSocialIcons>
    </NavbarContainer>
  );
};

//Prop Types

Navbar.propTypes = {
  color: PropTypes.string,
  iconcolor: PropTypes.string
};

Navbar.defaultProps = {
  color: "#f1f1f1 || #121620",
  iconcolor: "#f1f1f1 || #121620"
};

export default Navbar;
