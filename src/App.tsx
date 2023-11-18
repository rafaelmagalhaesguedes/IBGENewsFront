import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
import { AppContainer, Main } from './styles/AppStyles';
import LatestNews from './components/LatestNews/LatestNews';
import FilterNews from './components/FilterNews/FilterNews';

function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <LatestNews />
        <FilterNews />
        <NewsList />
      </Main>
    </AppContainer>
  );
}

export default App;
