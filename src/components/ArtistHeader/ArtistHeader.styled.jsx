import styled from "styled-components";
import variables from "../../styles/variables";

export const ArtistHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 2rem 0 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  gap: 3rem;
  border: ${(props) => props.border};
  border-radius: ${variables.commonBorderRadius};
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const ArtistLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 12rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ArtistHeaderImage = styled.img`
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
`;

export const BackToHomeButton = styled.button`
  height: fit-content;
  border-radius: 0.3rem;
  padding: 0.5rem;
  font-weight: ${variables.boldFontWeight};
  color: #fff;
  background-color: #ba0000;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
    background-color: #ffffff;
    color: #000;
    cursor: pointer;
    transition: ease-in 200ms;
  }
`;
