import { Provider } from 'react-redux';
import AppRouter from '../../router/AppRouter';
import { MainContainer } from './App.styled';
import {store} from '../../app/store'
import ScrollButton from '../../components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Provider store={store}>
    <MainContainer>
      <AppRouter/>
      <ScrollButton/>
    </MainContainer>
    </Provider>
  );
}

export default App;
