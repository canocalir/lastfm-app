import React from "react";
import { useNavigate } from "react-router-dom";
import { ArtistHeaderContainer, ArtistLogoContainer } from "./ArtistHeader.styled";

const ArtistHeader = ({artist}) => {
  const navigate = useNavigate()
  return (
    <ArtistHeaderContainer>
      <ArtistLogoContainer>
      <img src={artist?.data?.image[2]["#text"]} alt="" />
      <h2>{artist?.data?.name}</h2>
      </ArtistLogoContainer>
      <button onClick={() => navigate(-1)}>Back to Home</button>
    </ArtistHeaderContainer>
  );
};

export default ArtistHeader;
