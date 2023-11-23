import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import iconLogo from '../../assets/logo/logo.svg';
import { NewsContext } from '../../context/NewsContext';
import {
  ContainerHeader,
  IconSearch,
  InputSearch,
  Logo, LogoHeader, NavbarSearch, WrapperHeader } from './Styles';

function Header({ filterNewsRef }: { filterNewsRef: React.RefObject<HTMLDivElement> }) {
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

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') handleSearch();
  };

  return (
    <ContainerHeader>
      <WrapperHeader>
        <LogoHeader>
          <Logo data-testid="logo" src={ iconLogo } alt="Logo" />
        </LogoHeader>
        <NavbarSearch>
          <InputSearch
            data-testid="search-input"
            type="text"
            value={ search }
            placeholder="Buscar notícia"
            onChange={ (e) => setSearch(e.target.value) }
            onKeyPress={ handleKeyPress }
          />
          <IconSearch
            data-testid="search-icon"
            onClick={ handleSearch }
          />
        </NavbarSearch>
      </WrapperHeader>
    </ContainerHeader>
  );
}

export default Header;
