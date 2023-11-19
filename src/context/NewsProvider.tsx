import { NewsContext } from './NewsContext';
import useFetch from '../hooks/useFetch';
import useFilterNews from '../hooks/useFilterNews';

type NewsProviderProps = {
  children: React.ReactNode;
};

function NewsProvider({ children } : NewsProviderProps) {
  // Dados da API
  const { dataNews } = useFetch();

  // Filtros
  const {
    filteredNews,
    filterByString,
    filterByNoticia,
    filterByRelease,
    filterByRecent,
    filterByFavorites,
  } = useFilterNews(dataNews);

  // Contexto
  const value = {
    dataNews,
    filteredNews,
    filterByString,
    filterByNoticia,
    filterByRelease,
    filterByRecent,
    filterByFavorites,
  };

  // Provider
  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
