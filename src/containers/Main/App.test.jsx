import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../../app/store";

test("renders landing page", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByRole("navigation")).toHaveTextContent("LastFM APP");
  expect(screen.getByRole("navigation")).toBeVisible();
  expect(screen.getByTestId("mainheading")).toHaveTextContent(
    "Last FM's Top Artists"
  );
});
