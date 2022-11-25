import AppRouter from "../../router/AppRouter";
import { MainContainer } from "./App.styled";
import ScrollButton from "../../components/ScrollToTop/ScrollToTop";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer>
        <AppRouter />
        <ScrollButton />
      </MainContainer>
    </QueryClientProvider>
  );
}

export default App;
