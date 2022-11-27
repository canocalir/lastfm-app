//Redux
import { useSelector } from "react-redux";

//React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

//Redux
import { selectTheme } from "../features/themeSlice";
import ArtistDetail from "../pages/ArtistDetail";

//Styled Components
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/theme";

const AppRouter = () => {
  const { darkMode } = useSelector(selectTheme);
  const conditionalTheme = !darkMode ? darkTheme : lightTheme
  
  return (
    <ThemeProvider theme={conditionalTheme}>
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
