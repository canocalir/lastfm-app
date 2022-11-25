import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFetchTopArtists } from "../../hooks/useFetchTopArtists";
import { ArtistDetailsButton } from "./ArtistCard.styled";

const Button = ({ onClick, children }) => (
  <ArtistDetailsButton onClick={onClick}>{children}</ArtistDetailsButton>
);

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click For Artist Details</Button>);
  fireEvent.click(screen.getByText(/Click For Artist Details/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("Top Artists Data Fetched", async () => {
  const { result } = renderHook(() => useFetchTopArtists(), {
    wrapper: createWrapper(),
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.data).toBeDefined();
});
