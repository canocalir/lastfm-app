import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArtistHeader from "../components/ArtistHeader/ArtistHeader";
import Navbar from "../components/Navbar/Navbar";
import ArtistDetailsList from "../containers/ArtistDetailsList/ArtistDetailsList";

const ArtistDetail = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <ArtistHeader artist={location.state} />
      <ArtistDetailsList />
    </>
  );
};

export default ArtistDetail;
