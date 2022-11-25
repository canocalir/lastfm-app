import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../app/store";
import { darkTheme } from "../../styles/theme";
import Navbar from "./Navbar";

test("Change theme", async () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
      </ThemeProvider>
    </Provider>
  );

  const nightModeButton = screen.getByTestId("night");
  fireEvent.click(nightModeButton);
  expect(screen.getByTestId("navbar")).toHaveStyle("background-color: #f1f1f1");

  const lightModeButton = screen.getByTestId("light");
  fireEvent.click(lightModeButton);
  expect(screen.getByTestId("navbar")).toHaveStyle("background-color: #121620");
});
