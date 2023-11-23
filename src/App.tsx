import { useContext, useRef } from 'react';
import { NewsContext } from './context/NewsContext';
import Header from './components/Header/Header';
import LatestNews from './components/LatestNews/LatestNews';
import FilterNews from './components/FilterNews/FilterNews';
import CardNews from './components/CardNews/CardNews';
import ButtonToTop from './components/ButtonToTop/ButtonToTop';
import Loading from './components/Loading/Loading';
import { AppContainer, Main } from './styles/AppStyles';

function App() {
  const filterNewsRef = useRef<HTMLDivElement | null>(null);
  const { isLoading } = useContext(NewsContext);

  return (
    <AppContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header filterNewsRef={ filterNewsRef } />
          <Main>
            <LatestNews />
            <FilterNews ref={ filterNewsRef } />
            <CardNews />
            <ButtonToTop />
          </Main>
        </>
      )}
    </AppContainer>
  );
}

export default App;
