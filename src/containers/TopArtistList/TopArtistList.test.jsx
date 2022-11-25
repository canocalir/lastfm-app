import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

test("renders topartists", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ArtistCard />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByRole("heading")).toHaveTextContent("Artist");
  expect(screen.getByRole("button")).toHaveTextContent(
    "Click For Artist Details"
  );
});
