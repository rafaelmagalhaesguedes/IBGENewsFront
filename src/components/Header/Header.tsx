import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import iconLogo from '../../assets/logo/logo.svg';
import {
  ContainerHeader,
  IconSearch,
  IconSearchMobile,
  InputSearch,
  Logo, LogoHeader, NavbarSearch, ToggleSearch, WrapperHeader } from './Styles';
import { NewsContext } from '../../context/NewsContext';

function Header({ filterNewsRef }: { filterNewsRef: React.RefObject<HTMLDivElement> }) {
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
      setTimeout(() => {
        filterNewsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') handleSearch();
  };

  useEffect(() => {
    if (search) {
      setIsSearchVisible(true);
    } else {
      setIsSearchVisible(false);
    }
  }, [search]);

  return (
    <ContainerHeader>
      <WrapperHeader>
        <LogoHeader>
          <Logo data-testid="logo" src={ iconLogo } alt="Logo" />
        </LogoHeader>
        <NavbarSearch isVisible={ isSearchVisible }>
          <InputSearch
            data-testid="search-input"
            type="text"
            value={ search }
            placeholder="Buscar notícia"
            onChange={ (e) => setSearch(e.target.value) }
            onKeyDown={ handleKeyPress }
          />
          <IconSearch
            data-testid="search-icon"
            onClick={ handleSearch }
          />
        </NavbarSearch>
      </WrapperHeader>
      <ToggleSearch>
        <IconSearchMobile
          data-testid="search-mobile"
          onClick={ () => setIsSearchVisible(!isSearchVisible) }
        />
      </ToggleSearch>
    </ContainerHeader>
  );
}

export default Header;
