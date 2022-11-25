import React from "react";
import Heading from "../components/Heading/Heading";
import Navbar from "../components/Navbar/Navbar";
import TopArtistList from "../containers/TopArtistList/TopArtistList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading title={"Last FM's Top Artists"} />
      <TopArtistList />
    </>
  );
};

export default Home;
