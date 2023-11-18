import { NewsContext } from './NewsContext';
import useFetchApi from '../hooks/useFetchApi';

type NewsProviderProps = {
  children: React.ReactNode;
};

function NewsProvider({ children } : NewsProviderProps) {
  const news = useFetchApi();

  return (
    <NewsContext.Provider value={ news }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
