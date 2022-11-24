import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtistDetail from "../pages/ArtistDetail";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<ArtistDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
