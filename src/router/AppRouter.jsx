import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { selectTheme } from "../features/themeSlice";
import ArtistDetail from "../pages/ArtistDetail";
import Home from "../pages/Home";
import { darkTheme, GlobalStyles, lightTheme } from "../theme";

const AppRouter = () => {
  const {darkMode} = useSelector(selectTheme)
  return (
    <ThemeProvider theme={!darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<ArtistDetail />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;
