import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../../context/NewsContext';
import iconLogo from '../../assets/logo.svg';
import {
  ContainerHeader,
  IconSearch,
  InputSearch,
  Logo, LogoHeader, NavbarSearch, TitleHeader, WrapperHeader } from './Styles';

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
        <LogoHeader>
          <Link to="/">
            <Logo src={ iconLogo } alt="Logo" />
          </Link>
          <TitleHeader>Trybe News</TitleHeader>
        </LogoHeader>
        <NavbarSearch>
          <InputSearch
            type="text"
            value={ search }
            placeholder="Search"
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
