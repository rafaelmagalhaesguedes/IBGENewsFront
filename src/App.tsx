import { useRef } from 'react';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
import { AppContainer, Main } from './styles/AppStyles';
import LatestNews from './components/LatestNews/LatestNews';
import FilterNews from './components/FilterNews/FilterNews';

function App() {
  const filterNewsRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppContainer>
      <Header filterNewsRef={ filterNewsRef } />
      <Main>
        <LatestNews />
        <FilterNews ref={ filterNewsRef } />
        <NewsList />
      </Main>
    </AppContainer>
  );
}

export default App;
