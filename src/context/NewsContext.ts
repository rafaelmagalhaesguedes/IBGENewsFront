import { createContext } from 'react';
import { NewsType } from '../types/types';

type NewsContextType = {
  news: NewsType[];
};

export const NewsContext = createContext({} as NewsContextType);
