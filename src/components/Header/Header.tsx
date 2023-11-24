import { useHeader } from '../../hooks/useHeader';
import iconLogo from '../../assets/logo/logo.svg';
import {
  ContainerHeader,
  WrapperHeader,
  Logo,
  LogoHeader,
  IconSearch,
  IconSearchMobile,
  InputSearch,
  NavbarSearch,
  ToggleSearch,
} from './Styles';

function Header({ filterNewsRef }: { filterNewsRef: React.RefObject<HTMLDivElement> }) {
  const {
    isSearchVisible,
    setIsSearchVisible,
    search,
    setSearch,
    handleSearch,
    handleKeyPress,
  } = useHeader(filterNewsRef);

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
