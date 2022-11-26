import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import {store} from '../src/app/store'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const queryClient = new QueryClient();
export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Provider store={store}>
      <Story />
    </Provider>
    </BrowserRouter>
    </QueryClientProvider>
  ),
]