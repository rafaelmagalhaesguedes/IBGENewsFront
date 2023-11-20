import { createContext } from 'react';
import { NewsType } from '../types/types';

type NewsContextType = {
  dataNews: NewsType[];
  isLoading: boolean;
  filteredNews: NewsType[];
  filterByString: (searchString: string) => void;
  filterByNoticia: () => void;
  filterByRelease: () => void;
  filterByRecent: () => void;
  filterByFavorites: () => void;
  filterByOldest: (ascending?: boolean) => void;
};

export const NewsContext = createContext({} as NewsContextType);
