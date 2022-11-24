import React from "react";
import { useNavigate } from "react-router-dom";
import { ArtistHeaderContainer, ArtistLogoContainer, BackToHomeButton } from "./ArtistHeader.styled";

const ArtistHeader = ({artist}) => {
  const navigate = useNavigate()
  return (
    <ArtistHeaderContainer>
      <img src={artist?.data?.image[2]["#text"]} alt="artistHeaderLogo" />
      <ArtistLogoContainer>
      <h2>{artist?.data?.name}</h2>
      <BackToHomeButton onClick={() => navigate(-1)}>Back to Artists</BackToHomeButton>
      </ArtistLogoContainer>
    </ArtistHeaderContainer>
  );
};

export default ArtistHeader;
