import { useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import iconLogo from '../../assets/logoNews.png';
import {
  ContainerHeader,
  IconSearch,
  InputSearch,
  Logo, NavbarSearch, WrapperHeader } from './Styles';

function Header({ filterNewsRef }: { filterNewsRef: React.RefObject<HTMLDivElement> }) {
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

  return (
    <ContainerHeader>
      <WrapperHeader>
        <Logo src={ iconLogo } alt="Logo" />
        <NavbarSearch>
          <InputSearch
            type="text"
            value={ search }
            placeholder="Buscar notícia"
            onChange={ (e) => setSearch(e.target.value) }
            onKeyPress={ handleKeyPress }
          />
          <IconSearch
            onClick={ handleSearch }
          />
        </NavbarSearch>
      </WrapperHeader>
    </ContainerHeader>
  );
}

export default Header;
