// useHeader.ts
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { NewsContext } from '../context/NewsContext';

export function useHeader(filterNewsRef: React.RefObject<HTMLDivElement>) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { filterByString } = useContext(NewsContext);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (!search) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite algo para pesquisar!',
        timer: 3500,
      });
    }
    filterByString(search);
    setSearch('');
    if (filterNewsRef.current) {
      filterNewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (search) {
      setIsSearchVisible(true);
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
  };
}
