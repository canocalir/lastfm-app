import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import styled from "styled-components";
import variables from "../../styles/variables";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bg};
  color: #fff;
  flex-wrap: wrap;
  height: 5rem;
  width: 100%;
`;
export const NavbarHeading = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: #d00000;
  margin-left: 2rem;
`;

export const NavbarSocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 7rem;
  margin-right: 2rem;
`;

export const GithubLogo = styled(DiGithubBadge)`
  font-size: 2.2rem;
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    color: #bdbdbd;
    transition: ease-in 300ms;
  }
`;

export const LinkedinLogo = styled(FaLinkedin)`
  font-size: ${variables.iconFontSize};
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    color: #bdbdbd;
    transition: ease-in 300ms;
  }
`;

export const DarkModeLogo = styled(MdDarkMode)`
  font-size: ${variables.iconFontSize};
  margin-left: ${variables.iconMarginLeft};
  padding-left: ${variables.iconPaddingLeft};
  border-left: ${variables.iconBorderLeft};
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    color: #bdbdbd;
    transition: ease-in 300ms;
  }
`;

export const LightModeLogo = styled(MdOutlineLightMode)`
  font-size: ${variables.iconFontSize};
  margin-left: ${variables.iconMarginLeft};
  padding-left: ${variables.iconPaddingLeft};
  border-left: ${variables.iconBorderLeft};
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    color: #bdbdbd;
    transition: ease-in 300ms;
  }
`;

export const NavLinkElement = styled.a`
  text-decoration: none;
  color: #ffffff;
`;
