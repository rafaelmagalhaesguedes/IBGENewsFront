import iconLogo from '../../assets/images/logoNews.png';
import { useHeader } from '../../hooks/useHeader';
import {
  ContainerHeader,
  IconSearch,
  InputSearch,
  Logo, LogoHeader, NavbarSearch, WrapperHeader } from './Styles';

function Header({ filterNewsRef }: { filterNewsRef: React.RefObject<HTMLDivElement> }) {
  const { search, setSearch, handleSearch, handleKeyPress } = useHeader(filterNewsRef);

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
