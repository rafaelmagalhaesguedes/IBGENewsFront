import { NewsContext } from './NewsContext';
import useFetchApi from '../hooks/useFetchApi';
import useFilterNews from '../hooks/useFilterNews';

type NewsProviderProps = {
  children: React.ReactNode;
};

function NewsProvider({ children } : NewsProviderProps) {
  const { dataNews } = useFetchApi();
  const {
    filteredNews,
    filterByString,
    filterByNoticia,
    filterByRelease,
    filterByRecent,
  } = useFilterNews(dataNews);

  const value = {
    dataNews,
    filteredNews,
    filterByString,
    filterByNoticia,
    filterByRelease,
    filterByRecent,
  };

  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
