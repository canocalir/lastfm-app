import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTheme } from "../../features/themeSlice";
import {
  ArtistHeaderContainer,
  ArtistHeaderImage,
  ArtistLogoContainer,
  BackToHomeButton,
} from "./ArtistHeader.styled";

const ArtistHeader = ({ artist }) => {
  const { darkMode } = useSelector(selectTheme);
  const navigate = useNavigate();
  return (
    <ArtistHeaderContainer
      border={!darkMode ? "2px solid #fff" : "2px solid grey"}
    >
      <ArtistHeaderImage src={artist?.data?.image[2]["#text"]} alt="artistHeaderLogo" />
      <ArtistLogoContainer>
        <h2>{artist?.data?.name}</h2>
        <BackToHomeButton onClick={() => navigate(-1)}>
          Back to Artists
        </BackToHomeButton>
      </ArtistLogoContainer>
    </ArtistHeaderContainer>
  );
};

export default ArtistHeader;
