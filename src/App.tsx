import { useRef } from 'react';
import Header from './components/Header/Header';
import { AppContainer, Main } from './styles/AppStyles';
import LatestNews from './components/LatestNews/LatestNews';
import FilterNews from './components/FilterNews/FilterNews';
import CardNews from './components/CardNews/CardNews';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

function App() {
  const filterNewsRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppContainer>
      <Header filterNewsRef={ filterNewsRef } />
      <Main>
        <LatestNews />
        <FilterNews ref={ filterNewsRef } />
        <CardNews />
        <BackToTopButton />
      </Main>
    </AppContainer>
  );
}

export default App;
