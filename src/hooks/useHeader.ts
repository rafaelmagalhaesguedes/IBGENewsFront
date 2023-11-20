// useHeader.ts
import { useState, useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

export function useHeader(filterNewsRef: React.RefObject<HTMLDivElement>) {
  const { filterByString } = useContext(NewsContext);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    filterByString(search);
    setSearch('');
    if (filterNewsRef.current) {
      filterNewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return {
    search,
    setSearch,
    handleSearch,
    handleKeyPress,
  };
}
