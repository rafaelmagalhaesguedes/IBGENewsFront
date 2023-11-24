// useHeader.ts
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { NewsContext } from '../context/NewsContext';

export function useHeader(filterNewsRef: React.RefObject<HTMLDivElement>) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { filterByString } = useContext(NewsContext);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    // Validate search
    if (!search) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite algo para pesquisar!',
        timer: 3500,
      });
    }
    // Filter news
    filterByString(search);

    // Clear search
    setSearch('');

    // Scroll to filter news
    if (filterNewsRef.current) {
      setTimeout(() => {
        // Filter news is a div that wraps the filtered news
        filterNewsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  // Handle search on enter
  const handleKeyPress = (event: any) => {
    // Enter key
    if (event.key === 'Enter') handleSearch();
  };

  useEffect(() => {
    // Show search when search is not empty
    if (search) {
      setIsSearchVisible(true);
      // Hide search when search is empty
    } else {
      setIsSearchVisible(false);
    }
  }, [search]);

  return {
    isSearchVisible,
    setIsSearchVisible,
    search,
    setSearch,
    handleSearch,
    handleKeyPress,
  };
}
