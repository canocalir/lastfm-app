import { Provider } from 'react-redux';
import AppRouter from '../../router/AppRouter';
import { MainContainer } from './App.styled';
import {store} from '../../app/store'

function App() {
  return (
    <Provider store={store}>
    <MainContainer>
      <AppRouter/>
    </MainContainer>
    </Provider>
  );
}

export default App;
