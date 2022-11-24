import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0b090aee;
    color: #fff;
    flex-wrap: wrap;
    height: 5rem;
    width: 100%;
`
export const NavbarHeading = styled.h1`
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    color: #d00000;
    margin-left: 2rem;
`

export const NavbarSocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 5rem;
    margin-right: 2rem;
`

export const GithubLogo = styled(DiGithubBadge)`
    font-size: 2.2rem;
    &:hover{
        cursor: pointer;
        color: #bdbdbd;
        transition: ease-in 300ms;
    }
`

export const LinkedinLogo = styled(FaLinkedin)`
    font-size: 1.7rem;
    &:hover{
        cursor: pointer;
        color: #bdbdbd;
        transition: ease-in 300ms;
    }
`

export const NavLinkElement = styled.a`
    text-decoration: none;
    color: #ffffff;
`