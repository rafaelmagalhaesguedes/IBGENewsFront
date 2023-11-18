import { createContext } from 'react';
import { NewsType } from '../types/types';

type NewsContextType = {
  dataNews: NewsType[];
  filteredNews: NewsType[];
  filterByString: (searchString: string) => void;
  filterByNoticia: () => void;
  filterByRelease: () => void;
  filterByRecent: () => void;
};

export const NewsContext = createContext({} as NewsContextType);
